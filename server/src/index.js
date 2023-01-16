const express= require('express');
const dotenv = require('dotenv')
require('dotenv').config()
dotenv.config({path: './config.env'})
const PORT = 5000;
const bodyParser = require('body-parser')
const cors = require('cors')

require('./models/users')

const mongoose = require ('mongoose')
const app =express();

require('./db/connect');
app.use(express.json())

app.use(bodyParser.json())
app.use(cors())

app.get('/signup', (req,res)=>{
    res.send("hello world from the router page") 
})

const registerRouter = require('./routes/registerRoute');
app.use(registerRouter)


app.listen(PORT, ()=>{
    console.log(`server is running on port no.${PORT}`)
})