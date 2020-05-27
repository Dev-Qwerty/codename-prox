const mongoose = require('mongoose');

const selectedWorkersSchema = new mongoose.Schema({
    orderID: {
        type: String,
        required: true
    },
    selectedWorkers: {
        type: [Object],
        required: true
    },
    declinedWorkers: [Object]
})

const selectedWorkers = module.exports = mongoose.model('selectedWorkers', selectedWorkersSchema)
