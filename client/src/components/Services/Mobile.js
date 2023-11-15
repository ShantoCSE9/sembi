import React from 'react'
import style from "../../styles/Mobile.module.css"
import Image from 'next/image'
const Mobile = () => {
  return (
    <div className={style.mobile} >
        <div className={style.desc} data-aos="fade-right" data-aos-duration="900" data-aos-delay="20" data-aos-offset='500'>
            <h1 style={{color:'#FF6100'}}>Mobile Application</h1>
            <h1 style={{marginBottom:'20px',color:'#FF6100'}}>Development</h1>
         <p>
         Partner with Epnovate Technology to take your business to the next level. Top-notch quality features, elegant designs, and engaging interface, we induce lucrative components within mobile applications to help you skyrocket interactions.
         </p>
        </div>
        <div className={style.image} data-aos="fade-left" data-aos-duration="900" data-aos-delay="20" data-aos-offset='500'>
             <Image alt='' src="/mobile.png" width={0} height={0}   sizes="100vw" style={{width:'100%',height:"auto" ,objectFit:'cover'}}/>
        </div>


    </div>
  )
}

export default Mobile