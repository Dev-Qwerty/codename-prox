const mongoose = require('mongoose');

const mainserviceSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    subservices: {
        type: Array
    }
})

const mainservice = mongoose.model('mainservices', mainserviceSchema);
module.exports = mainservice;