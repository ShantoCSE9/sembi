import Image from 'next/image'
import React from 'react'
import style from "../../styles/OfferItem.module.css"
const OfferItem = () => {
  return (
    <div className={style.weDo} data-aos="fade-right" data-aos-duration="900" data-aos-delay="200" data-aos-offset='400'>
         
         <div className={style.image}>    <Image alt='' src="/home-team.png" width={250} height={250} sizes='100vh' style={{margin:'0 auto',objectFit: "cover"}} /> </div>
     
        <h1 className={style.tittle}> Qualified Engineers</h1>
    </div>
    
  )
}

export default OfferItem