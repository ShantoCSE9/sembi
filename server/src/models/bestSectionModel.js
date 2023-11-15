const mongoose=require('mongoose');


const homeBestSectionSchema= new mongoose.Schema({
    name:{
        type: String,
        trim:true, 
        maxlength:[10,"the length of company name can be maximum 10 characters"]
      
    },

    image:{
        type:String,
    }


},{timestamps:true})


const bestSection= mongoose.model("bestSection", homeBestSectionSchema);
module.exports =bestSection;