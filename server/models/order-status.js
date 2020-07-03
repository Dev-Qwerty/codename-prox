const mongoose = require('mongoose');

const orderStatusSchema = mongoose.Schema({
    orderID: {
        type: String,
        required: true, 
    },
    status: {
        type: String,
    },
    token1: {
        type: Number,
        required: true
    },
    token2: {
        type: Number,
        required: true
    }
})

const orderstatus = mongoose.model('orderstatus', orderStatusSchema);
module.exports = orderstatus