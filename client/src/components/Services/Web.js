
import Image from 'next/image';
import style from "../../styles/Web.module.css";
const Web = () => {
 


  return (
    <div className={style.web}>
        <div className={style.image}  data-aos="fade-right" data-aos-duration="900" data-aos-delay="200" data-aos-offset='100' >
             <Image alt='' src="/Web.png" width={0} height={0}   sizes="100vw" style={{width:'100%',height:"auto" ,objectFit:'cover'}}/>
        </div>

        <div className={style.desc} data-aos="fade-left" data-aos-duration="900" data-aos-delay="200" data-aos-offset='100'>
            <h1 style={{color:'#FF6100'}}>Web Application</h1>
            <h1 style={{marginBottom:'20px',color:'#FF6100'}}>Development</h1>
         <p>
         Our software developers are well-versed with front-end development, middleware integration, and backend development services with equal focus on UI, UX, customer satisfaction, quality, and timeliness – all under one roof.
         </p>
        </div>

    </div>
  )
}

export default Web