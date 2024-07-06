import React from 'react'
import "./ContactInfoCard.css"

const ContactnfoCard = ({iconUrl,text}) => {
  return (
   <div className="contact-details-card">
    <div className="icon">
        <img src={iconUrl} alt={text} className='contact-icons' />
    </div>
   
   <p>{text}</p>

   </div>
  )
}

export default ContactnfoCard