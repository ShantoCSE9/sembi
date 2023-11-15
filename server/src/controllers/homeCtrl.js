
const bestSection = require("../models/bestSectionModel");
const contact = require("../models/contactModel");
const homeServices = require("../models/homeServicesModel");
const Home =require("../models/userModel")
const updateHeading= async(req,res,next)=>{
  try {
   const {companyName,shortDescription,headingImage}=req.body;
   console.log(companyName,shortDescription)
   const data=await Home.updateOne({
    companyName,
    shortDescription,
    headingImage

   })
   if(data){
     res.send({
        message:'data updated successfully',
     })
   }
   else{
    res.status(404).json({
        message: "something is wrong"
    })
   }
     
 }
    catch (error) {
    next (error)
  }
}


const getHomeData= async(req,res,next)=>{
  try {
   const data =await Home.find({})
   if(data){
     res.send(
        data
     )
   }
   else{
    res.status(404).json({
        message: "something is wrong"
    })
   }
     
 }
    catch (error) {
    next (error)
  }
}

const getHomeServices= async(req,res,next)=>{
  try {
   const data =await homeServices.find({});
   const totalServices =await homeServices.countDocuments({});
   const totalBestServices=await bestSection.countDocuments({});
   const totalContact=await contact.countDocuments({})
   if(data){
     res.send(
     {
      data,
      totalServices,
      totalBestServices,
      totalContact
     }
     )
   }
   else{
    res.status(404).json({
        message: "something is wrong"
    })
   }
     
 }
    catch (error) {
    next (error)
  }
}
const addHomeServices= async(req,res,next)=>{
  try {
    const {serviceName,serviceDescription,serviceImage}=req.body;

   if(serviceName &&serviceDescription &&serviceImage){
    const data =await homeServices.create({
      serviceName,
      serviceDescription,
      serviceImage
     })
     if(data){
      res.send(
        data
     )
     
     }
     else{
      res.status(404).json({
        message:"service info not found"
      })
     }
   }
   else{
    res.status(404).json({
        message: "please fill up all the field"
    })
   }
     
 }
    catch (error) {
    next (error)
  }
}

const updateHomeServices= async(req,res,next)=>{
  try {
   const {id}=req.params;
   const {serviceName,serviceDescription,serviceImage}=req.body;
   const find=await homeServices.findByIdAndUpdate(id,{...req.body},{new:true});
   if(find){
       
          res.send(
            find
         )
         
     
   }


   else{
    res.status(404).json({
        message: "please fill up all the field"
    })
   }
     
 }
    catch (error) {
    next (error)
  }
}
const deleteHomeServices= async(req,res,next)=>{
  try {
   const {id}=req.params;
   console.log(id)
   const find=await homeServices.findByIdAndDelete({_id:id});
   if(find){
       
          res.send(
            find
         )  
     
   }


   else{
    res.status(404).json({
        message: "please fill up all the field"
    })
   }
     
 }
    catch (error) {
    next (error)
  }
}


const addBestService= async(req,res,next)=>{
  try {
    const {name,image}=req.body;

   if(name&&image){
    const data =await bestSection.create({
      name,image
     })
     if(data){
      res.send(
        data
     )
     
     }
     else{
      res.status(404).json({
        message:"Best service info not found"
      })
     }
   }
   else{
    res.status(404).json({
        message: "please fill up all the field"
    })
   }
     
 }
    catch (error) {
    next (error)
  }
}
const getBestService= async(req,res,next)=>{
  try {
   const data =await bestSection.find({})
   if(data){
     res.send(
        data
     )
   }
   else{
    res.status(404).json({
        message: "something is wrong"
    })
   }
     
 }
    catch (error) {
    next (error)
  }
}


const addContact= async(req,res,next)=>{
  try {
    const {name,email,message,phone}=req.body;

   if(name&&email&&phone&&message){
    const data =await contact.create({
      name,email,message,phone
     })
     if(data){
      res.send(
        data
     )
     
     }
     else{
      res.status(404).json({
        message:"contact info not found"
      })
     }
   }
   else{
    res.status(404).json({
        message: "please fill up all the field"
    })
   }
     
 }
    catch (error) {
    next (error)
  }
}
const getContact= async(req,res,next)=>{
  try {
   const data =await contact.find({})
   if(data){
     res.send(
        data
     )
   }
   else{
    res.status(404).json({
        message: "something is wrong"
    })
   }
     
 }
    catch (error) {
    next (error)
  }
}
module.exports={
  
 updateHeading,
 getHomeData,
 getHomeServices,
 addHomeServices,
 addContact,
 getContact,
 addBestService,
 getBestService,
 updateHomeServices,
 deleteHomeServices
   
  
  
}