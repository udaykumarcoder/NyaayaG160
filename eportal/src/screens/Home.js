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
      
      <div className='HOME w-full' >
        <Navbar />
        <section>
          <div id="headline" >
            <h1 id="nyaya" >NYAAYA</h1>
            <h2 id="case">CASE MANAGEMENT</h2>
          </div>
        </section>
        <section>
          <div className="buttons" >

          <Link to="/login" className="font" id="first"> <button className='btn btn-primary btn-sm text-decoration-none'>LOGIN</button> </Link>
          <Link to="/signup" className='font' id='first'><button className='btn btn-primary btn-sm text-decoration-none'>Signup</button>  </Link>
          </div>
        </section>
        <section className="drop">
          <select className="dropup-content">
            <option value="default">Select Language</option>
            <option value="">English</option>
            <option value="">Assamese</option>
            <option value="">Bengali</option>
            <option value="">Bodo</option>
            <option value="">Dogri</option>
            <option value="">Gujarati</option>
            <option value="">Hindi</option>
            <option value="">Kannada</option>
            <option value="">Kashmiri</option>
            <option value="">Konkani</option>
            <option value="">Maithili</option>
            <option value="">Malayalam</option>
            <option value="">Manipuri</option>
            <option value="">Marathi</option>
            <option value="">Nepali</option>
            <option value="">Odhia</option>
            <option value="">Punjabi</option>
            <option value="">Sanskrit</option>
            <option value="">Santali</option>
            <option value="">Sindhi</option>
            <option value="">Tamil</option>
            <option value="">Telugu</option>
            <option value="">Urdu</option>
          </select>
        </section>
      </div>
      
      <About/>
      <Faq/>
      <Contact/>
      

    </>
  )
}

export default Home