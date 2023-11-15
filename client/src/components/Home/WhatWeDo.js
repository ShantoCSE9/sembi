
import style from "../../styles/whatWeDo.module.css"
import WeDo from "./WeDo"
const whatWeDo = () => {
  return (
           <div className={style.whatWeDo}>
          <div className={style.info}>
          <h1 className={style.tittle}>WHAT WE DO <span style={{color:"#FF6100"}}>BEST?</span></h1> 
          <p className={style.para}>Our services span across diverse categories, encompassing education, communication, and transportation among others.</p>
      </div>
        <div className={style.item}>
          <WeDo/>
          <WeDo/>
          <WeDo/>
          <WeDo/>
          <WeDo/>
        </div>
    </div>

  )
}
export default whatWeDo