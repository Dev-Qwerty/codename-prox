const express = require('express');
const router = express.Router();

let subserviceModel = require('../models/subservice-model');

// get subservices
router
    .route('/:id')
    .get(async (req, res) => {
        try {
            let id = req.params.id
            let subservice = await subserviceModel.find({ mainserviceId: id })
            res.send(subservice)
        } catch (error) {
            console.log(error)
        }

    })

module.exports = router;