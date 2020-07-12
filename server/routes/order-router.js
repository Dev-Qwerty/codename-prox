const express = require('express');
const https = require('https')
const qs = require('querystring')
const router = express.Router();
const uniqueId = require('../misc/unique-id')
const assignWorker = require('../misc/assign-worker')
const moment = require('moment')
const crypt = require('../misc/crypt')
// const sendMessage = require('../misc/textmessage')

// Middleware for body parsing
const parseUrl = express.urlencoded({ extended: false })
const parseJson = express.json({ extended: false })

// import order model
const orderModel = require('../models/order-model');
const subserviceModel = require('../models/subservice-model');
const workRequestModel = require('../models/workrequest-model');
const mainserviceModel = require('../models/mainservice-model');
const workerModel = require('../models/worker-model');
const orderStatusModel = require('../models/order-status');
const userModel = require('../models/user-model')

const paytm = require('../config/keys')
const checksum_lib = require('../config/paymentgateway/checksum')


router
    .route('/placeorder/pay-later')
    .post([parseUrl,parseJson], async (req, res) => {
        try {
            let completed = true
            if(!req.body.service.serviceId || !req.body.address.phone || !req.body.address.name || !req.body.address.line1 || !req.body.address.line2 || !req.body.address.district || !req.body.address.pin || !req.body.date || !req.body.time || req.body.service.categories == 0 ){
                completed = false
            }else{
                for( i = req.body.service.categories.length; i > 0 ; i--){
                   
                    if(!req.body.service.categories[i-1].quantity || !req.body.service.categories[i-1]._id || !req.body.service.categories[i-1].category || !req.body.service.categories[i-1].amount ){
                        completed = false
                    }
                }
            }
            if(completed){
                global.totalAmount = 0;  // total amount variable
                global.newOrder = new orderModel;  // create new order instance
                let serviceKeyWords = []   // subservice and category name to find corresponding worker


                // calculate total amount and category
                for (i = 0; i < req.body.service.categories.length; i++) {
                    const serviceDetails = await subserviceModel.find({ categories: { $elemMatch: { _id: req.body.service.categories[i]._id } } }, 'categories.$')
                    itemAmount = serviceDetails[0].categories[0].amount * req.body.service.categories[i].quantity; // Find amount of each category
                    totalAmount = totalAmount + itemAmount;
                    serviceKeyWords.push(serviceDetails[0].categories[0].category) // add subservice category name as service key word to find worker
                }

                // Find subservice details
                const id = req.body.service.serviceId
                const service = await subserviceModel.findById(id)
                // const mainservice = await mainserviceModel.findById(service.mainserviceID, 'serviceName -_id');// Find mainservice name for sending message
                serviceKeyWords.push(service.name); // add subservice as service key word name to find worker

                // Remove _id and amount from req.body.service
                for(i=0; i<req.body.service.categories.length; i++){
                    delete req.body.service.categories[i]._id
                    delete req.body.service.categories[i].amount
                }

                req.body.address.phone = `91${req.body.address.phone}`

                // create new orderrs
                // let userID = crypt.decrypt(req.body.id)
                newOrder.orderID = uniqueId.uniqueOrderId();
                newOrder.userID = req.body.id;
                newOrder.date = req.body.date;
                newOrder.service.subserviceName = service.name;
                newOrder.service.categories = req.body.service.categories;
                newOrder.totalAmount = totalAmount;
                newOrder.paid = false;
                newOrder.address = req.body.address;
                newOrder.time = req.body.time;

                newOrder.save();
                res.json({"CODE": "01", "ORDERID": newOrder.orderID});

                //create and save token
                let newOrderStatus = new orderStatusModel;
                newOrderStatus.orderID = newOrder.orderID;
                newOrderStatus.startToken = Math.floor(Math.random() * (999999 - 100000)) + 100000;
                newOrderStatus.completeToken = Math.floor(Math.random() * (999999 - 100000)) + 100000;
                newOrderStatus.save()


                // function call to find worker for job assigning 
                let assignedWorker = await assignWorker.assignWorker(serviceKeyWords, req.body.address.pin, newOrder.orderID);


                // Create work request
                let newWorkRequest = new workRequestModel;
                newWorkRequest.requestID = uniqueId.uniqueRequestId();
                newWorkRequest.orderID = newOrder.orderID;
                newWorkRequest.workerID = assignedWorker;
                newWorkRequest.service = newOrder.service;
                newWorkRequest.address = req.body.address;
                newWorkRequest.amount = newOrder.totalAmount;
                newWorkRequest.date = req.body.date;
                newWorkRequest.time = req.body.time;

                // Find dueDate
                let today = new Date() // Find today's date
                let OrderDate = new Date(newOrder.date) // Order date
                let hour = moment().hour() // Curent time
                //  hour = ((hour + 11) % 12 + 1); // convert to 12hr
                let dueDate = new Date() // Current time for setting dueDate
                
                
                if(today.getDate() == OrderDate.getDate()){
                    if(hour>=0 && hour <=6){ 
                        //set time = 7:30 AM
                        dueDate = moment(dueDate).set({hour:7,minute:30,second:0,millisecond:0});
                    }else{
                        // set time as current time + 15 min
                        dueDate = moment(dueDate).add(15, 'minutes');
                    }
                }else {
                    if(hour>=0 && hour <= 6){
                        // set time = 7:30 AM of current day
                        dueDate = moment(dueDate).set({hour:7,minute:30,second:0,millisecond:0});
                    }else if(hour>=22 && hour <24){
                        // set time = 7:30 AM of next day
                        dueDate = moment().add(1, 'days');
                        dueDate = moment(dueDate).set({hour:7,minute:30,second:0,millisecond:0});
                    }else {
                        // set time as current time + 30 min
                        dueDate = moment(dueDate).add(30, 'minutes');
                    }
                }

                newWorkRequest.dueDate = dueDate;
                newWorkRequest.save();

                //Find worker name and number
                const workerDetails = await workerModel.findOne({workerID: assignedWorker},'name phoneNo -_id');
                workDetails = {
                    mainserviceName: service.name,
                    place: req.body.address.line2,
                    date: req.body.date,
                    time: req.body.time,
                }
                // sendMessage.sendTextMessage("worker",workerDetails,workDetails);
                //TODO:change in paynow also
            }else {
                res.json({"CODE": "00"});
            }
        } catch (error) {
            // TODO : If error is duplicate orderid create new orderid and save that order to database
            console.log(error)
            // res.json({ "message": "Failed to place Order" })
        }

    })

router
    .route('/placeorder/paynow')
    .post([parseUrl,parseJson], async (req, res) => {
        try {
            let completed = true
            if (!req.body.id || !req.body.service.serviceId || !req.body.address.phone || !req.body.address.name || !req.body.address.line1 || !req.body.address.line2 || !req.body.address.district || !req.body.address.pin || !req.body.date || !req.body.time || req.body.service.categories == 0) {
                completed = false
            } else {
                for( i = req.body.service.categories.length; i > 0 ; i--){
                   
                    if(!req.body.service.categories[i-1].quantity || !req.body.service.categories[i-1]._id || !req.body.service.categories[i-1].category || !req.body.service.categories[i-1].amount ){
                        completed = false
                    }
                }
            }

            if (completed) {
                var orderId = uniqueId.uniqueOrderId()
        
                global.totalAmount = 0;  // total amount variable
                global.newOrder = new orderModel;  // create new order instance

                // calculate total amount and category
                for (i = 0; i < req.body.service.categories.length; i++) {
                    const serviceDetails = await subserviceModel.find({ categories: { $elemMatch: { _id: req.body.service.categories[i]._id } } }, 'categories.$')
                    itemAmount = serviceDetails[0].categories[0].amount * req.body.service.categories[i].quantity; // Find amount of each category
                    totalAmount = totalAmount + itemAmount;
                }


                // Find subservice details
                const id = req.body.service.serviceId
                const service = await subserviceModel.findById(id)

                // Remove _id and amount from req.body.service
                for(i=0; i<req.body.service.categories.length; i++){
                    delete req.body.service.categories[i]._id
                    delete req.body.service.categories[i].amount
                }

                req.body.address.phone = `91${req.body.address.phone}`

                // create new orderrs
                let userID = crypt.decrypt(req.body.id)
                newOrder.orderID = orderId;
                newOrder.userID = userID;
                newOrder.date = req.body.date;
                newOrder.service.subserviceName = service.name;
                newOrder.service.categories = req.body.service.categories;
                newOrder.totalAmount = totalAmount;
                newOrder.paid = false;
                newOrder.address = req.body.address;
                newOrder.time = req.body.time;

                newOrder.save().then(() => {
                    console.log("order saved")
                }).catch(err => {
                    console.log(err)
                })
                    
                // Find user email
                let userEmail = await userModel.findOne({userID: userID}, 'email -_id')

                var paymentDetails = {
                    amount: totalAmount,
                    customerId: userID, 
                    customerEmail: userEmail.email,
                    customerPhone: req.body.address.phone
                }
            
                var params = {};
                params['MID'] = paytm.PaytmConfig.mid;
                params['WEBSITE'] = paytm.PaytmConfig.website;
                params['CHANNEL_ID'] = 'WEB';
                params['INDUSTRY_TYPE_ID'] = 'Retail';
                params['ORDER_ID'] = orderId;
                params['CUST_ID'] = paymentDetails.customerId;
                params['TXN_AMOUNT'] = paymentDetails.amount;
                params['CALLBACK_URL'] = 'http://localhost:3000/orders/placeorder/paynow/callback';
                params['EMAIL'] = paymentDetails.customerEmail;
                params['MOBILE_NO'] = paymentDetails.customerPhone;


                checksum_lib.genchecksum(params, paytm.PaytmConfig.key, function (err, checksum) {
                    var txn_url = "https://securegw-stage.paytm.in/theia/processTransaction"; // for staging
                    // var txn_url = "https://securegw.paytm.in/theia/processTransaction"; // for production

                    var form_fields = "";
                    for (var x in params) {
                        form_fields += "<input type='hidden' name='" + x + "' value='" + params[x] + "' >";
                    }
                    form_fields += "<input type='hidden' name='CHECKSUMHASH' value='" + checksum + "' >";

                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write('<center><h1>Please do not refresh this page...</h1></center><form method="post" action="' + txn_url + '" name="f1">' + form_fields + '</form>');
                    res.end();
                });
            } else {
                res.send("failed to place order due to incomplete details")
                // TODO: show styled message instead of res.send
            }
        } catch (error) {
            res.send("Something went wrong!")
            console.log(error)
        }

        
    })

router
    .route('/placeorder/paynow/callback')
    .post((req, res) => {
        try {
            var body = '';

	        req.on('data', function (data) {
	            body += data;
	        });

	        req.on('end', function () {
				var html = "";
				var post_data = qs.parse(body);

				// received params in callback
                console.log('Callback Response: ', post_data, "\n");


				// verify the checksum
				var checksumhash = post_data.CHECKSUMHASH;
				// delete post_data.CHECKSUMHASH;
				var result = checksum_lib.verifychecksum(post_data, paytm.PaytmConfig.key, checksumhash);
                console.log("Checksum Result => ", result, "\n");
            

				// Send Server-to-Server request to verify Order Status
				var params = {"MID": paytm.PaytmConfig.mid, "ORDERID": post_data.ORDERID};

				checksum_lib.genchecksum(params, paytm.PaytmConfig.key, function (err, checksum) {

					params.CHECKSUMHASH = checksum;
					post_data = 'JsonData='+JSON.stringify(params);

					var options = {
						hostname: 'securegw-stage.paytm.in', // for staging
						// hostname: 'securegw.paytm.in', // for production
						port: 443,
						path: '/merchant-status/getTxnStatus',
						method: 'POST',
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded',
							'Content-Length': post_data.length
						}
					};


					// Set up the request
					var response = "";
					var post_req = https.request(options, function(post_res) {
						post_res.on('data', function (chunk) {
							response += chunk;
						});

						post_res.on('end', async function(){
                            console.log('S2S Response: ', response, "\n");

                            var _result = JSON.parse(response);
                            
                            let serviceKeyWords = []
                            if(_result.RESPCODE == 01 && _result.STATUS == 'TXN_SUCCESS') {
                                const serviceDetails = await orderModel.findOne({orderID: _result.ORDERID}, '-_id') //Find service name and categories form workorder db
                                serviceKeyWords.push(serviceDetails.service.subserviceName)
                                for(i = 0; i < serviceDetails.service.categories.length; i++){
                                    //Loop through subservice categories
                                    serviceKeyWords.push(serviceDetails.service.categories[i].category)
                                }

                                //create and save token
                                let newOrderStatus = new orderStatusModel;
                                newOrderStatus.orderID = serviceDetails.orderID;
                                newOrderStatus.startToken = Math.floor(Math.random() * (999999 - 100000)) + 100000;
                                newOrderStatus.completeToken = Math.floor(Math.random() * (999999 - 100000)) + 100000;
                                newOrderStatus.save()

                                // function call to find worker for job assigning 
                                let assignedWorker = await assignWorker.assignWorker(serviceKeyWords, serviceDetails.address.pin, serviceDetails.orderID);

                                // Create work request
                                let newWorkRequest = new workRequestModel;
                                newWorkRequest.requestID = uniqueId.uniqueRequestId();
                                newWorkRequest.orderID = serviceDetails.orderID;
                                newWorkRequest.workerID = assignedWorker;
                                newWorkRequest.service = serviceDetails.service;
                                newWorkRequest.address = serviceDetails.address;
                                newWorkRequest.amount = serviceDetails.totalAmount;
                                newWorkRequest.date = serviceDetails.date;
                                newWorkRequest.time = serviceDetails.time;

                                    // Find dueDate
                                    let today = new Date() // Find today's date
                                    let OrderDate = new Date(serviceDetails.date) // Order date
                                    let hour = moment().hour() // Curent time
                                    //  hour = ((hour + 11) % 12 + 1); // convert to 12hr
                                    let dueDate = new Date() // Current time for setting dueDate
                                    
                                    
                                    if(today.getDate() == OrderDate.getDate()){
                                        if(hour>=0 && hour <=6){ 
                                            //set time = 7:30 AM
                                            dueDate = moment(dueDate).set({hour:7,minute:30,second:0,millisecond:0});
                                        }else{
                                            // set time as current time + 15 min
                                            dueDate = moment(dueDate).add(15, 'minutes');
                                        }
                                    }else {
                                        if(hour>=0 && hour <= 6){
                                            // set time = 7:30 AM of current day
                                            dueDate = moment(dueDate).set({hour:7,minute:30,second:0,millisecond:0});
                                        }else if(hour>=22 && hour <24){
                                            // set time = 7:30 AM of next day
                                            dueDate = moment().add(1, 'days');
                                            dueDate = moment(dueDate).set({hour:7,minute:30,second:0,millisecond:0});
                                        }else {
                                            // set time as current time + 30 min
                                            dueDate = moment(dueDate).add(30, 'minutes');
                                        }
                                    }

                                    newWorkRequest.dueDate = dueDate;
                                    newWorkRequest.save();

                                //Find worker name and number
                                const workerDetails = await workerModel.findOne({workerID: assignedWorker},'name phoneNo -_id');
                                workDetails = {
                                    mainserviceName: serviceDetails.service.subserviceName,
                                    place: serviceDetails.address.line2,
                                    date: serviceDetails.date,
                                    time: serviceDetails.time,
                                }
                                // sendMessage.sendTextMessage("worker",workerDetails,workDetails);
                                //TODO:change in paynow also
                            } else { 
                                orderModel.deleteOne({orderID: _result.ORDERID}).then(() => {
                                    console.log("deleted" + _result.ORDERID)
                                })
                            }

                            // Send response based on the Transaction status (RESPONSE CODE)
                            switch(_result.RESPCODE) {
                                case '01':
                                    res.send(_result.RESPMSG)
                                    break
                                case '227':
                                    res.send(_result.RESPMSG)
                                    break
                                case '235':
                                    res.send(_result.RESPMSG)
                                    break
                                case '295':
                                    res.send(_result.RESPMSG)
                                    break
                                case '334':
                                    res.send('payment failed')
                                    break
                                case '400':
                                    res.send(_result.RESPMSG)
                                    break
                                case '401':
                                    res.send(_result.RESPMSG)
                                    break
                                case '402':
                                    res.send(_result.RESPMSG)
                                    break
                                case '810':
                                    res.send(_result.RESPMSG)
                            }
						});
					});

					// post the data
					post_req.write(post_data);
					post_req.end();
				});
	        });
        } catch (error) {
            console.log(error)
        }       
    })

router
    .route('/orderstatus/:orderid')
    .get([parseUrl,parseJson], async (req, res) => {
        try {
            let orderid = req.params.orderid
            let order = await orderModel.findOne({orderID: orderid})
            res.send(order)
        } catch (error) {
            console.log(error)   
        }
    })

module.exports = router;