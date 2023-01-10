const dotenv = require('dotenv')
const express= require('express');

const mongoose = require ('mongoose')
const app =express();
dotenv.config({path: './config.env'})
require('./db/connect');
// app.use(express.json())
// app.use(require('./router/auth'))
// app.use(require('./router/login'))
// const cors = require("cors");

const PORT = process.env.PORT;
 


app.listen(5000, ()=>{
    console.log(`server is running on port no.${PORT}`)
})