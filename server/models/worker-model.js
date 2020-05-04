const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    line1: {
        type: String,
        required: true
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
    workerType: {
        type: String,
        enum: ['Individual', 'Company'],
        required: true
    },
    companyID: {
        type: String
    },
    specialization: {
        type: String,
        required: true
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
    address: [addressSchema],
    rating: {
        type: Number,
        default: 0
    }
})

const worker = module.exports = mongoose.model('worker', WorkerSchema);