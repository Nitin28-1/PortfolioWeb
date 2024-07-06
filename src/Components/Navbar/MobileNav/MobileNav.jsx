import React from 'react'
import "./MobileNav.css"

function MobileNav({isOpen , toggleMenu}) {
  
    return (
    <>
     <div className={`mobile-menu ${isOpen ? 'active' : ""}`} onClick={toggleMenu}>
        
       <div className='mobile-menu-container'>
       <h1  className='logo'>PORT...</h1>

        <ul>

        <li>
             <a className='nav-item'>Home</a>
        </ li>
        <li>
            <a className='nav-item'>Skills</a>
        </li>
        <li>
            <a className='nav-item'>Work Experience</a>
        </li>
        <li>
            <a className='nav-item'>Contact Me</a>
        </li>

        </ul>

        <button className='contact-btn' onClick={()=>{}}>Hire Me</button>
    
       </div>

     </div>
   
   </>
  )
}

export default MobileNav