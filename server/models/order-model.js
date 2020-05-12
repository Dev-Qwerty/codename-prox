const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    orderId: {
        type: Number,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    workerId: {
        type: String,
        required: true
    },
    service: {
        subserviceId: {
            type: String,
            required: true
        },
        categories: [{
            _id: false,
            categoryId: {
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