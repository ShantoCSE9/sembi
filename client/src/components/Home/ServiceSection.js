import Image from 'next/image'
import style from "../../styles/ServiceSection.module.css"
const ServiceSection = ({value}) => {
    console.log({value})
  return (
  <>
    {
    value &&  <div >
       <div className={style.serviceItem}   > 
           <div className={style.serviceImage}>    <Image  alt=" " src={value.serviceImage}width={200} height={200} /> </div>
           <div className={style.serviceDetails}>
               <h2 className={style.serviceHeading}> {value.serviceName}</h2>
               <p className={style.serviceParagraph}>{value&&value.serviceDescription}</p>
           </div>

   </div>
</div>
   }
  </>
  )
}

export default ServiceSection