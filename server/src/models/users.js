
const mongoose = require('mongoose')
const { Schema } = mongoose;

const usersSchema = new Schema({
    name: {type:String, required: true},
    email: {type:String, required: true, unique:true},
    phoneNumber: {type:Number, required: true},
    password:  {type:String, required: true},
    Address:  {type:String, required: true},
    
  },
  { collection: 'users' });

module.exports= mongoose.model('Users', usersSchema);


