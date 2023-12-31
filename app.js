const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')

// dotenv config
require('dotenv').config()

const app = express();

//middlewares
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())

// database and server config
require('./config/dbConfig')()
app.listen(process.env.PORT, () => console.log(`app listening on port: ${process.env.PORT}`))



app.use('/', require('./controllers/routes/routes'))