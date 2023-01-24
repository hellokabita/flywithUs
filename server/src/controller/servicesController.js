const services = require('../models/services')

module.exports.getServices = async(req, res) =>{

  
    const _data = await services.find({})

    if(_data){
        return res.send({code: 200, message: 'success', data:_data})

    }else {
        return res.send({code: 500, massage:'service error'})

    }
}

module.exports.addServices= async(req, res)=>{
    const title = req.body.title
    const description = req.body.description

    if (!title || !description){
        return res.send({code: 400, massage: 'bad req'})
    }

    const newServices = new services({title:title, description:description})

    const success = await newServices.save()

    if(success){
        return res.send({code:200, message: 'success'})
    }else {
        return res.send({code: 500, massage:'service error'})
    }


}

module.exports.getSlider = (req, res)=>{

    const url1 = 'https://picsum.photos/id/236/400/300'
    const url2 = 'https://picsum.photos/id/237/400/300'
    const url3 = 'https://picsum.photos/seed/picsum/400/300'
    const url4 = 'https://picsum.photos/seed/picsum/400/300'

    const arr = [url1, url2, url3, url4]
    return res.send ({code:200, message: 'success', data:arr})
}