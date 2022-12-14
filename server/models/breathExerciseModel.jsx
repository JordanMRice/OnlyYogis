const mongoose = require('mongoose');

const breathExerciseSchema = new mongoose.Schema({
    sanskritName: {
        type: String,
        required: true
    },
    englishName: {
        type: String,
        
    },
    exerciseType: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('breathExercise', breathExerciseSchema)