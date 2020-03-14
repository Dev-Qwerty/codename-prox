const express = require('express')

const controller = (req, res) => {
    res.send({message: "ok"})
}

const router = express.Router()

// worker/profile
router
    .route('/profile')
    .get(controller)

// /worker/editprofile
router
    .route('/editprofile')
    .get(controller)
    .post(controller)

// /worker/settings
router
    .route('/settings')
    .get(controller)
    .post(controller)


module.exports = router
