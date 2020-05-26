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
                // TODO: create algo for finding worker
                // TODO: send request to next worker in list
                res.send('worker declined')
            }          
        } catch (error) {
            console.error(error)
        }
    })

module.exports = router