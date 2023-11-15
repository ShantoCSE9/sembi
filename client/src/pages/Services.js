import ContactSection from '@/components/Navbar/Contact/ContactSection'
import Navbar from '@/components/Navbar/Navbar'
import Mobile from '@/components/Services/Mobile'
import Sqa from '@/components/Services/Sqa'
import Web from '@/components/Services/Web'
import style from "../styles/Services.module.css"
const services = () => {
  return (
    <div>
      <Navbar/>
      <div className={style.serviceMenu}>
      <div>
          <h1 className={style.tittle}>OUR <span style={{color:"#FF6100"}}>SERVICES</span></h1> 
          <p className={style.para}>We build software development teams that grow with our clients, from the early stages to whatever they aspire to be. Our expertise includes front-end, backend, database, and server solutions for mobile, web, and desktop applications. Our purpose is to provide our clients with expert guidance and to build software vital to their organizations.</p>
      </div>
     <div style={{padding:'100px 0'}}>
      <Web/>
      <Mobile/>
      <Sqa/>
     </div>
      </div>
     
      <ContactSection/>
    </div>
  )
}

export default services