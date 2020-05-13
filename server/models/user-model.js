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


// Database Schema for users
const UserSchema = new mongoose.Schema({
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
    userRating: {
        type: Number,
        default: 100
    },
    name: {
        type: String,
        default: ""
    }
});

const user = module.exports = mongoose.model('user',UserSchema);