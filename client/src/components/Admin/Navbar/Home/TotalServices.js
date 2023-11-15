import React, { useEffect, useState } from 'react'
import style from "../../../../styles/Admin/TotalServices.module.css"
import axios from 'axios'
const TotalServices = () => {
  const [data,setData]=useState([])
  const fetchData=async()=>{
  await  axios.get('http://localhost:4000/api/admin/services')
    .then(function (data) {
      setData(data.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  console.log(data)
  useEffect(()=>{
       fetchData() 
  },[])
  return (
    <>
       {data &&  <div className={style.serviceMenu}>
    <div className={style.serviceItem}>
        <div className={style.totalServices}>{data&&data.totalServices}</div>
        <div className={style.tittle}>Total Services</div>
    </div>
    <div className={style.serviceItem}>
        <div className={style.totalServices}>{data&&data.totalBestServices}</div>
        <div className={style.tittle}>What We do best</div>
    </div>
    <div className={style.serviceItem}>
        <div className={style.totalServices}>{data&&data.totalContact}</div>
        <div className={style.tittle}>Total Contact Info</div>
    </div>

</div>}
    </>

   
  )
}

export default TotalServices