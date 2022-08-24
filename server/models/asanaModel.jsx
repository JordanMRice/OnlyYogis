//asana is synonymous with pose
//so schema for individual poses and characteristics

//import { ObjectId } from 'mongodb';

const mongoose = require('mongoose')

const AsanaSchema = new mongoose.Schema({
    sanskritName: {
        type: String,
        required: true
    },
    englishName: {
        type: String,
        required: true
    },
    postureType: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    //hatha includes all poses
    //vinyasa is the primary series in ashtanga
    // ashtanga: {
    //     type: Boolean,
    //     required: true
    // },
    // vinyasa: {
    //     type: Boolean,
    //     required: true
    // },
    // iyengar: {
    //     type: Boolean,
    //     required: true
    // }
}
    //,{ collection: 'OnlyYogis' }
)

module.exports = mongoose.model('Asana', AsanaSchema)
//, 'OnlyYogis'