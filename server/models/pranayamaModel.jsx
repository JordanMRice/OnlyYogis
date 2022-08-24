const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    sanskritName: {
        type: String,
        required: true
    },
    englishName: {
        type: String,
        required: true
    },
    breathType: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    Sequence: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('user', userSchema)