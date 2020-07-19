const mongoose = require('mongoose')

const userfineSchema = mongoose.Schema({
    userID: {
        type: String,
        required: true
    },
    fine: {
        type: Number,
        required: true
    }
})

const userfine = mongoose.model('userfine', userfineSchema)
module.exports = userfine