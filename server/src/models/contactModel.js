const mongoose=require('mongoose');


const contactSchema= new mongoose.Schema({
    name:{
        type: String,
        trim:true, 
        required:true
      
    },

    email:{
        type: String,
        trim:true, 
        required:true
    },
    message:{
        type: String,
        trim:true, 
        required:true
    },
   phone:{
        type: Number,
        trim:true, 
        required:true
    },



},{timestamps:true})


const contact= mongoose.model("contact", contactSchema);
module.exports =contact;