const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const cors = require('cors')

// dotenv config
require('dotenv').config()

const app = express();

//middlewares
// app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
// app.use(cors())

// database and server config
require('./config/dbConfig')()
app.listen(process.env.PORT, () => console.log(`app listening on port: ${process.env.PORT}`))


app.use('/', require('./controllers/routes/routes'))