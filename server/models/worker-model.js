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
    },
    zone: {
        type: String
    }
})

const WorkerSchema = new mongoose.Schema({
    name: {
        type: String
    },
    workerID: {
        type: String,
        default: ""
    },
    workerType: {
        type: String,
        default: null
    },
    companyID: {
        type: String,
        default: null
    },
    service: {
        type: String
    },
    specialization: {
        type: Array,
        default: null
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
    totalWorks: {
        type: Number,
        default: 0
    },
    rating: {
        type: Number,
        default: 3
    },
    completedProfile: {
        type: Boolean,
        default: false
    }
})

const worker = module.exports = mongoose.model('worker', WorkerSchema);