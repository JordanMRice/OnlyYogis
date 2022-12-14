//const { request, response } = require('express');
const express = require('express');
const router = express.Router();
const Asana = require('../models/asanaModel.jsx');

//retrieve all
router.get('/asana/all', async (req, res) => {
    try{
        const asanas = await Asana.find();
        res.json({asanas});
    }catch(err){
        res.json({message : err});
    }
});

//create
router.post('/', async (req, res) => {
    const asana = new Asana ({
        sanskritName: req.body.sanskritName,
        englishName: req.body.englishName,
        postureType: req.body.postureType,
        description: req.body.description
    });
    try {
        const savedAsana = await asana.save()
        res.json(savedAsana);
    }catch(err){
        res.json({ message: err })
    }
    
});

//find specific asana 
router.get('/:asanaId', async (req, res) => {
    try {
        const asana = await Asana.findById(req.params.asanaId);
        res.json(asana);
    } catch(err) {
        res.json({message: err})
    }
});

//delete an asana
router.delete('/:asanaId', async (req, res) => {
    try {
        const removedAsana = await Asana.deleteOne({_id: req.params.asanaId });
        res.json(removedAsana);
    } catch(err) {
        res.json({message: err})
    }

});

//find twisting Asanas
router.get('/asana/twists', async (req, res) => {

    try {
        const asanas =  await Asana.find({postureType : 'Twists'})
            
        console.log(asanas)
        res.json({asanas})
    } catch(err) {
        res.json({message: err})
    }
});

//find backbend Asanas
router.get('/asana/backbend', async (req, res) => {

    try {
        const asanas =  await Asana.find({postureType : 'Back Bend'})
            
        console.log(asanas)
        res.json({asanas})
    } catch(err) {
        res.json({message: err})
    }
})

//find Sitting Asanas
router.get('/asana/sitting', async (req, res) => {

    try {
        const asanas =  await Asana.find({postureType : 'Sitting'})
            
        console.log(asanas)
        res.json({asanas})
    } catch(err) {
        res.json({message: err})
    }
})

//find forward bends Asanas
router.get('/asana/forwardbends', async (req, res) => {

    try {
        const asanas =  await Asana.find({postureType : 'Forward Bends'})
            
        console.log(asanas)
        res.json({asanas})
    } catch(err) {
        res.json({message: err})
    }
})

//find inversions Asanas
router.get('/asana/inversions', async (req, res) => {

    try {
        const asanas =  await Asana.find({postureType : 'Inversions'})
            
        console.log(asanas)
        res.json({asanas})
    } catch(err) {
        res.json({message: err})
    }
})

//find reclining Asanas
router.get('/asana/reclining', async (req, res) => {

    try {
        const asanas =  await Asana.find({postureType : 'Reclining'})
            
        console.log(asanas)
        res.json({asanas})
    } catch(err) {
        res.json({message: err})
    }
})

//find standing Asanas
router.get('/asana/standing', async (req, res) => {

    try {
        const asanas =  await Asana.find({postureType : 'Standing'})
            
        console.log(asanas)
        res.json({asanas})
    } catch(err) {
        res.json({message: err})
    }
})

//add a field and update  Asanas
router.put('/asana/update', async (req, res) => {
    
    try {
        const asana = await Asana.updateOne({description : "In the final posture your body..."}, { 
           $set:{ description: req.body.description }
        })
        res.json({asana})
        
    } catch(err) {
        res.json({message:err})
    }
})

router.put('/asana/update/all', async (req, res) => {
    try { 
        const asana = await Asana.updateMany({}, {
            $set:{ description: req.body.description }
        })
        res.json({asana})
    } catch(err) {
        res.json({message:err})
    }


})



module.exports = router;