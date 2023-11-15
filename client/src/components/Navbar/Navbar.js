import { useRouter } from 'next/router';
import style from "../../styles/Navbar.module.css";
import Image from 'next/image';
const Navbar = () => {
    const router = useRouter();
    const handleClick=(e)=>{
        const route=(e.target.innerHTML)
        if(route=='Home')
        return router.push({
            pathname:`/`,
         })
         if(route=='Admin')
         return router.push({
             pathname:`/Admin/Home`,
          })
        router.push({
            pathname:`/${route}`,

          })
    }
  return (
   <>
   <Image src="/round.webp" alt='' width={300} height={300} className='bg1'/>

     <div className={style.navParen} >
         <div className={style.nav}>
           <h1 className={style.tittle}><span style={{color:"black"}}>EMB</span>ISM</h1> 
           <ul className={style.unorderList}>
              <li className={style.List} onClick={handleClick}>Home</li>
              <li className={style.List} onClick={handleClick}>Services</li>
              <li className={style.List }onClick={handleClick}>About</li>
              <li className={style.List}onClick={handleClick}>Contact</li>
              <li className={style.List}onClick={handleClick}>Admin</li>
           </ul>
         </div>
    </div>
    <Image alt='' src="/shape2.png" width={300} height={300} className='bg2'/>
   </>
  )
}

export default Navbar