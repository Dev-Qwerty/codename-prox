const express = require('express')
const workerRequest = require('../models/workrequest-model')
const router = express.Router()

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
            const { requestId, workerId, requestStatus } = req.body
    
            if (requestStatus === 'accepted') {
                await workerRequest.findOneAndUpdate({requestId: requestId}, {workerId: workerId, requestStatus: requestStatus})
                res.send('worker assigned')
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