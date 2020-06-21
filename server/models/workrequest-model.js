const mongoose = require('mongoose')

const workerRequestSchema = mongoose.Schema({
    requestID: {
        type: String,
        requied: true
    },
    orderID: {
        type: String,
        requied: true
    },
    workerID: {
        type: String,
        requied: true,
        default: 'no worker assigned'
    },
    requestStatus: {
        type: String,
        required: true,
        default: 'declined'
    },
    service: {
        subserviceName: {
            type: String,
            requied: true
        },
        categories: [{
            _id: false,
            categoryName: {
                type: String,
                requied: true
            },
            quantity: {
                type: Number,
                requied: true
            }
        }]
    },
    Place: {
        type: String,
        requied: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        require: true
    },
    dueDate: {
        type: Date,
        required: true
    }
})

const workerRequest = mongoose.model('workrequests', workerRequestSchema)
module.exports = workerRequest 