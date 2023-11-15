import React, { useEffect, useState } from 'react'
import style from "../../../../styles/Admin/contactInfo.module.css"
import axios from 'axios'
const ContactInfo = () => {









  return (
    <div className={style.ContactInfo}>
        <div className={style.heading}>
            <div>Name</div>
            <div>Email</div>
            <div>Phone</div>
            <div>Message</div>
        </div>
    </div>
  )
}

export default ContactInfo