const express = require('express');
router = express.Router()

// import models
const orderStatusModel = require('../models/order-status');
const orderModel = require('../models/order-model');
const workerModel = require('../models/worker-model');

// change work status to arrived
router
    .route('/changestatus')
    .post( async (req, res) => {
        if (req.body.status.localeCompare('arrived') == 0){
            let updatedorder = await orderStatusModel.findOneAndUpdate({orderID: req.body.orderID},{status: "arrived"})
            res.send("status changed")
        }else{
            res.send('error')
        }
    })

//check status
router
    .route('/checkstatus/:id')
    .get( async (req, res) => {
        let orderstatus = await orderStatusModel.findOne({orderID: req.params.id},'status -_id')
        res.json({'status': orderstatus.status})
    })


//verify token
router
    .route('/verifytoken')
    .post( async (req, res) => {
        try {
            const orderStatus = await orderStatusModel.findOne({orderID: req.body.orderID})
            if(orderStatus.status.localeCompare('arrived') == 0){
                if(orderStatus.startToken == req.body.token){
                    let neworderStatus = await orderStatusModel.findOneAndUpdate({orderID: req.body.orderID},{status: "started"})
                    res.json({'message': "Work started"});
                }else {
                    res.json({'message': "Invalid Token"});
                }
            }else if(orderStatus.status.localeCompare('started') == 0){
                if(orderStatus.completeToken == req.body.token){
                    let neworderStatus = await orderStatusModel.findOneAndUpdate({orderID: req.body.orderID},{status: "completed"})
                    let order = await orderModel.findOneAndUpdate({orderID: req.body.orderID},{completed: true},{new: true})
                    res.json({'message': "Work completed"});
                    let workerid = await orderModel.findOne({orderID: req.body.orderID}, 'workerID -_id') 
                    let worker = await workerModel.findOneAndUpdate({workerID: workerid.workerID},{$inc:{totalWorks: 1}})
                    if(order.completed && order.paid){
                            await orderStatusModel.findOneAndDelete({orderID: req.body.orderID}).exec()
                    }
                }else {
                    res.json({'message': "Invalid Token"});
                }
            }else if(orderStatus.status.localeCompare('accepted') == 0){
                res.json({'message': "Work has not been started yet"})
            }else{
                res.json({'message': "Work has been completed"})
            }
        } catch (error) {
            console.log(error)
             res.json({'message': "Something went wrong"})
        }
    })


module.exports = router;