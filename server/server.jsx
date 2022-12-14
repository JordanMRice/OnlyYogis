const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser =  require('body-parser');
const cors = require('cors');
require('dotenv/config');

const PORT = 5000;

app.use(cors());
app.use(bodyParser.json())

/**
 * require routes
 */
const breathExerciseRoute = require('./routes/breathExercise.jsx')
const asanasRoute = require('./routes/asanas.jsx');
const signUpRoute = require('./routes/signUp.jsx')

app.use('/breathwork', breathExerciseRoute)
app.use('/asanas', asanasRoute)
app.use('/signUp', signUpRoute)


app.get('/', (req, res) => {
  res.send('We are on home');
})


 /**
 * send index.html to all requests with path '/'
 */



//use each route
 //app.use('/name/', nameRouter);


// Unknown route handler



// Global error handler


mongoose.connect (
  process.env.DB_CONNECTION, 
  { useNewUrlParser: true })
  .then(() => app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  })); //listens on port 1234 -> http://localhost:1234/)

  module.exports = app;


  /**
 * Postman pathways
 * post a new asana: POST -
 * get one asana: GET:
 * get all asanas: GET: http://localhost:5000/asanas/asana/all
 * Update all asana: PUT
 * post a new breathworkexercise: POST: 
 * updat
 * 
 */