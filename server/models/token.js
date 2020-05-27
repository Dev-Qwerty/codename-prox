const mongoose = require('mongoose');

const tokenSchema = mongoose.Schema({
    token: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    }
})

const token = module.exports = mongoose.model('token',tokenSchema);
