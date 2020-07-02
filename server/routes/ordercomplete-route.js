const express = require('express');
router = express.Router()

// import models
const ordertokenModel = require('../models/order-token');
const orderModel = require('../models/order-model');

router
    .route('/gettoken/:id')
    .get( async (req, res) => {
        try {
            const ordertoken = await ordertokenModel.findOne({orderID: req.params.id});
            res.send(ordertoken.token)
        } catch (error) {
            console.log(error)
        }
    })

router
    .route('/verifytoken')
    .post( async (req, res) => {
        try {
            let worktokendetails = await ordertokenModel.findOne({orderID: req.body.orderID})
            if(req.body.token == worktokendetails.token){
              await orderModel.findOneAndUpdate({orderID: req.body.orderID},{completed: true})
              res.send("Work completed")
            }else {
                res.send("Invalid Token")
            }
        } catch (error) {
            res.send("Invalid Token")
        }
    })


module.exports = router;