const mongoose = require('mongoose');

const versionSchema = mongoose.Schema({
    serviceVersion: {
        type: String,
        required: true
    },
    offerVersion: {
        type: String,
        required: true
    }
})

const version = mongoose.model('version', versionSchema);
module.exports = version;