const express = require('express');
const router = express.Router();
const breathExercise = require('../models/breathExerciseModel.jsx');

//retrieve all
router.get('/breathExercise/all', async(req, res) => {
    try{
        const breathExercises = await breathExercise.find();
        res.json({breathExercises}); 
    } catch(err){
        res.json({message : err});
    }
});

//create
router.post('/', async (req, res) =>{
    const exercise = new breathExercise ({
        sanskritName: req.body.sanskritName,
        exerciseType: req.body.exerciseType,
        description: req.body.description
    });
    try {
        const savedBreathExercise = await exercise.save();
        res.json(savedBreathExercise);
    } catch (err){
        res.json({ message: err })
    }
});

//find specific breathExercise 
router.get('/:breathExerciseId', async (req, res) => {
    try {
        const breathExercise = await breathExercise.findById(req.params.breathExerciseId);
        res.json(breathExercise);
    } catch(err) {
        res.json({ message: err })
    }
});

//delete an asana
router.delete('/:breathExerciseId', async (req, res) => {
    try {
        const removedBreathExercise = await breathExercise.deleteOne({ _id: req.params.breathExerciseId });
        res.json(removedBreathExercise);
    } catch(err) {
        res.json({ message: err })
    }
});

//find Ayuverda Exercises
router.get('/breathExercise/Ayuverda', async (req, res) => {

    try {
        const breathExercises =  await breathExercise.find({exerciseType : 'Ayuverda'})
            
        console.log(breathExercises)
        res.json({breathExercises})
    } catch(err) {
        res.json({message: err})
    }
});

//find Kundalini Exercises
router.get('/breathExercise/Kundalini', async (req, res) => {

    try {
        const breathExercises =  await breathExercise.find({exerciseType : 'Kundalini'})
            
        console.log(breathExercises)
        res.json({breathExercises})
    } catch(err) {
        res.json({message: err})
    }
});



module.exports = router;


