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
    .post((req, res) => {
        const { requestId, workerId, requestStatus } = req.body

        workerRequest.findOneAndUpdate({requestId: requestId}, {workerId: workerId, requestStatus: requestStatus})
            .then(() => {
                res.send('worker assigned')
            })
            .catch(error => {
                console.error(error)
            })
    })

module.exports = router