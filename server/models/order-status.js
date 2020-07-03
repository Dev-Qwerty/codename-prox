const mongoose = require('mongoose');

const orderTokenSchema = mongoose.Schema({
    orderID: {
        type: String,
        required: true, 
    },
    status: {
        type: String,
    },
    token: {
        type: String,
        required: true
    }
})

const orderToken = mongoose.model('ordertokens', orderTokenSchema);
module.exports = orderToken