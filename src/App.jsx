import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Page1 from './Components/Page1/Page1'
import Skills from './Components/Skills/Skills'
import WorkExperience from './Components/WorkExperience/WorkExperience'
import ContactMe from './Components/ContactMe/ContactMe'
import Footer from './Components/Footer/Footer'

function App() {


  return (
    <>
      <Navbar />
       <div className='container'>
       <Page1/>
       <Skills />
       <WorkExperience />
       <ContactMe />
       </div>
       <Footer/>
 
    </>
  );
};

export default App;
