const mongoose = require('mongoose');

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
    addresses: {
        type: Array,
        default: null
    },
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