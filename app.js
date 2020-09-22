const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const Joi = require('joi');
const _ = require('lodash/core');
require('dotenv').config()

const db = require('./config/database')

//confirm db connection
db.authenticate()
.then(() => console.log('Database connected...'))
.catch(err => console.log('Error: ' + err))

const app = express();

//invoke cors 
app.use(cors())

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send('This is the root index page...'))

//users routes
app.use('/users', require('./routes/users'))
app.use('/sugars', require('./routes/sugars'))

//start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is live & Listening on port ${PORT}...`));