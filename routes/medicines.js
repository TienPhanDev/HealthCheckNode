const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Medicine = require('../models/Medicine')
const Sequelize = require('sequelize');
const Op = Sequelize.Op

// Search for medicines
router.get('/search', (req, res) => {
    let { term } = req.query;
  
    // Make lowercase
    term = term.toLowerCase();
  
    Medicine.findAll({ where: { name: { [Op.like]: '%' + term + '%' } } })
    .then(medicines => res.render('medicines', { medicines }))
    .catch(err => res.render('error', {error: err}));
});

module.exports = router