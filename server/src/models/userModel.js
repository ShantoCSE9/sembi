const mongoose=require('mongoose');


const homeSchema= new mongoose.Schema({
    companyName:{
        type: String,
        trim:true, 
        maxlength:[10,"the length of company name can be maximum 10 characters"]
      
    },
    shortDescription:{
        type: String,
        trim:true,
    },

    headingImage:{
        type:String,
    }


},{timestamps:true})


const Home= mongoose.model("Home", homeSchema);
module.exports = Home;