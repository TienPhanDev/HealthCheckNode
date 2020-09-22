const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Sugar = require('../models/Sugar');

//add new sugar screen
router.post('/', (req, res) => {
    const user_id = req.body.uder_id;
    const result = Number(req.body.age);

    Sugar.create({
        user_id,
        result
    })
    .then(() => res.status(200).send())
    .catch(err => console.log(err)) 
});

module.exports = router;