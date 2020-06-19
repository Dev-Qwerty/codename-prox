const express = require('express')
const moment = require('moment')
const router = express.Router()
//const sendMessage = require('../misc/textmessage')

// Import Models
const workerRequest = require('../models/workrequest-model')
const orders = require('../models/order-model')
const selectedWorkers = require('../models/selectedWorkers-model')
const workerModel = require('../models/worker-model')
const customerModel = require('../models/user-model')

router
    .route('/workrequest/:id')
    .get((req, res) => {
        // const worker = req.params.id
        workerRequest.find({ workerId: req.params.id })
            .then(response => {
                res.send(response)
            })
            .catch(error => {
                console.error(error)
            })
    })

router
    .route('/workrequest/:id')
    .post( async (req, res) => {
        try {
            const { orderId, requestId, requestStatus } = req.body
            let workerId = req.params.id  //TODO: decrypt workerid
            if(!orderId  || !requestId|| !requestStatus) {
                res.status(400).send('Error updating records!')
            } else{
                if (requestStatus === 'accepted') {
                    await workerRequest.findOneAndUpdate({requestID: requestId}, {workerID: workerId, requestStatus: requestStatus})
                    await orders.findOneAndUpdate({orderID: orderId}, {workerID: workerId})
                    res.send('worker assigned')
                    // TODO: Send SMS to customer
                    let customer = await orders.findOne({orderID: orderId},'userID -_id') // Fetch customer ID
                    let customerDetails = await customerModel.findOne({userID: customer.userID},'name phone -_id') // Fetch customer details
                    let work = await orders.findOne({orderID: orderId},'service.subserviceName  date time'); // Fetch work details
                    let workerDetails = await workerModel.findOne({workerID: workerId},'name phoneNo -_id'); // Fetch worker details
                    workDetails = {
                        workerName: workerDetails.name,
                        work: work.service.subserviceName,
                        date: moment(work.date).format('DD MMMM YYYY'),
                        time: work.time,
                        orderID: orderId
                    }
                    console.log(workDetails)
                    //sendMessage.sendTextMessage("customer",customerDetails,workDetails);
                } else {
                    let selectedWorkersDetails = await selectedWorkers.findOne({orderID: orderId}, '-_id')
                    let declinedWorker = selectedWorkersDetails.selectedWorkers.shift() //Return first worker
                    selectedWorkersDetails.declinedWorkers.push(declinedWorker) //Add declined worker to declined worker array
                    let newWorker = selectedWorkersDetails.selectedWorkers[0]

                    
                    // set new due date
                    let today = new Date() // Find today's date
                    let dateDetails = await workerRequest.findOne({requestID:requestId},'date dueDate -_id')  // fetch orderdate and current duedate of the order
                    let OrderDate = dateDetails.date  // order date
                    OrderDate = new Date(OrderDate)  // change orderdate to date datatype
                    let dueDate = dateDetails.dueDate // current due date
                    let hour = moment().hour() // Curent time(hour)
                    //  hour = ((hour + 11) % 12 + 1); // convert to 12hr
                    
                    if(today.getDate() == OrderDate.getDate()){
                        if(hour>=0 && hour <=6){ 
                            //set time = 7:30 AM
                            dueDate = moment(dueDate).set({hour:7,minute:30,second:0,millisecond:0});
                        }else{
                            // set time as current time + 15 min
                            dueDate = moment(dueDate).add(15, 'minutes');
                        }
                    }else {
                        if(hour>=0 && hour <= 6){
                            // set time = 7:30 AM of current day
                            dueDate = moment(dueDate).set({hour:7,minute:30,second:0,millisecond:0});
                        }else if(hour>=22 && hour <24){
                            // set time = 7:30 AM of next day
                            dueDate = moment().add(1, 'days');
                            dueDate = moment(dueDate).set({hour:7,minute:30,second:0,millisecond:0});
                        }else {
                            // set time as current time + 30 min
                            dueDate = moment(dueDate).add(30, 'minutes');
                        }
                    }

                    //TODO !important : Repeat the cycle once more when all workers decline
                    
                    await workerRequest.findOneAndUpdate({requestID: requestId}, {workerID: newWorker.workerID,dueDate:dueDate})
                    await selectedWorkers.findOneAndUpdate({orderID: orderId}, {selectedWorkers: selectedWorkersDetails.selectedWorkers, declinedWorkers: selectedWorkersDetails.declinedWorkers})
                    // Send SMS to worker
                    let workerDetails = await workerModel.findOne({workerID: newWorker.workerID},'name phoneNo -_id');
                    // Find work details
                    let work = await orders.findOne({orderID: orderId},'service.subserviceName address.line2 date time');
                    workDetails = {
                        mainserviceName: work.service.subserviceName,
                        place: work.address.line2,
                        date: work.date,
                        time: work.time,
                    }
                    //sendMessage.sendTextMessage("worker",workerDetails,workDetails);
                }          
            }
        } catch (error) {
            console.error(error)
        }
    })

module.exports = router