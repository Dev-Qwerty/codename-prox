const express = require('express');
const router = express.Router();
const uniqueId = require('../misc/unique-id')
const assignWorker = require('../misc/assign-worker')

// import order model
const orderModel = require('../models/order-model');
const subserviceModel = require('../models/subservice-model');
const workRequestModel = require('../models/workrequest-model');
const mainserviceModel = require('../models/mainservice-model')


router
    .route('/placeorder/pay-later')
    .post(async (req, res) => {
        try {
            global.totalAmount = 0;  // total amount variable
            global.newOrder = new orderModel;  // create new order instance
            let serviceKeyWords = []   // subservice and category name to find corresponding worker


            // calculate total amount and category
            for (i = 0; i < req.body.service.categories.length; i++) {
                const serviceDetails = await subserviceModel.find({ categories: { $elemMatch: { _id: req.body.service.categories[i].categoryName } } }, { 'categories.$': "5ead369bd1662c51584b7dd5" })
                itemAmount = serviceDetails[0].categories[0].amount * req.body.service.categories[i].quantity; // Find amount of each category
                totalAmount = totalAmount + itemAmount;
                req.body.service.categories[i].categoryName = serviceDetails[0].categories[0].category  // saving category name replacing categoryId in body of the request
                serviceKeyWords.push(serviceDetails[0].categories[0].category) // add subservice category name as service key word to find worker
            }

            // Find subservice details
            const id = req.body.service.serviceId
            const service = await subserviceModel.findById(id)
            mainserviceId = service.mainserviceId
            const mainservice = await mainserviceModel.findById(mainserviceId, 'serviceName -_id');// Find mainservice details
            serviceKeyWords.push(service.name);  // add subservice as service key word name to find worker

            // create new orderrs
            newOrder.orderId = uniqueId.uniqueOrderId();
            newOrder.userId = "adjfne3";   // TODO : save original userid
            newOrder.date = req.body.date;
            newOrder.service.subserviceName = service.name;
            newOrder.service.categories = req.body.service.categories;
            newOrder.totalAmount = totalAmount;
            newOrder.paid = false;
            newOrder.address = req.body.address;

            newOrder.save()
            res.json({ "message": "Order placed succesfully" })


            // function call to find worker for job assigning 
            let assignedWorker = await assignWorker.assignWorker(serviceKeyWords, req.body.address.pin);


            // Create work request
            let newWorkRequest = new workRequestModel;
            newWorkRequest.requestID = uniqueId.uniqueRequestId();
            newWorkRequest.orderID = newOrder.orderId;
            newWorkRequest.workerId = assignedWorker;
            newWorkRequest.service = newOrder.service;
            newWorkRequest.place = req.body.address.line2;
            newWorkRequest.amount = newOrder.totalAmount;
            newWorkRequest.duration = '1 hour';

            newWorkRequest.save()

            // TODO: send notification to worker about work assigned


        } catch (error) {
            // TODO : If error is duplicate orderid create new orderid and save that order to database
            console.log(error)
            res.json({ "message": "Failed to place Order" })
        }

    })

module.exports = router;