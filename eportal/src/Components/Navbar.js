import React from 'react'
import {HashLink as Link} from 'react-router-hash-link';

import './Navbar.css';
const Navbar = () => {
  return (
    <>
    <section className='navbar'>
        <ul>
            <li><Link smooth to='#home'>Home</Link></li>
            <li><Link smooth to='#about'>About</Link></li>
            <li><Link smooth to='#services'>Services</Link></li>
            <li><Link smooth to='#faq'>FAQ's</Link></li>
           <li>Contact</li>
        </ul>
    </section>
    
    </>
  )
}

export default Navbar