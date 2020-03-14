const mongoose = require('mongoose');

let mainserviceSchema = mongoose.Schema({
    serviceName: {
        type: String,
        required: true
    },
    subservices: {

        type: Array,
        require: true
    }
});

const mainservice = module.exports = mongoose.model('mainservice', mainserviceSchema);