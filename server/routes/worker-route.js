const express = require('express')
const mongoose = require('mongoose')

// Fix Deprication Warning
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// Import Worker Model
const Worker = require('../models/worker-model')


// Mock Controller
const controller = (req, res) => {
    res.send({message: "ok"})
}

const router = express.Router()

// worker/profile
// Retrive the worker's profile
router
    .route('/profile/:id')
    .get((req, res) => {
        Worker.findById(req.params.id, (err, worker) => {
            if (err) {
                console.error(err);
            } else {
                res.send(worker)
            }
        })
    })

// /worker/editprofile
router
    .route('/editprofile/:id')
    // Retriver the worker's profile for editing
    .get((req, res) => {
        Worker.findById(req.params.id, (err, worker) => {
            if (err) {
                console.error(err);
            } else {
                res.send(worker)
            }
        })
    })

    // Updater the worker's profile
    .post( (req, res) => {
        let worker = {}
        if(req.body.fname) worker.Fname = req.body.fname
        if(req.body.lname) worker.Lname = req.body.lname
        if(req.body.phone) worker.phone = req.body.phone
        if(req.body.email) worker.email = req.body.email
        if(req.body.location) worker.location = req.body.location
        if(req.body.timeslot) worker.timeSlot = req.body.timeslot
        if(req.body.availability) worker.Availability = req.body.availability
        if(req.body.subservice) worker.subService = req.body.subservice

        worker = {$set: worker}

        Worker.findOneAndUpdate({_id: req.params.id}, worker, (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send("profile updated")
                }
        })
    })

// /worker/settings
router
    .route('/settings')
    .get(controller)
    .post(controller)


module.exports = router
