import React from 'react'
import style from "../../../styles/Benifits.module.css"
import { PiRocketLaunchLight,PiNotepadDuotone } from 'react-icons/pi';
import { MdOutlineEngineering } from 'react-icons/md';
import { VscSettingsGear} from 'react-icons/vsc';
const Benifits = () => {
  return (
    <div style={{margin:'40px 0'}}>
        <h2 className={style.benifitsTittle}>BENEFITS OF WORKING <span style={{color:""}}> WITH EMBISM </span></h2>
        <div className={style.benifitsMenu}>
            <div className={style.benifitsItem} data-aos="fade-right" data-aos-duration="900" data-aos-delay="20" data-aos-offset='150'> 
                <div className={style.benifitsIcon}>    <PiRocketLaunchLight/></div>
                <div className={style.benifitsDetails}>
                 
                    <h2 className={style.benifitsHeading}> Kick Start</h2>

                    <p className={style.benifitsParagraph}> Our teams can be ramped up quickly and managed 
                          autonomously to implement and execute agreed plans.</p>
                </div>
            </div>
            
            <div className={style.benifitsItem} data-aos="zoom-in" data-aos-duration="900" data-aos-delay="20" data-aos-offset='130'> 
                <div className={style.benifitsIcon}> <MdOutlineEngineering/></div>
                <div className={style.benifitsDetails}>
                    <h2 className={style.benifitsHeading}>Top Quality Engineers</h2>
                    <p className={style.benifitsParagraph}> Our hiring process is constantly active to ensure 
                      your access to the best IT professionals in the market.</p>
                </div>
            </div>

           <div className={style.benifitsItem} data-aos="fade-left" data-aos-duration="900" data-aos-delay="20" data-aos-offset='150'> 
                <div className={style.benifitsIcon}><PiNotepadDuotone/></div>
                <div className={style.benifitsDetails}>
                    <h2 className={style.benifitsHeading}> End to End Management</h2>
                    <p className={style.benifitsParagraph}> We are responsible for your project completion 
                    and team management from start to end, guaranteeing quality product output.</p>
                </div>
            </div>

            <div className={style.benifitsItem} data-aos="fade-up" data-aos-duration="900" data-aos-delay="20" data-aos-offset='150'> 
                <div className={style.benifitsIcon}><VscSettingsGear/></div>
                <div className={style.benifitsDetails}>
                    <h2 className={style.benifitsHeading}> Operational Efficiency</h2>
                    <p className={style.benifitsParagraph}> Our cost effective services help reduce 
                    your costs to remain competitive without compromising quality.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Benifits