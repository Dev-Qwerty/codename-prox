const mongoose = require('mongoose');

// schema for works requested
const WorkSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    subService: {
        type: String,
        required: true
    },
    timeSlot: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    workerId: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    completed: {
        type: Boolean,
        required: true
    },
    paymentCompleted: {
        type: Boolean,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    }
})