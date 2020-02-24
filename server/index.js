const express = require('express')
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()
app.use(cors())

// Log requests to the console.
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('*', (req, res) => res.status(200).send({ 
    message: 'Welcome to the beginning of nothingness.',
}));
  
  module.exports = app;