const express = require('express')

// User Model
const User = require('../models/users')


// mock controller
const controller = (req, res) => {
    res.send({message: "ok"})
}


const router = express.Router()

// user/profile
router
    .route('/profile')
    .get(controller)

// /user/editprofile
router
    .route('/editprofile')
    .get((req, res) => {
        res.render('edituserprofile')
    })
    .post((req, res) => {
        let user = new User()
        user.firstName = req.body.fname
        user.lastName = req.body.lname
        user.phone = req.body.phone
        user.email = req.body.email
        user.password = req.body.password

        user.save().then(() => {
            res.send("user created")
        }).catch((error) => {
            console.error("error: ", error);
        })
    })


module.exports = router
