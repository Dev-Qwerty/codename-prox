const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    orderID: {
        type: String,
        required: true,
        unique: true
    },
    userID: {
        type: String,
        required: true
    },
    workerID: {
        type: String,
        required: true,
        default: "no worker assigned"
    },
    date: {
        type: Date,
        required: true
    },
    service: {
        subserviceName: {
            type: String,
            required: true
        },
        categories: [{
            _id: false,
            categoryName: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }]
    },
    totalAmount: {
        type: String,
        require: true
    },
    paid: {
        type: Boolean,
        required: true
    },
    address: {
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
    }
})

const order = mongoose.model('orders', orderSchema);
module.exports = order