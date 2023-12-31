const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config()

const app = express();

//middlewares
app.use(express.urlencoded({extended: false}))

app.use('/', require('./controllers/routes/routes'))