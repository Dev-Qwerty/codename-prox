const express = require('express')
const router = express.Router()
// Import Models
const workerRequest = require('../models/workrequest-model')
const orders = require('../models/order-model')

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
    
            if (requestStatus === 'accepted') {
                await workerRequest.findOneAndUpdate({requestID: requestId}, {workerID: workerId, requestStatus: requestStatus})
                await orders.findOneAndUpdate({orderID: orderId}, {workerID: workerId})
                res.send('worker assigned')
                // TODO: Send SMS to customer
            } else {
                let workerDetails = await selectedWorkers.findOne({orderID: orderId}, '-_id')
                let declinedWorker = workerDetails.selectedWorkers.shift() //Return first worker
                workerDetails.declinedWorkers.push(declinedWorker) //Add declined worker to declined worker array
                res.send('worker declined')
                // TODO: update wokerrequest, selected workers
            }          
        } catch (error) {
            console.error(error)
        }
    })

module.exports = router