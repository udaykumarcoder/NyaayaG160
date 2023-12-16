import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

import './Navbar2.css';

const Navbar2 = () => {
  return (
    <>
      <section className='navbar2 w-full'>
        <div className="container">
          <div className="logo">
            <div className="logoimg">
            </div>

            <div className="logoheading">
              <p>NYAAYA</p>
              <p>MANAGEMENT</p>
            </div>
          </div>
          <ul>
            <li><Link smooth to='/#home'>Home</Link></li>
            <li><Link smooth to='/#faq'>FAQ's</Link></li>
            <li><Link smooth to='/#contacts'>Contact</Link></li>

          </ul>
        </div>
        
        <h3>REGISTATION FORM<span className='icon'><i class="fa-solid fa-arrow-right"></i></span></h3>
        <div className="options">
          <p>Register As :</p>
        <div className='radiogrp'>
          <div className="options1">
          <input type="radio" id="option1" name="radio-group" />
          <label for="option1">Advocate</label><br />
          </div>
          <div className="options2">
          <input type="radio" id="option2" name="radio-group" />
          <label for="option2">Litigant</label><br />
          </div>
          <div className="options3">
          <input type="radio" id="option3" name="radio-group" />
          <label for="option3">Court Administrator</label><br />
          </div>
        </div>
        </div>

      </section>




    </>
  )
}

export default Navbar2