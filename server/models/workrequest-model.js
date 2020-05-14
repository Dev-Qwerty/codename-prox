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
    workerId: {
        type: String,
        requied: true,
        default: null
    },
    requestStatus: {
        type: String,
        required: true,
        default: 'declined'
    },
    service: {
        serviceName: {
            type: String,
            requied: true
        },
        categories: [{        
            categoryName: {
                type: String,
                requied: true
            },
            quantity: {
                type: String,
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
    duration: {
        type: String,
        required: true
    }
})

const workerRequest = mongoose.model('workrequests', workRequestSchema)
module.exports = workerRequest 