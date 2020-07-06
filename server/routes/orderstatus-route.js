const express = require('express');
router = express.Router()

// import models
const orderStatusModel = require('../models/order-status');
const orderModel = require('../models/order-model');

router
    .route('/changestatus')
    .post( async (req, res) => {
        if (req.body.status == "arrived"){
            let updatedorder = await orderStatusModel.findOneAndUpdate({orderID: req.body.orderID},{status: "Arrived"})
        }
        res.send("status changed")
    })

router
    .route('/gettoken/:id')
    .get( async (req, res) => {
        try {
            const orderstatus = await orderStatusModel.findOne({orderID: req.params.id});
            if(orderstatus.status == 'arrived'){
                res.send(orderstatus.startToken)
            }else if(orderstatus.status == 'started'){
                res.send(orderstatus.completeToken)
            }else if(orderstatus.status == 'accepted'){
                res.send("Work has not been started yet")
            }else{
                res.send("Work has been completed")
            }
        } catch (error) {
            console.log(error)
        }
    })

router
    .route('/verifytoken')
    .post( async (req, res) => {
        try {
            let worktokendetails = await orderStatusModel.findOne({orderID: req.body.orderID})
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