const express = require('express')
const workerRequest = require('../models/workrequest-model')
const router = express.Router()

router
    .route('/workrequest/:id')
    .get((req, res) => {
        // const worker = req.params.id
        workerRequest.find({ workerId: req.params.id })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.error(error)
            })
    })
    .post()

module.exports = router