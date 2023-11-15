import React from 'react'
import style from "../../styles/OfferSection.module.css"
import OfferItem from "@/components/Home/OfferItem"
const OfferSection = () => {
  return (
    <div className={style.whatWeDo}>
    <div className={style.info}>
    <h1 className={style.tittle}>WHAT WE  <span style={{color:"#FF6100"}}>OFFER</span></h1> 
  
</div>
  <div className={style.item}>
   <OfferItem/>
   <OfferItem/>
   <OfferItem/>
   <OfferItem/>
  </div>
</div>

  )
}

export default OfferSection