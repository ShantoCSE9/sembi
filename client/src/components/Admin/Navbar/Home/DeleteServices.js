import axios from 'axios';
import { useEffect, useState } from 'react';
import DeleteItem from './DeleteItem';
import style from "../../../../styles/ServiceSection.module.css"

const DeleteServices = () => {
  const [data,setData]=useState([''])
  const fetchData=async()=>{
    await  axios.get('http://localhost:4000/api/admin/services/')
      .then(function (data) {
        setData(data.data.data);

       
      })
      .catch(function (error) {
        console.log(error);
      });

    }

 useEffect(()=>{
  fetchData() 
 },[])

  return (
     <>
       <h1 className={style.tittle}>DELETE SERVICE</h1>
       <div className={style.deleteServices} >
      
        {data && data.map((item)=>{
          return <DeleteItem key={item._id} value={item}/>
        })}
    </div>
    </>
    
  )
}

export default DeleteServices