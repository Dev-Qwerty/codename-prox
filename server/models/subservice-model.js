const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    imagePath: {
        type: String
    }
})

const subserviceSchema = mongoose.Schema({
    mainserviceID: {
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
    },
    supportImages: [String],
    supportVideos: [String],
    categories: [categorySchema]
})

const subservice = mongoose.model('subservices', subserviceSchema);
module.exports = subservice;