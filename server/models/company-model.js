const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    line1: {
        type: String
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


// Database Schema for users
const CompanySchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    userID: {
        type: String,
        required: true,
        unique: true
    },
    addresses: [addressSchema],
    name: {
        type: String,
        default: ""
    },
    workers: {
        type: Array,
        default: null
    }
});

const company = module.exports = mongoose.model('company',CompanySchema);