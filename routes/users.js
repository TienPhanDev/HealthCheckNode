const express = require('express');
const router = express.Router();
const db = require('../config/database');
const User = require('../models/User')

//get all users
router.get('/', (req, res) =>
    User.findAll()
    .then(users => {
        console.log(users)
        res.Status(200).send(users)
    })
    .catch(err => console.log('Error:', err))
)

//add new user
router.post('/', (req, res, next) => {
    //validate user & send back errors
    const { error } = validateUser(req.body); 
    if (error) return res.status(400).send(error.details[0].message);

    let { userName, firstName, lastName, email } = req.body;
    const age = Number(req.body.age);

    let errors = [];

    //server side validations
    if(!userName){
        errors.push({ text: 'Username is required'});
    }
    if(age <= 18){
        errors.push({ text: 'Must be 18 years of age'});
    }

    //check for errors
    if(errors.length > 0){
        res.send(errors)
    } else{
        User.create({
            userName,
            firstName,
            lastName,
            age,
            email
        })
        .then(newUser => res.send(newUser))
        .catch(err => console.log(err))    
    }
});

router.put('/:id', (req, res) => {
  const user = User.find(c => c.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('The user with the given ID was not found.');

  const { error } = validateUser(req.body); 
  if (error) return res.status(400).send(error.details[0].message);
  
  user.username = req.body.username; 
  res.send(user);
});

router.delete('/:id', (req, res) => {
  const user = User.find(c => c.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('The user with the given ID was not found.');

  const index = users.indexOf(user);
  User.splice(index, 1);

  res.send(user);
});

router.get('/:id', (req, res) => {
  const user = User.find(c => c.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('The user with the given ID was not found.');
  res.send(user);
});

function validateUser(user) {
    const schema = {
      userName: Joi.string().min(4).required()
    };
  
    return Joi.validate(user, schema);
}

module.exports = router