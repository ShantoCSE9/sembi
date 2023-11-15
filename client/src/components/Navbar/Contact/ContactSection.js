import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useState } from 'react';
import style from "../../../styles/ContactSection.module.css";

const ContactSection = () => {
  const [data,setData]=useState({
    name:"",
    email:"",
    message:"",
    phone:Number(""),
})


const handleSubmit=(e)=>{
    e.preventDefault();
const fetchData=async()=>{
await  axios.post('http://localhost:4000/api/admin/contact',{
  name:data.name,
  email:data.email,
  message:data.message,
  phone:data.phone
})
  .then(function (data) {
    setData(data.data);
    alert("Thanks")
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

  return (
    <div>
           <div className={style.contactMenu} >
      <h1 className={style.contactUs} >WANT US TO <span style={{color:"#FF6100",display:'inline-block'}}> CONTACT YOU?</span></h1> 
        <div className={style.vertical}>
          <div className={style.innerVertical}></div>
        </div>
        <form className={style.summary} onSubmit={handleSubmit}>
        <TextField className={style.textField} onChange={handleChange} id="outlined-basic" color="warning" label="Name" name='name' variant="outlined" />      
        <TextField className={style.textField}  onChange={handleChange} id="outlined-basic" color="warning" label="Email" type='email'  name="email" variant="outlined" />  
        <TextField className={style.textField} onChange={handleChange} name='phone' id="outlined-basic" color="warning" label="Phone" variant="outlined" />  
        <TextField className={style.textField} onChange={handleChange} name='message' id="outlined-multiline-static" color="warning" label="Message" multiline rows={4} />  
        <Button className="btn" variant="contained" type='submit' color="secondary" size='large'> SEND </Button> 
       </form>
      </div>
            
    </div>
  )
}

export default ContactSection