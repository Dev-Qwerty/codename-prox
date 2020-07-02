const express = require('express');
router = express.Router()

// import models
const worktokenModel = require('../models/order-token');

router
    .route('/gettoken/:id')
    .get( async (req, res) => {
        try {
            const worktoken = await worktokenModel.findOne({orderID: req.params.id});
            res.send(worktoken.token)
        } catch (error) {
            console.log(error)
        }
    })


module.exports = router;