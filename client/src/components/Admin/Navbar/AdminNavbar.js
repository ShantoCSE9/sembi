import Image from 'next/image';
import { useRouter } from 'next/router';
import style from "../../../styles/Navbar.module.css";
const AdminNavbar = () => {
    const router = useRouter();
    const handleClick=(e)=>{
        const route=(e.target.innerHTML)
        if(route=='Home')
        return router.push({
            pathname:`/Admin/Home`,
         })
         if(route=='Back')
         return router.push({
             pathname:`/`,
          })
        router.push({
            pathname:`/Admin/${route}`,

          })
    }
  return (
   <>
   <Image alt='' src="/round.webp" width={300} height={300} className='bg1'/>

     <div className={style.navParen} >
         <div className={style.nav}>
           <h1 className={style.tittle}><span style={{color:"black"}}>EMB</span>ISM</h1> 
           <ul className={style.unorderList}>
              <li className={style.List} onClick={handleClick}>Home</li>
              <li className={style.List} onClick={handleClick}>Services</li>
              <li className={style.List }onClick={handleClick}>About</li>
              <li className={style.List}onClick={handleClick}>Contact</li>
              <li className={style.List}onClick={handleClick}>Back</li>
           </ul>
         </div>
    </div>
    <Image   src="/shape2.png" alt='' width={300} height={300} className='bg2'/>
   </>
  )
}

export default AdminNavbar