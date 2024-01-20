import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import About from './About';
import Contact from './Contact';
import Faq from './Faq';
import './Home.css';




const Home = () => {
  return (
    <>
      
      <div  className='HOME w-full' >
        <Navbar />
        <section>
          <div id="headline" >
            <h1 id="nyaya" >NYAAYA</h1>
            <h2 id="case">CASE MANAGEMENT</h2>
          </div>
        </section>
        <section>
          <div className="buttons" >

          <Link to="/login" className="font" id="first"> <button >LOGIN</button> </Link>
          <Link to="/signup" className='font' id='first'><button >SIGNUP</button>  </Link>
          </div>
        </section>
        
      </div>
      
      <About/>
      <Faq/>
      <Contact/>
      

    </>
  )
}

export default Home