require('dotenv').config()

const express = require('express')
// const bodyParser = require('body-parser')
const cors = require('cors')
// const morgan = require('morgan')
const models = require('./models/user');

const app = express()
app.use(cors())

module.exports = {app, models};