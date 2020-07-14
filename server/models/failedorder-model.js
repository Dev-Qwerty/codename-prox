const mongoose = require('mongoose')

const failedorderSchema = mongoose.Schema({
    orderID: {
        type: String,
        required: true,
        unique: true
    },
    userID: {
        type: String,
        required: true
    },
    service: {
        subserviceName: {
            type: String,
            required: true
        },
        categories: [{
            _id: false,
            category: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }]
    },
    address: {
        name: {
            type: String,
            required: true
        },
        phone: {
            type: Number,
            required:true
        },
        line1: {
            type: String,
            require: true
        },
        line2: {
            type: String,
            required: true
        },
        district: {
            type: String,
            required: true
        },
        pin: {
            type: Number,
            required: true
        }
    },
    totalAmount: {
        type: String,
        require: true
    },
    respCode: {
        type: String,
        require: true
    },
    respMsg: {
        type: String,
        require: true
    },
    txnId: {
        type: String,
        require: true
    },
    txnDate: {
        type: String,
        require: true
    },
})

const failedorder = mongoose.model('failedorders', failedorderSchema)
module.exports = failedorder