const mongoose = require('mongoose')

const userfineSchema = mongoose.Schema({
    userID: {
        type: String,
        required: true
    },
    fine: [{
        orderID: {
            type: String,
        },
        amount: {
            type: Number,
        }
    }]
})

const userfine = mongoose.model('userfines', userfineSchema)
module.exports = userfine