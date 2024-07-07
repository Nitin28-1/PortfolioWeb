import React, { useState } from 'react'

import "./ContactForm.css"



const ContactForm = () => {
  
  
const [formData, setFormData] = useState({
  firstname: '',
  lastname:'',
  email: '',
  message: ''
});

const handleChange=(e)=>
{
   const {name,value}= e.target;

   setFormData({...formData,[name]:value});
}

const SendResponse=()=>
{
  alert("Message Send Successfull")
}


  return (
    <div className="contact-form-content">
      <form  >
       <div className="name-container">
        <input type="text" name='firstname' placeholder='First Name' onChange={handleChange} value={formData.firstname} />
        <input type="text" name='lastname' placeholder='Last Name' onChange={handleChange} value={formData.lastname}/>
       </div>

       <input type="text" name='email' placeholder='Email'  value={formData.email} onChange={handleChange}/>
       <textarea name="message" placeholder='Message' rows={3} type="text"  value={formData.message} onChange={handleChange}/>
    
      <button onClick={SendResponse}>SEND</button>

      </form>
    </div>
  )
}

export default ContactForm