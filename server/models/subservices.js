const mongoose = require('mongoose');

// Schema for subservices
const subserviceSchema = new mongoose.Schema({
    subserviceName: {
        type: String,
        required: true
    },
    mainService: {
        type: String,
        required: true
    },
    preInspection: Number,
    averageCost: {
        type: Number,
        required: true
    },
    averageTime: {
        type: String,
        type: required
    },
    comments: String
}) 