const express = require('express');
const http = require('http')
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
const failedorderModel = require('../models/failedorder-model')
const userfineModel = require('../models/userfine-model')

const paytm = require('../config/keys')
const PaytmChecksum = require('../config/PaytmChecksum')
const { fail } = require('assert');


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

                // create new orders
                newOrder.orderID = uniqueId.uniqueOrderId();
                newOrder.userID = crypt.decrypt(req.body.id);
                newOrder.date = req.body.date;
                newOrder.service.subserviceName = service.name;
                newOrder.service.categories = req.body.service.categories;
                newOrder.totalAmount = totalAmount;
                newOrder.paid = false;
                newOrder.address = req.body.address;
                newOrder.time = req.body.time;

                newOrder.save();
                res.json({"status":"01"})

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
                res.json({"status": "00"});
            }
        } catch (error) {
            // TODO : If error is duplicate orderid create new orderid and save that order to database
            console.log(error)
            // res.json({ "message": "Failed to place Order" })
        }

    })


router
    .route('/processpayment')
    .post((req, res) => {
        try {
            let body = ''
            req.on('data', (chunk) => {
                body += chunk
            }).on('end', async () => {
                let data = JSON.parse(body)

                let completed = true
                if (!data.id || !data.service.serviceId || !data.address.phone || !data.address.name || !data.address.line1 || !data.address.line2 || !data.address.district || !data.address.pin || !data.date || !data.time || data.service.categories == 0) {
                    completed = false
                } else {
                    for( i = data.service.categories.length; i > 0 ; i--){
                    
                        if(!data.service.categories[i-1].quantity || !data.service.categories[i-1]._id || !data.service.categories[i-1].category || !data.service.categories[i-1].amount ){
                            completed = false
                        }
                    }
                }   

                if(completed) {
                    var orderId = uniqueId.uniqueOrderId()
        
                    global.totalAmount = 0;  // total amount variable
                    global.newOrder = new orderModel;  // create new order instance

                    // calculate total amount and category
                    for (i = 0; i < data.service.categories.length; i++) {
                        const serviceDetails = await subserviceModel.find({ categories: { $elemMatch: { _id: data.service.categories[i]._id } } }, 'categories.$')
                        itemAmount = serviceDetails[0].categories[0].amount * data.service.categories[i].quantity; // Find amount of each category
                        totalAmount = totalAmount + itemAmount;
                    }


                    // Find subservice details
                    const id = data.service.serviceId
                    const service = await subserviceModel.findById(id)

                    // Remove _id and amount from data.service
                    for(i=0; i<data.service.categories.length; i++){
                        delete data.service.categories[i]._id
                        delete data.service.categories[i].amount
                    }

                    data.address.phone = `91${data.address.phone}`

                    // create new orderrs
                    let userID = crypt.decrypt(data.id)
                    newOrder.orderID = orderId;
                    newOrder.userID = userID;
                    newOrder.date = data.date;
                    newOrder.service.subserviceName = service.name;
                    newOrder.service.categories = data.service.categories;
                    newOrder.totalAmount = totalAmount;
                    newOrder.paid = false;
                    newOrder.address = data.address;
                    newOrder.time = data.time;

                    newOrder.save().then(() => {
                        console.log("order saved")
                    }).catch(err => {
                        console.log(err)
                    })
                        
                    // Find user email
                    let User = await userModel.findOne({userID: userID}, 'email phone -_id')

                    const paytmParams = {}

                    paytmParams.body = {
                        "requestType": "Payment",
                        "mid": paytm.PaytmConfig.mid,
                        "websiteName": paytm.PaytmConfig.website,
                        "orderId": orderId,
                        "callbackUrl": "http://localhost:3000/orders/paymentresponse",
                        "txnAmount": {
                            "value": totalAmount,
                            "currency": "INR",
                        },
                        "userInfo": {
                            "custId": data.address.phone,
                        },
                    };

                    PaytmChecksum.generateSignature(JSON.stringify(paytmParams.body), paytm.PaytmConfig.key).then(function (checksum) {

                        paytmParams.head = {
                            "signature": checksum
                        };
    
                        var post_data = JSON.stringify(paytmParams);
    
                        var options = {
    
                            /* for Staging */
                            hostname: 'securegw-stage.paytm.in',
    
                            /* for Production */
                            // hostname: 'securegw.paytm.in',
    
                            port: 443,
                            path: `/theia/api/v1/initiateTransaction?mid=${paytm.PaytmConfig.mid}&orderId=${orderId}`,
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Content-Length': post_data.length
                            }
                        };
    
                        var response = "";
                        var post_req = https.request(options, function (post_res) {
                            post_res.on('data', function (chunk) {
                                response += chunk;
                            });
    
                            post_res.on('end', function () {
                                response = JSON.parse(response)
    
                                res.writeHead(200, { 'Content-Type': 'text/html' })
                                res.write(`<html>
                                    <head>
                                        <title>Show Payment Page</title>
                                    </head>
                                    <body>
                                        <center>
                                            <h1>Please do not refresh this page...</h1>
                                        </center>
                                        <form method="post" action="https://securegw-stage.paytm.in/theia/api/v1/showPaymentPage?mid=${paytm.PaytmConfig.mid}&orderId=${orderId}" name="paytm">
                                            <table border="1">
                                                <tbody>
                                                    <input type="hidden" name="mid" value="${paytm.PaytmConfig.mid}">
                                                        <input type="hidden" name="orderId" value="${orderId}">
                                                        <input type="hidden" name="txnToken" value="${response.body.txnToken}">
                                             </tbody>
                                          </table>
                                       </form>
                                    </body>
                                 </html>`)
                                res.end()
                            });
                        });
    
                        post_req.write(post_data);
                        post_req.end();
                    });
                }else {
                    res.send("Payment failed due to incomplete details.")
                }
            })
        } catch (error) {
            console.log(error)
        }
    })

router
    .route('/paymentresponse')
    .post((req, res) => {
        let callbackResponse = ''

        req.on('data', (chunk) => {
            callbackResponse += chunk
        }).on('end', () => {
            let data = qs.parse(callbackResponse)

            data = JSON.parse(JSON.stringify(data))
            const paytmChecksum = data.CHECKSUMHASH

            var isVerifySignature = PaytmChecksum.verifySignature(data, paytm.PaytmConfig.key, paytmChecksum)
                if (isVerifySignature) {

                    var paytmParams = {};

                    paytmParams.body = {
                        "mid": paytm.PaytmConfig.mid,
                        "orderId": data.ORDERID,
                    };

                    PaytmChecksum.generateSignature(JSON.stringify(paytmParams.body), paytm.PaytmConfig.key).then(function (checksum) {
                        paytmParams.head = {
                            "signature": checksum
                        };

                        var post_data = JSON.stringify(paytmParams);

                        var options = {

                            /* for Staging */
                            hostname: 'securegw-stage.paytm.in',

                            /* for Production */
                            // hostname: 'securegw.paytm.in',

                            port: 443,
                            path: '/v3/order/status',
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Content-Length': post_data.length
                            }
                        };

                        // Set up the request
                        var response = "";
                        var post_req = https.request(options, function (post_res) {
                            post_res.on('data', function (chunk) {
                                response += chunk;
                            });

                            post_res.on('end', async function () {
                                var _result = JSON.parse(response);
                                let serviceKeyWords = []
                                const serviceDetails = await orderModel.findOne({orderID: _result.body.orderId}, '-_id') //Find service name and categories form workorder db
                                if(_result.body.resultInfo.resultCode == 01 && _result.body.resultInfo.resultStatus == 'TXN_SUCCESS') {
                                    await orderModel.findOneAndUpdate({orderID: _result.body.orderId}, {paid: true}).then(() => {
                                        console.log('order updated')
                                    })
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
                                    // Delete order from workorders
                                    orderModel.deleteOne({orderID: _result.body.orderId}).then(() => {
                                        console.log("deleted" + _result.body.orderId)
                                    })

                                    // create a failed order instance for reference
                                    let newfailedorder = new failedorderModel
                                    newfailedorder.orderID =  serviceDetails.orderID
                                    newfailedorder.userID = serviceDetails.userID
                                    newfailedorder.service = serviceDetails.service
                                    newfailedorder.address = serviceDetails.address
                                    newfailedorder.totalAmount = serviceDetails.totalAmount
                                    newfailedorder.respCode = _result.body.resultInfo.resultCode
                                    newfailedorder.respMsg = _result.body.resultInfo.resultMsg
                                    newfailedorder.txnId = _result.body.txnId
                                    newfailedorder.txnDate = _result.body.txnDate

                                    newfailedorder.save()
                                }
                                // Send response based on the Transaction status (RESPONSE CODE)
                                switch(_result.body.resultInfo.resultCode) {
                                    case '01':
                                        res.writeHead(302, {
                                            Location: 'http://localhost:8080/customerdashboard'
                                        })
                                        res.end()
                                        break
                                    case '227':
                                        res.writeHead(302, {
                                            Location: 'http://localhost:8080/orderstatus?r='+_result.body.resultInfo.resultCode
                                        })
                                        res.end()
                                        break
                                    case '235':
                                        res.writeHead(302, {
                                            Location: 'http://localhost:8080/orderstatus?r='+_result.body.resultInfo.resultCode
                                        })
                                        res.end()
                                        break
                                    case '295':
                                        res.writeHead(302, {
                                            Location: 'http://localhost:8080/orderstatus?r='+_result.body.resultInfo.resultCode
                                        })
                                        res.end()
                                        break
                                    case '334':
                                        res.writeHead(302, {
                                            Location: 'http://localhost:8080/orderstatus?r='+_result.body.resultInfo.resultCode
                                        })
                                        res.end()
                                        break
                                    case '400':
                                        res.writeHead(302, {
                                            Location: 'http://localhost:8080/orderstatus?r='+_result.body.resultInfo.resultCode
                                        })
                                        res.end()
                                        break
                                    case '401':
                                        res.writeHead(302, {
                                            Location: 'http://localhost:8080/orderstatus?r='+_result.body.resultInfo.resultCode
                                        })
                                        res.end()
                                        break
                                    case '402':
                                        res.writeHead(302, {
                                            Location: 'http://localhost:8080/orderstatus?r='+_result.body.resultInfo.resultCode
                                        })
                                        res.end()
                                        break
                                    case '810':
                                        res.writeHead(302, {
                                            Location: 'http://localhost:8080/orderstatus?r='+_result.body.resultInfo.resultCode
                                        })
                                        res.end()
                                }
                            });
                        });

                        // post the data
                        post_req.write(post_data);
                        post_req.end();
                    });
                } else {
                    console.log("Checksum Mismatched");
                }
        })
    })
    

router
    .route('/completeorder/paynow/')
    .post([parseUrl,parseJson], async (req, res) => {
        try {
            let completed = true
            if (!req.body.id || req.body.orderId || !req.body.service.serviceId || req.body.service.categories == 0) {
                completed = false
            } else {
                for( i = req.body.service.categories.length; i > 0 ; i--){
                    if(!req.body.service.categories[i-1].quantity || !req.body.service.categories[i-1]._id || !req.body.service.categories[i-1].category || !req.body.service.categories[i-1].amount ){
                        completed = false
                    }
                }
            }

            if (completed) {
                global.totalAmount = 0;  // total amount variable

                // calculate total amount and category
                for (i = 0; i < req.body.service.categories.length; i++) {
                    const serviceDetails = await subserviceModel.find({ categories: { $elemMatch: { _id: req.body.service.categories[i]._id } } }, 'categories.$')
                    itemAmount = serviceDetails[0].categories[0].amount * req.body.service.categories[i].quantity; // Find amount of each category
                    totalAmount = totalAmount + itemAmount;
                }

                let userID = crypt.decrypt(req.body.id)
                // Find user email and phone
                let User = await userModel.findOne({userID: userID}, 'email phone -_id')

                var paymentDetails = {
                    amount: totalAmount,
                    customerId: userID, 
                    customerEmail: User.email,
                    customerPhone: User.phone
                }

                var params = {};
                params['MID'] = paytm.PaytmConfig.mid;
                params['WEBSITE'] = paytm.PaytmConfig.website;
                params['CHANNEL_ID'] = 'WEB';
                params['INDUSTRY_TYPE_ID'] = 'Retail';
                params['ORDER_ID'] = req.body.orderId;
                params['CUST_ID'] = paymentDetails.customerId;
                params['TXN_AMOUNT'] = paymentDetails.amount;
                params['CALLBACK_URL'] = 'http://localhost:3000/orders/completeorder/processpayment';
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
            res.send('something went wrong')
            console.log(error)
        }
    })

router
    .route('/completeorder/processpayment')
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

                    post_res.on('end', async function(){
                        console.log('S2S Response: ', response, "\n");

                        var _result = JSON.parse(response);
                        
                        if(_result.RESPCODE == 01 && _result.STATUS == 'TXN_SUCCESS') {
                            await orderModel.findOneAndUpdate({orderID: _result.ORDERID}, {paid: true}).then(() => {
                                console.log('order updated')
                            })
                        }

                        // Send response based on the Transaction status (RESPONSE CODE)
                        switch(_result.RESPCODE) {
                            case '01':
                                res.writeHead(302, {
                                    Location: 'http://localhost:8080/customerdashboard'
                                })
                                res.end()
                                break
                            case '227':
                                res.writeHead(302, {
                                    Location: 'http://localhost:8080/paymentstatus?s='+_result.RESPCODE
                                })
                                res.end()
                                break
                            case '235':
                                res.writeHead(302, {
                                    Location: 'http://localhost:8080/paymentstatus?s='+_result.RESPCODE
                                })
                                res.end()
                                break
                            case '295':
                                res.writeHead(302, {
                                    Location: 'http://localhost:8080/paymentstatus?s='+_result.RESPCODE
                                })
                                res.end()
                                break
                            case '334':
                                res.writeHead(302, {
                                    Location: 'http://localhost:8080/paymentstatus?s='+_result.RESPCODE
                                })
                                res.end()
                                break
                            case '400':
                                res.writeHead(302, {
                                    Location: 'http://localhost:8080/paymentstatus?s='+_result.RESPCODE
                                })
                                res.end()
                                break
                            case '401':
                                res.writeHead(302, {
                                    Location: 'http://localhost:8080/paymentstatus?s='+_result.RESPCODE
                                })
                                res.end()
                                break
                            case '402':
                                res.writeHead(302, {
                                    Location: 'http://localhost:8080/paymentstatus?s='+_result.RESPCODE
                                })
                                res.end()
                                break
                            case '810':
                                res.writeHead(302, {
                                    Location: 'http://localhost:8080/paymentstatus?s='+_result.RESPCODE
                                })
                                res.end()
                        }
                    });
                });
                // post the data
                post_req.write(post_data);
                post_req.end();
            });
        });
    })


router
    .route('/cancel')
    .post([parseJson, parseUrl], async (req, res) => {
        try {
            const orderId = req.body.orderId
            const userId = await orderModel.findOne({orderID: orderId}, 'userID -_id')
            const user = await userfineModel.findOne({userID: userId.userID})
            
            // updates fine if user is already present
            if(user != null) {
                await userfineModel.update(
                    {userID: userId.userID},
                    { $push: { fine: {
                        orderID: orderId,
                        amount: 100
                    }}}
                )
                res.send("fine updated")
            } else {
                // Adds users and fine since user is not present
                let fine = []
                fine.push({orderID: orderId, amount: 100})
                let newuserfine = new userfineModel
                newuserfine.userID = userId.userID
                newuserfine.fine = fine
                await newuserfine.save()
                res.send('fine added')
            }
        } catch (error) {
            res.send(error)
        } 
    })

module.exports = router;