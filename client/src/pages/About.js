import Benifits from '@/components/Navbar/About/Benifits'
import ContactSection from '@/components/Navbar/Contact/ContactSection'
import Navbar from '@/components/Navbar/Navbar'
import Image from 'next/image'
import style from "../styles/About.module.css"
const about = () => {
  return (
    <div>
      <Navbar/>
      <div style={{padding:'50px'}}>
          <h1 className={style.tittle}>WE ARE <span style={{color:"#FF6100"}}>EMBISM</span></h1> 
          <p className={style.para}>A software solution provider</p>
      </div>
 
      <div style={{width:"1300px",margin:"0 auto", textAlign:'center'}}>
      <Image alt='' src='/software.jpg'  
            width={0}
            height={500}
            sizes="100vw"
            style={{width:'100%' ,objectFit:'cover'}}/>
      </div>
      <div className={style.aboutMenu}>
      <h1 className={style.aboutUs} data-aos="fade-right" data-aos-duration="900" data-aos-delay="100" data-aos-offset='500'>ABOUT<span style={{color:"#FF6100",display:'inline-block'}}>US</span></h1> 
        <div className={style.vertical}>
          <div className={style.innerVertical}></div>
        </div>
        <p className={style.summary} data-aos="fade-left" data-aos-duration="900" data-aos-delay="100" data-aos-offset='500'>
         Embism is a premier provider of software development and testing services. Having talented
          software engineers on board, we craft compelling web, desktop, and mobile applications for 
          our clients. Since our inception, we have partnered with numerous companies and delivered 
          operational gains to startup, emerging, and established  organizations in the United States
          and Canada.
       </p>
      </div>
      <Benifits/>
     <ContactSection/>
  

    </div>
  )
}

export default about