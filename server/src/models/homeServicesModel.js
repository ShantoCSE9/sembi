const mongoose=require('mongoose');


const homeServicesSchema= new mongoose.Schema({
    serviceName:{
        type: String,
        trim:true, 
      
    },
    serviceDescription:{
        type: String,
        trim:true,
    },

    serviceImage:{
        type:String,
    }


},{timestamps:true})


const homeServices= mongoose.model("homeServices", homeServicesSchema);
module.exports =homeServices;