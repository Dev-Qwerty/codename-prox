const mongoose = require('mongoose');

const orderTokenSchema = mongoose.Schema({
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

const orderToken = mongoose.model('ordertokens', orderTokenSchema);
module.exports = orderToken