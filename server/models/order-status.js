const mongoose = require('mongoose');

const orderStatusSchema = mongoose.Schema({
    orderID: {
        type: String,
        required: true, 
    },
    status: {
        type: String,
        default: "placed"
    },
    startToken: {
        type: Number,
        required: true
    },
    completeToken: {
        type: Number,
        required: true
    }
})

const orderstatus = mongoose.model('orderstatus', orderStatusSchema);
module.exports = orderstatus