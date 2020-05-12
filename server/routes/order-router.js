const express = require('express');
const router = express.Router();

// import order model
let orderModel = require('../models/order-model');

router
    .route('/placeorder/pay-later')
    .post((req, res) => {
        let newOrder = new orderModel;
        newOrder.orderId = 379884;
        newOrder.userId = "adjfne3";
        newOrder.workerId = "vgjhsj";
        newOrder.service.subserviceId = "asdfg";
        newOrder.service.categories = req.body.service.categories;
        newOrder.totalAmount = 3434;
        newOrder.paid = false;
        newOrder.address = req.body.address;

        newOrder.save()
        res.json({ "message": "Order placed succesfully" })
    })

module.exports = router;