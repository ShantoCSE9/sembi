import Navbar from '@/components/Navbar/Navbar'
import React from 'react'
import Image from 'next/image'
import style from "../styles/Contact.module.css"
import ContactSection from '@/components/Navbar/Contact/ContactSection'
const contact = () => {
  return (
    <div>
      <Navbar/>
       <div className={style.contact}>
              <div className={style.tittle}>  <h1 >HOW CAN WE <span style={{color:"#FF6100"}}>HELP YOU?</span></h1> </div>
               <div className={style.image}>
                     <Image alt='' src="/help.png" width={0} height={0}   sizes="100vw" style={{width:'100%',height:"auto" ,objectFit:'cover'}}/>
                </div> 
      </div>
      <div className={style.contactInfo}>
            <div className={style.support}> 
              <h1 > SUPPORT: </h1> 
              <p>Phone: <a href='tel: +8801977075249'>+8801977075249 </a></p>
              <p>Email: <a href='mailto:support@gmail.com'> support@gmail.com </a> </p>
            </div>
         <div className={style.hr}>
         <h1 >HR: </h1> 
              <p>Phone: <a href='tel: +8801977075853'>+8801977075853 </a></p>
              <p>Email: <a href='mailto:hr@gmail.com'> hr@gmail.com </a> </p>
         </div>
      </div>
      <ContactSection/>
    </div>
  )
}

export default contact