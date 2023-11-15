import axios from 'axios';
import { useEffect, useState } from 'react';
import style from "../../styles/Service.module.css";
import ServiceSection from './ServiceSection';
const Service = () => {
    const [state,setData]=useState([]);
    const fetchData=async()=>{
        await  axios.get('http://localhost:4000/api/admin/services')
          .then(function (data) {
            setData(data.data.data);
            console.log(state)
          })
          .catch(function (error) {
            console.log(error);
          });
        }
        useEffect(()=>{
             fetchData() 
        })
  return (
    <div >
 < div className={style.service}>
 <div>  <h1 className={style.tittle} > OUR<span style={{color:"#FF6100"}}> SERVICES </span></h1> </div>
    <div className={style.serviceMenu}>
       <div className={style.serviceItem}  data-aos="zoom-in-out" data-aos-duration="900" data-aos-delay="200" data-aos-offset='300' > 
       { state.map((item)=>{
        return   <ServiceSection key={item._id} value={item}/> 
      }) } 
       </div>

   </div>
</div>

        
    </div>
  )
}

export default Service