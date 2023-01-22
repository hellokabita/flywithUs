
const mongoose = require('mongoose')

module.exports = mongoose.model('Services', {
    title:String, 
    description:String,
})





// const { Schema } = mongoose;

// const serSchema = new Schema({
    
//     userID: { type: String, required: true },
//     orderImg: { type: String },
//     title: { type: String, required: true },
//     discription: { type: String, required: true },


//   },
//   { collection: 'Packages' });

// module.exports= mongoose.model('Packages', packagesSchema);