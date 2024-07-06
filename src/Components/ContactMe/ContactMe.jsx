import React from 'react'
import "./ContactMe.css"
import ContactnfoCard from './ContactInfoCard/ContactnfoCard'
import ContactForm from './ContactForm/ContactForm'

const ContactMe = () => {
  return (
    <section id='contact' className='contact-container'>
   <h5>Contact Me</h5>

   <div className="contact-content">
    <div  style={{flex:1}}>

      <ContactnfoCard iconUrl="../../../public/images/email.png"
      text="nitin@safar.com"/> 

      <ContactnfoCard 
      iconUrl="../../../public/images/github.png"
      text="https://github.com/nitin"/> 

    </div>

    <div style={{flex:1}}>


    <ContactForm />
    </div>

   </div>

    </section>
  )
}

export default ContactMe