const mongoose = require('mongoose');

const selectedWorkersSchema = new mongoose.Schema({
    orderID: {
        type: String,
        required: true
    },
    selectedWorkers: {
        type: [String],
        required: true
    },
    declinedWorkers: [String]
})

const selectedWorkers = module.exports = mongoose.model('selectedWorkers', selectedWorkersSchema)