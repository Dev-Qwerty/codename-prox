const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

let mainserviceModel = require('../models/mainservice-model')

// routes

// /mainservice/cleaning
router
    .route('/cleaning')
    .get((req, res) => {
        mainserviceModel.findOne({serviceName:'Cleaning'},(err,mainservices) => {
            console.log(mainservices.subservices)
            res.send(mainservices.subservices)
        })
    })
    // .post((req, res) => {
    //     let mainservice = new mainserviceModel;
    //     mainservice.serviceName = "Cleaning";
    //     mainservice.subservices = ['House Cleaning', 'Bathroom Cleaning', 'Kitchen Cleaning', 'Car Washing'];
    //     mainservice.save((err) => {
    //         console.log(err);
    //     })
    // })


// /mainservice/electronics
router
    .route('/electronics')
    .get((req, res) => {
        mainserviceModel.findOne({ serviceName: "Electronics" },(err, mainservices) => {
            console.log(mainservices.subservices);
            res.send(mainservices.subservices);
        });
    })


// /mainservice/tradesman
router
    .route("/tradesman")
    .get((req, res) => {
        mainserviceModel.findOne({serviceName: "Tradesman"},(err, mainservices) => {
            console.log(mainservices.subservices);
            res.send(mainservices.subservices);
        });
    });

module.exports = router