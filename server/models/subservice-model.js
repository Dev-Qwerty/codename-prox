const mongoose = require('mongoose');

const subserviceSchema = mongoose.Schema({
    mainserviceId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        required: true
    },
    moreDetail: {
        type: String,
        required: true
    }
})

const subservice = mongoose.model('subservices', subserviceSchema);
module.exports = subservice;