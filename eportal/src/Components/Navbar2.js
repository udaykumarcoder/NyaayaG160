import React, { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link';

import './Navbar2.css';
import AdvocateForm from './AdvocateForm';
import LitigantForm from './LitigantForm';
import AdministratorForm from './AdministratorForm';

const Navbar2 = () => {
  const[selectedOption,setSelectedOption]=useState(null)

  const renderForm=()=>{
    switch(selectedOption){
      case 'advocate':
        return <AdvocateForm/>;
      case 'litigant':
        return <LitigantForm/>;
      case 'administrator':
        return <AdministratorForm/>;
      default:
        return null;
    }
  }
  return (
    <>
      <section className='navbar2 w-full'>
        <div className="container">
          <div className="logo">
            <div className="logoimg">
            </div>

            <div className="logoheading">
              <p className='logonyaya'>NYAAYA</p>
              <p className='logosubheading'>CASE MANAGEMENT</p>
            </div>
          </div>
          <ul>
            <li><Link smooth to='/#home'>Home</Link></li>
            <li><Link smooth to='/#faq'>FAQ's</Link></li>
            <li><Link smooth to='/#contacts'>Contact</Link></li>
          </ul>
        </div>
        <div className="registrationform">
        <p><span className='icon'><i class="fa-solid fa-arrow-right"></i></span>REGISTRATION FORM</p>
        </div>
        <div className="options">
          <p>Register As :</p>
        <div className='radiogrp'>
        <div className="options1">
              <input
                type="radio"
                id="option1"
                name="radio-group"
                onChange={() => setSelectedOption('advocate')}
              />
              <label htmlFor="option1">Advocate</label><br />
            </div>
            <div className="options2">
              <input
                type="radio"
                id="option2"
                name="radio-group"
                onChange={() => setSelectedOption('litigant')}
              />
              <label htmlFor="option2">Litigant</label><br />
            </div>
            <div className="options3">
              <input
                type="radio"
                id="option3"
                name="radio-group"
                onChange={() => setSelectedOption('administrator')}
              />
              <label htmlFor="option3">Court Administrator</label><br />
            </div>
        </div>
        </div>

      </section>
      {renderForm()}



    </>
  )
}

export default Navbar2;