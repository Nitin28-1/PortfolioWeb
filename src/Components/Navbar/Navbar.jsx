import React, { useState } from 'react'
import "./Navbar.css"
import { LuMenuSquare } from "react-icons/lu";
import MobileNav from './MobileNav/MobileNav';
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {

  const [openMenu,setOpenMenu]= useState(false);
  
  const toggleMenu = ()=>
  {
    setOpenMenu(!openMenu);
  }

  return (
    <>
      
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>

      <div className='Outer-Nav'>
        <div className='Nav-Content'>
          
          <h1  className='logo'>PORT...</h1>

          <ul>

          <li>  <a href='#home' className='nav-item'>Home</a> </ li>
            <li>  <a href='#skills' className='nav-item'>Skills</a>   </li>
            <li>  <a href='#work-experience' className='nav-item'>Work Experience</a>   </li>
            <li>  <a href='#contact' className='nav-item'>Contact Me</a> </li>

            <button className='contact-btn' onClick={()=>{}}>Hire Me</button>
            
            </ul>

          <button class="menu-btn" onClick={toggleMenu}>
          <span
          class={"material-symbols-outlined"}
          style={{ fontSize: "1.8rem" }}
          >
          {openMenu ? "close": "menu"}
          </span>

          </button> 
          

        </div>

      </div>
    
    
    </>
  )
}

export default Navbar