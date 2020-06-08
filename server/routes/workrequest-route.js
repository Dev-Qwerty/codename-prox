const express = require('express')
const moment = require('moment')
const router = express.Router()
// Import Models
const workerRequest = require('../models/workrequest-model')
const orders = require('../models/order-model')
const selectedWorkers = require('../models/selectedWorkers-model')

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
    .route('/workrequest')
    .post( async (req, res) => {
        try {
            const { orderId, requestId, workerId, requestStatus } = req.body

            if(!orderId  || !requestId  || !workerId  || !requestStatus) {
                res.status(400).send('Error updating records!')
            } else{
                if (requestStatus === 'accepted') {
                    await workerRequest.findOneAndUpdate({requestID: requestId}, {workerID: workerId, requestStatus: requestStatus})
                    await orders.findOneAndUpdate({orderID: orderId}, {workerID: workerId})
                    res.send('worker assigned')
                    // TODO: Send SMS to customer
                } else {
                    let workerDetails = await selectedWorkers.findOne({orderID: orderId}, '-_id')
                    let declinedWorker = workerDetails.selectedWorkers.shift() //Return first worker
                    workerDetails.declinedWorkers.push(declinedWorker) //Add declined worker to declined worker array
                    let newWorker = workerDetails.selectedWorkers[0]

                    
                    // set new due date
                    let today = new Date() // Find today's date
                    let dateDetails = await workerRequest.findOne({requestID:requestId},'date dueDate -_id')  // fetch orderdate and current duedate of the order
                    let OrderDate = dateDetails.date  // order date
                    OrderDate = new Date(OrderDate)  // change orderdate to date datatype
                    let dueDate = dateDetails.dueDate // current due date
                    let hour = moment().hour() // Curent time
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


                    
                    await workerRequest.findOneAndUpdate({requestID: requestId}, {workerID: newWorker.workerID,dueDate:dueDate})
                    await selectedWorkers.findOneAndUpdate({orderID: orderId}, {selectedWorkers: workerDetails.selectedWorkers, declinedWorkers: workerDetails.declinedWorkers})
                    res.status(200).send({workerDetails})
                }          
            }
        } catch (error) {
            console.error(error)
        }
    })

module.exports = router