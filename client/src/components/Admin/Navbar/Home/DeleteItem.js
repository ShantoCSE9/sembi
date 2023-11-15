import { Button } from '@mui/material'
import axios from 'axios'
import Image from 'next/image'
import style from "../../../../styles/ServiceSection.module.css"
const DeleteItem = ({value}) => {
    const deleteRoute=()=>{
        const fetchData=async()=>{
            await  axios.delete(`http://localhost:4000/api/admin/services/${value._id}`,)
              .then(function (data) {
                alert("service deleted successfully")
              })
              .catch(function (error) {
                console.log(error);
              });
         
            }
        
                fetchData()
    }
  return (
    <>
    {
    value &&  <div  >
       <div className={style.serviceItem}  onClick={deleteRoute}  > 
           <div className={style.serviceImage}>    <Image alt='' src={value.serviceImage} width={200} height={200} /> </div>
           <div className={style.serviceDetails}>
               <h2 className={style.serviceHeading}> {value.serviceName}</h2>
               <p className={style.serviceParagraph}>{value&&value.serviceDescription}</p>
           </div>
           <Button className="btn" variant="contained"  type='submit' color="secondary" size='large'> DELETE </Button>   
   </div> 
  
</div>
   }
  </>
  )
}

export default DeleteItem