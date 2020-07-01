const mongoose = require('mongoose');

const orderTokenSchema = mongoose.Schema({
    orderID: {
        type: String,
        required: true, 
    },
    token: {
        type: String,
        required: true
    }
})

const orderToken = mongoose.model('ordertokens', orderTokenSchema);
module.exports = orderToken