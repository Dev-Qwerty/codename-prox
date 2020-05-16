const express = require('express');
const router = express.Router();
const uniqueId = require('../config/unique-id')

// import order model
const orderModel = require('../models/order-model');
const subserviceModel = require('../models/subservice-model');


router
    .route('/placeorder/pay-later')
    .post(async (req, res) => {
        try {
            global.totalAmount = 0;  // total amount variable
            global.newOrder = new orderModel;  // create new order instance

            // calculate total amount and category
            for (i = 0; i < req.body.service.categories.length; i++) {
                const serviceDetails = await subserviceModel.find({ categories: { $elemMatch: { _id: req.body.service.categories[i].categoryId } } }, { 'categories.$': "5ead369bd1662c51584b7dd5" })
                itemAmount = serviceDetails[0].categories[0].amount * req.body.service.categories[i].quantity;
                totalAmount = totalAmount + itemAmount;
                req.body.service.categories[i].categoryId = serviceDetails[0].categories[0].category  // saving category name insted of categoryId
            }

            // Find name of the subservice
            const id = req.body.service.serviceId
            const service = await subserviceModel.findById(id)


            // create new orderrs
            newOrder.orderId = uniqueId.uniqueOrderId();
            newOrder.userId = "adjfne3";   // TODO : save original userid
            newOrder.date = req.body.date;
            newOrder.service.subserviceId = service.name;
            newOrder.service.categories = req.body.service.categories;
            newOrder.totalAmount = totalAmount;
            newOrder.paid = false;
            newOrder.address = req.body.address;

            newOrder.save()
            res.json({ "message": "Order placed succesfully" })

        } catch (error) {
            // TODO : If error is duplicate orderid create new orderid and save that order to database
            console.log(error)
            res.json({ "message": "Failed to place Order" })
        }

    })

module.exports = router;