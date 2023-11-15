
import { Button, Input, TextField } from '@mui/material'
import axios from 'axios'
import { useState } from 'react'
import style from "../../../../styles/Admin/AddServices.module.css"

const AddServices = () => {
    const [img,imgdata]=useState("")
    const [data,setData]=useState({
        serviceName:"",
        serviceDescription:"",
        serviceImage:""
    })


    const handleSubmit=(e)=>{
        e.preventDefault();
    const fetchData=async()=>{
    await  axios.post('http://localhost:4000/api/admin/services',{
        serviceName:data.serviceName,
        serviceDescription:data.serviceDescription,
        serviceImage:img 
    })
      .then(function (data) {
        setData(data.data);
        alert("service added successfully")
      })
      .catch(function (error) {
        console.log(error);
      });

    }

        fetchData() 

  }









  const handleChange=(e)=>{
      e.preventDefault();
      setData(({
        ...data,
        [e.target.name]: e.target.value
      }))
  }
   const handleFileChange = async(e) => { 
    const file=e.target.files[0];
    const base64=await convertBase64(file);
console.log(file)
    imgdata(base64)

    
}

const convertBase64=(file)=>{
  return new Promise((resolve,reject)=>{
   const fileReader= new FileReader();
   fileReader.readAsDataURL(file)
   fileReader.onload=()=>{
     resolve(fileReader.result)
   }
 
   fileReader.onerror=()=>{
    reject(error)
   }
  })
 
 }





// use the default temp path for conversion


  return (
    <div className={style.addService}>
        <h1 className={style.tittle}>ADD SERVICE</h1>
        <form className={style.serviceMenu} onSubmit={handleSubmit} >
        <TextField className={style.field} onChange={handleChange} id="outlined-basic" color="warning" label="serviceName" name='serviceName' required  variant="outlined" />      
        <TextField className={style.field} onChange={handleChange} id="outlined-basic" color="warning" label="serviceDescription" name='serviceDescription' required type='emial' variant="outlined" />  
        <Input hidden accept="image/*" name='serviceImage' onChange={handleFileChange} multiple type="file" required className={style.field} />
        <Button className="btn" variant="contained"  type='submit' color="secondary" size='large'> SEND </Button>   
        
        </form>
    </div>
  )
}

export default AddServices