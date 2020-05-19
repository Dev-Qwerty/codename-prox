const mongoose = require('mongoose');

const workerZoneSchema = new mongoose.Schema({
    zoneName: {
        type: String,
        required: true
    },
    pincodes: [Number]
})

const workerZone = mongoose.model('workerzones', workerZoneSchema)
module.exports = workerZone 