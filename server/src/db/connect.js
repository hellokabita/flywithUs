

const mongoose = require('mongoose')



mongoose.connect("mongodb://localhost:27017/flywithUs", 
{useNewUrlParser: true, 
useUnifiedTopology: true},
(err)=>{
  if(!err) console.log('db connected');
  else console.log('db error')
})


