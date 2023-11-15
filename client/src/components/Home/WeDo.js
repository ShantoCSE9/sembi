import React from 'react'
import style from "../../styles/WeDo.module.css"
import Image from "next/image"
const WeDo = () => {
  return (
    <div className={style.weDo}>
         
         <div className={style.image}>    <Image src="/edu.png" alt='' width={250} height={250} sizes='100vh' style={{margin:'0 auto',objectFit: "cover"}} /> </div>
     
        <h1 className={style.tittle}> Education</h1>
    </div>
  )
}

export default WeDo