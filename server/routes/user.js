const express = require('express')

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
    .get(controller)
    .post(controller)

// /user/settings
router
    .route('/settings')
    .get(controller)
    .post(controller)


    module.exports = router
