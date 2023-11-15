const mongoose = require('mongoose');
const { db_url } = require('../secret');
const connectDb= async ()=>{
      try {
        await mongoose.connect(db_url)
        console.log("db is connected successfully");
        mongoose.connection.on('error',(error)=>{
          console.error("Db connection error: ",error)
        })
        
      } catch (error) {
        console.log("db is not connected")
        console.error(error)
      }
}

module.exports = connectDb;