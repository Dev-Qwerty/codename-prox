const mongoose = require('mongoose');

const mainserviceSchema = mongoose.Schema({
    serviceName: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        required: true
    },
    subServices: {
        type: Array
    }
})

mainserviceSchema.index({"$**":"text"})

const mainservice = mongoose.model('mainservices', mainserviceSchema);
module.exports = mainservice;