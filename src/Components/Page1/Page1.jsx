import React from 'react'
import "./Page1.css"


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
              <img src={"https://tinyurl.com/kph8pvbw"} alt="" className='icons'/>
            </div>
             <img src={'https://tinyurl.com/3jkyfb5k'} alt="" className='main-character' />
            </div>

          <div className='page1-img-second'>

             <div className='tech-icons'>
              <img src={'https://tinyurl.com/5e5p9khx'} alt="" className='icons'/>
            </div>

            <div className='tech-icons'>
              <img src={'https://tinyurl.com/57h34a9a'} alt="" className='icons'/>
            </div>

            <div className='tech-icons'>
              <img src={'https://tinyurl.com/yhddp83m'} alt="" className='icons'/>
            </div>

         </div>   

          </div>        

        </section>
  )
}

export default Page1