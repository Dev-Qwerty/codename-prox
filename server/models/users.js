const mongoose = require('mongoose');

// Databsae Schema for users
const UserSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: true
    },
    lastName: {
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
    password: {
        type: String,
        required: true,
        minlength: 6
    }
});

const user = module.exports = mongoose.model('user',UserSchema);