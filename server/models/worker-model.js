const mongoose = require('mongoose');

/*const addressSchema = new mongoose.Schema({
    line1: {
        type: String,
        default: ""
    },
    line2: {
        type: String,
        default: ""
    },
    city: {
        type: String,
        "default": ""
    },
    district: {
        type: String,
        default: ""
    },
    state: {
        type: String,
        default: ""
    },
    pinCode: {
        type: Number,
        default: ""
    },
    zone: {
        type: String,
        default: ""
    }
})*/

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
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: Object,
        default: {
           line1: "",
           line2: "",
           city: "",
           district: "",
           state: "",
           pincode: "",
           zone: ""
        }
    },
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