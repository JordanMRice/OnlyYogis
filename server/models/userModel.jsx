import { ObjectId } from 'mongodb';
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique: true
  },
  birthDate: {
    type: String,
    required: true
  },
  favoriteAsanas: [{ type: ObjectId, ref: "User"}],
  favoriteBreathwork: [{type: ObjectId, ref: "User"}],
  favoriteSeries: [{type: ObjectId, ref: "User"}]

  
})

module.exports = mongoose.model('user', userSchema)
