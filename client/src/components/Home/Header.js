import { Button } from '@mui/material';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import style from "../../styles/Header.module.css";
const Header = () => {
 const [data,setData]=useState([])
  const fetchData=async()=>{
  await  axios.get('http://localhost:4000/api/admin')
    .then(function (data) {
      setData(data.data[0]);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  useEffect(()=>{
       fetchData()
  })
  return (
   <>
{data&& <div className={style.header}>
    <div className={style.headerInfo}  >
    <h1 className={style.tittle}> EMBISM</h1> 
    <p className={style.para}> A top tier software development team assisting owners and decision makers to implement digital initiatives to achieve lasting financial success </p>
    <Button className='btn'>ABOUT US</Button>
</div>
<div className={style.image}  data-aos="fade-left" data-aos-duration="900" data-aos-delay="200" data-aos-offset='100' >
       <Image alt='' src={data.headingImage} width={0} height={0}   sizes="100vw" style={{width:'100%',height:"auto" ,objectFit:'cover'}}/>
  </div>
</div>}
      </>
  )
}

export default Header