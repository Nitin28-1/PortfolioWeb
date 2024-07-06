import React, { useRef } from 'react'
import "./WorkExperience.css"
import ExperienceCard from './ExperienceCard/ExperienceCard'
import { SKILLS, WORK_EXPERIENCE} from "../../Utils/data"
import Slider from "react-slick"

const WorkExperience = () => {

  const slideRef = useRef();

  const settings={
    dots:false,
    infinite:true,
    speed: 500,
    slideToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive:[
      {
        breakpoint:769,
        settings:{
          slideToShow:1,
          slidesToScroll:1,
        },
      },
    ],
  };

  const slideRight=()=>
    {
      slideRef.current.slickNext();
    };

  const slideLeft=()=>
    {
      slideRef.current.slickPrev();
    };

  return (
   <section id='work-experience' className='experience-container'>
    <h5>Work Experience</h5>
 
     <div className="experience-content" onClick={slideRight}>
     <div className="arrow-right">
      <span className='material-symbols-outlined'>chevron_right</span>
     </div>

     <div className="arrow-left" onClick={slideLeft}>
      <span className='material-symbols-outlined'>chevron_left</span>
     </div>

      <Slider ref={slideRef} {...settings}>
      {WORK_EXPERIENCE.map((item)=>(
        <ExperienceCard key={item.title}
        details={item}/>
        ))}

      </Slider>
  
    </div>
   </section>
  )
}

export default WorkExperience