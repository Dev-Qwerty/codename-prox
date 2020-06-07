const express = require('express');
const https = require('https')
const qs = require('querystring')
const router = express.Router();
const uniqueId = require('../misc/unique-id')
const assignWorker = require('../misc/assign-worker')

// Middleware for body parsing
const parseUrl = express.urlencoded({ extended: false })
const parseJson = express.json({ extended: false })

// import order model
const orderModel = require('../models/order-model');
const subserviceModel = require('../models/subservice-model');
const workRequestModel = require('../models/workrequest-model');
const mainserviceModel = require('../models/mainservice-model')

const paytm = require('../config/keys')
const checksum_lib = require('../config/paymentgateway/checksum')


router
    .route('/placeorder/pay-later')
    .post([parseUrl,parseJson], async (req, res) => {
        try {
            global.totalAmount = 0;  // total amount variable
            global.newOrder = new orderModel;  // create new order instance
            let serviceKeyWords = []   // subservice and category name to find corresponding worker


            // calculate total amount and category
            for (i = 0; i < req.body.service.categories.length; i++) {
                console.log(req.body.service.categories[i].categoryName)
                const serviceDetails = await subserviceModel.find({ categories: { $elemMatch: { _id: req.body.service.categories[i].categoryName } } }, 'categories.$')
                console.log(serviceDetails)
                itemAmount = serviceDetails[0].categories[0].amount * req.body.service.categories[i].quantity; // Find amount of each category
                totalAmount = totalAmount + itemAmount;
                req.body.service.categories[i].categoryName = serviceDetails[0].categories[0].category  // saving category name replacing categoryId in body of the request
                serviceKeyWords.push(serviceDetails[0].categories[0].category) // add subservice category name as service key word to find worker
            }

            // Find subservice details
            const id = req.body.service.serviceId
            const service = await subserviceModel.findById(id)
            mainserviceID = service.mainserviceID
            const mainservice = await mainserviceModel.findById(mainserviceID, 'serviceName -_id');// Find mainservice details
            serviceKeyWords.push(service.name);  // add subservice as service key word name to find worker

            // create new orderrs
            newOrder.orderID = uniqueId.uniqueOrderId();
            newOrder.userID = "adjfne3";   // TODO : save original userid
            newOrder.date = req.body.date;
            newOrder.service.subserviceName = service.name;
            newOrder.service.categories = req.body.service.categories;
            newOrder.totalAmount = totalAmount;
            newOrder.paid = false;
            newOrder.address = req.body.address;
            newOrder.time = req.body.time;

            newOrder.save()
            res.json({ "message": "Order placed succesfully" })


            // function call to find worker for job assigning 
            let assignedWorker = await assignWorker.assignWorker(serviceKeyWords, req.body.address.pin, newOrder.orderID);


            // Create work request
            let newWorkRequest = new workRequestModel;
            newWorkRequest.requestID = uniqueId.uniqueRequestId();
            newWorkRequest.orderID = newOrder.orderID;
            newWorkRequest.workerID = assignedWorker;
            newWorkRequest.service = newOrder.service;
            newWorkRequest.place = req.body.address.line2;
            newWorkRequest.amount = newOrder.totalAmount;
            newWorkRequest.date = req.body.date;
            newWorkRequest.time = req.body.time;

            newWorkRequest.save()

            // TODO: send notification to worker about work assigned


        } catch (error) {
            // TODO : If error is duplicate orderid create new orderid and save that order to database
            console.log(" error occured")
            res.json({ "message": "Failed to place Order" })
        }

    })

router
    .route('/placeorder/paynow')
    // For payment testing
    .get((req, res) => {
        res.render('payment')
    })
    .post([parseUrl,parseJson], (req, res) => {
        var orderId = uniqueId.uniqueOrderId()
        var paymentDetails = {
            amount: req.body.amount,
            customerId: req.body.customerId,
            customerEmail: req.body.customerEmail,
            customerPhone: req.body.customerPhone
            // customerId: '145233',
            // amount: '2599',
            // customerEmail: 'abc@mailinator.com',
            // customerPhone: '7777777777'
        }
        if(!paymentDetails.amount || !paymentDetails.customerId || !paymentDetails.customerEmail || !paymentDetails.customerPhone) {
            res.status(400).send('Payment failed')
        } else {
            var params = {};
            params['MID'] = paytm.PaytmConfig.mid;
            params['WEBSITE'] = paytm.PaytmConfig.website;
            params['CHANNEL_ID'] = 'WEB';
            params['INDUSTRY_TYPE_ID'] = 'Retail';
            params['ORDER_ID'] = orderId;
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
                res.write('<html><head><title>Merchant Checkout Page</title></head><body><center><h1>Please do not refresh this page...</h1></center><form method="post" action="' + txn_url + '" name="f1">' + form_fields + '</form><script type="text/javascript">document.f1.submit();</script></body></html>');
                res.end();
            });
        }
    })

router
    .route('/placeorder/paynow/callback')
    .post((req, res) => {

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

						post_res.on('end', function(){
							console.log('S2S Response: ', response, "\n");

							var _result = JSON.parse(response);
                            if(_result.STATUS == 'TXN_SUCCESS') {
                                res.send('payment sucess')
                            }else {
                                res.send('payment failed')
                            }
						});
					});

					// post the data
					post_req.write(post_data);
					post_req.end();
				});
	        });
    })
    

module.exports = router;
