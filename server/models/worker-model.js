const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    line1: {
        type: String,
    },
    line2: {
        type: String
    },
    city: {
        type: String
    },
    district: {
        type: String
    },
    state: {
        type: String
    },
    pinCode: {
        type: Number
    }
})

const WorkerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    workerID: {
        type: String,
        default: ""
    },
    workerType: {
        type: String,
        enum: ['Individual', 'Company'],
        default: 'Individual'
    },
    companyID: {
        type: String,
        default: null
    },
    specialization: {
        type: String,
        default: null
    },
    otherAreas: {
        type: String
    },
    phoneNo: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: addressSchema,
    rating: {
        type: Number,
        default: 3
    }
})

const worker = module.exports = mongoose.model('worker', WorkerSchema);