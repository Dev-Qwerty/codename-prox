const express = require('express')
const mongoose = require('mongoose')


// Fix Deprication Warning
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// Import User Model
const User = require('../models/user-model')


// mock controller
const controller = (req, res) => {
    res.send({message: "ok"})
}


const router = express.Router()

// user/profile
// retrive the user's profile
router
    .route('/profile/:id')
    .get((req, res) => {
        User.findById(req.params.id, (err, user) => {
            if (err) {
                console.error(err);
            } else {
                res.send(user)
            }
        })
    })

// /user/editprofile
router
    .route('/editprofile/:id')

    // Retrive the User profile for editing
    .get((req, res) => {
        User.findById(req.params.id, (err, user) => {
            if (err) {
                console.error(err);
            } else {
                res.send(user)
            }
        })
    })

    // Updates the User's profile
    .post((req, res) => {
        let user = {}
        if(req.body.firstName) user.firstName = req.body.firstName
        if(req.body.lastName) user.lastName = req.body.lastName
        if(req.body.phone) user.phone = req.body.phone
        if(req.body.email) user.email = req.body.email
        if(req.body.password) user.password = req.body.password

        user = {$set: user}
        
        User.findOneAndUpdate({_id: req.params.id}, user, (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send("profile updated")
                }
        })
    })

// /user/settings
router
    .route('/settings')
    .get(controller)
    .post(controller)


module.exports = router
