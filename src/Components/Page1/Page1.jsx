import React from 'react'
import "./Page1.css"
import react from "../../../public/images/react.png"
import person from "../../../public/images/page1-1.jpg"
import js from "../../../public/images/js.webp"
import c from "../../../public/images/c++.png"
import tailwind from "../../../public/images/tailwind.png"

const Page1 = () => {
  return (
        <section id='home' className='page1-container'>
         <div className='page1-content'>
           <h2>Transform Screens Into Immersive Adventures</h2>

          <p>
          Passionate Web Developer | Transforming Ideas into Seamless and
          Visually Stunning Web Solutions
          </p>

          </div>   

          <div className='page1-img'>

          
            <div>
            <div className='tech-icons'>
              <img src={react} alt="" className='icons'/>
            </div>
             <img src={person} alt="" className='main-character' />
            </div>

          <div className='page1-img-second'>

             <div className='tech-icons'>
              <img src={js} alt="" className='icons'/>
            </div>

            <div className='tech-icons'>
              <img src={c} alt="" className='icons'/>
            </div>

            <div className='tech-icons'>
              <img src={tailwind} alt="" className='icons'/>
            </div>

         </div>   

          </div>        

        </section>
  )
}

export default Page1