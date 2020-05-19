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
    workerType: {
        type: String,
        enum: ['Individual', 'Company'],
        required: true,
        default: 'Individual'
    },
    companyID: {
        type: String,
        default: null
    },
    specialization: {
        type: String,
        required: true,
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