import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';


import './Navbar4.css'
const Navbar4 = () => {
  return (
//     <section>
//     <div class="navbar4" id='text'> 
//        <h3 className='heads'>NYAAYA</h3>
//       <h6 className='heads'>CASE MANAGEMENT</h6> 
     
//       <ul>
//       <li><Link smooth to='/#home'>Home</Link></li>
//         <li>FAQ'S</li>
//         <li>Contact</li>
//       </ul>
//     <hr id="line"/>
//     </div>
    
//   </section>
<section className='navbar4'>
        <div className="container">
          <div>
            <div>
            </div>

            <div>
              <h3>NYAAYA</h3>
              <h6>CASE MANAGEMENT</h6>
            </div>
          </div>
          <ul>
            <li><Link smooth to='/#home'>Home</Link></li>
            <li><Link smooth to='/#faq'>FAQ's</Link></li>
            <li><Link smooth to='/#contacts'>Contact</Link></li>
          </ul>
        </div>
        </section>
  )
}

export default Navbar4