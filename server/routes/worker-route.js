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
    .post((req, res) => {
        Worker.Fname = req.body.fname
        Worker.Lname = req.body.lname
        Worker.phone = req.body.phone
        Worker.email = req.body.email
        Worker.location = req.body.location
        Worker.timeSlot = req.body.timeslot
        Worker.Availability = req.body.availability
        Worker.subService = req.body.subservice

        Worker.findOneAndUpdate({_id: req.params.id}, {Fname: req.body.fname, Lname:req.body.lname, phone: req.body.phone, email: req.body.email, location: req.body.location, timeSlot: req.body.timeslot, Availability: req.body.availability, subService :req.body.subservice}, 
            (err, result) => {
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
