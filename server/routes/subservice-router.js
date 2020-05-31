const express = require('express');
const router = express.Router();

let subserviceModel = require('../models/subservice-model');

// get subservices
router
    .route('/:id')
    .get(async (req, res) => {
        try {
            let id = req.params.id
            let subservice = await subserviceModel.find({ mainserviceID: id })
            res.send(subservice)
        } catch (error) {
            console.log(error)
        }

    })

//**routes for mobile app
// subservice route
router
    .route('/app/:id')
    .get(async (req, res) => {
        try {
            let id = req.params.id
            let subservice = await subserviceModel.find({ mainserviceID: id }, '-categories')
            res.send(subservice)
        } catch (error) {
            console.log(error)
        }
    })

router
    .route('/category/app/:id')
    .get(async (req, res) => {
        try {
            let id = req.params.id
            let subsrviceCategory = await subserviceModel.findById(id, 'categories')
            res.send(subsrviceCategory)
        } catch (error) {

        }
    })



module.exports = router;
