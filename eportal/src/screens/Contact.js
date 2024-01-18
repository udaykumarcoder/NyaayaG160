import React from 'react'
import {HashLink as Link} from 'react-router-hash-link';
import "./Contact.css";



const Contact = () => {
  return (
    <>
    <div className="contact" id='contacts'>
      <table>
      <tbody>
      <tr>
      <td >
      <section className="content1">
        <b>Contact</b>
        <br/>
        <br/>
        ✉️ help.nyaaya@gmail.com
        <br/>
        <br/>
        🏠 Neil Gogte Institute of Technology,Uppal, <br />Kachawanisingaram Village,Hyderabad,Telangana,500039

      </section>
      </td>
      <td>
        <div className='contactRight'>
      <div className="c2"><b >Quick Links</b></div>
      
      <section className="content2">
      <div className="bottomnav">
      
      <Link  smooth to='#about'>About &nbsp;&nbsp;&nbsp;</Link>
      <Link  smooth to='#faq'>FAQ's</Link>
      </div>
      <br />
      <b id="c1">Social</b>
      <br/>
      <br/>
      </section>
      </div>
      </td>
      </tr>
      </tbody>
      </table>
      <br/>
      <hr/>
      <h4 style={{textAlign:"center"}}>©️2023 Nyaaya,All Rights Reserved</h4>

      </div>
      
      
    </>
  )
}

export default Contact