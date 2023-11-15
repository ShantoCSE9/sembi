import Image from 'next/image'
import React from 'react'
import style from "../../styles/Sqa.module.css"
const Sqa= () => {
  return (
    <div className={style.sqa}>
        <div className={style.image} data-aos="fade-right" data-aos-duration="900" data-aos-delay="20" data-aos-offset='500'>
             <Image alt='' src="/sqa.png" width={0} height={0}   sizes="100vw" style={{width:'100%',height:"auto" ,objectFit:'cover'}}/>
        </div>

        <div className={style.desc} data-aos="fade-left" data-aos-duration="900" data-aos-delay="300" data-aos-offset='500'>
            <h1 style={{color:'#FF6100'}}>Qualilty Assuranace</h1>
            <h1 style={{marginBottom:'20px',color:'#FF6100'}}>& Testing</h1>
         <p>
          Embism  excels in software excellence through rigorous testing, advanced automation, and a focus on security. Our consultative approach ensures your software meets industry standards, accelerates release cycles, and achieves unmatched customer satisfaction. Partner with us for enhanced reliability and optimized performance.
         </p>
        </div>

    </div>
  )
}

export default Sqa