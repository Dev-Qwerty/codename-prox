const express = require('express');
const router = express.Router();

// import order model
const orderModel = require('../models/order-model');
const subserviceModel = require('../models/subservice-model');


router
    .route('/placeorder/pay-later')
    .post(async (req, res) => {
        try {
            global.totalAmount = 0;  // total amount variable
            // calculate total amount
            for (i = 0; i < req.body.service.categories.length; i++) {
                try {
                    const amount = await subserviceModel.find({ categories: { $elemMatch: { _id: req.body.service.categories[i].categoryId } } }, { 'categories.$': "5ead369bd1662c51584b7dd5" })
                    itemAmount = amount[0].categories[0].amount * req.body.service.categories[i].quantity;
                    totalAmount = totalAmount + itemAmount;
                } catch (error) {
                    res.json({ "message": "Failed to place Order" })
                }
            }

            // create new orderrs
            let newOrder = new orderModel;
            newOrder.orderId = 379884;
            newOrder.userId = "adjfne3";
            newOrder.date = req.body.date;
            newOrder.service.subserviceId = req.body.service.serviceId;
            newOrder.service.categories = req.body.service.categories;
            newOrder.totalAmount = totalAmount;
            newOrder.paid = false;
            newOrder.address = req.body.address;

            // newOrder.save()
            res.json({ "message": "Order placed succesfully" })

        } catch (error) {
            res.json({ "message": "Failed to place Order" })
        }

    })

module.exports = router;