const mongoose = require('mongoose');

// Databsae Schema for users
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
    
    password: {
        type: String,
        required: true,
        minlength: 6
    }
});

const user = module.exports = mongoose.model('user',UserSchema);