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

      <ContactnfoCard iconUrl="https://tinyurl.com/yenf2fc3"
      text="nitinnegi3112h@safar.com"/> 

      <ContactnfoCard 
      iconUrl="https://tinyurl.com/2ntf5v5p"
      text="https://github.com/Nitin28-1"/> 

    </div>

    <div style={{flex:1}}>


    <ContactForm />
    </div>

   </div>

    </section>
  )
}

export default ContactMe