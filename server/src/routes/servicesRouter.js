const { Router } = require('express');
const services = require('../models/services')
const db = require('../db/connect')
const app = Router();

app.post('api/services', async(req, res)=>{
    const title = req.body.title
    const description=req.body.description

    if (!title || !description){
        return res.send({code: 400, massage: 'bad req'})
    }

    const newService = new services({title:title, description:description})

    const success = await newService.save()

    if(success){
        return res.send({code:200, message: 'success'})
    }else {
        return res.send({code: 500, massage:'service error'})
    }


})

module.exports = app;