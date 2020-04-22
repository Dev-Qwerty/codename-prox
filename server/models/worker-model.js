const mongoose = require('mongoose');

// Schema for workers
const WorkerSchema = new mongoose.Schema({
    Fname: {
        type: String,
        required: true
    },
    Lname: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
        min: 10,
        max: 10
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },
    location: {
        type: Array,
        required: true
    },
    timeSlot: {
        type: Array,
        required: true
    },
    subService: {
        type: Array,
        required: true
    },
    Available: {
        type: Boolean,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    }
})

const worker = module.exports = mongoose.model('workers', WorkerSchema)