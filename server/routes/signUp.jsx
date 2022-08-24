const express = require('express');
const router = express.Router();
// const user = require('../models/userModel.jsx')

router.post('/user', (req, res) => {
    res.send('This is the sign up user route');
});

module.exports = router