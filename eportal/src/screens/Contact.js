import React from 'react';

import "./Contact.css";



const Contact = () => {
  const currentYear = new Date().getFullYear();
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
        
      
      
      </td>
      </tr>
      </tbody>
      </table>
      <br/>
      <hr/>
      <h4 style={{textAlign:"center"}}>©️{currentYear} Nyaaya,All Rights Reserved</h4>

      </div>
      
      
    </>
  )
}

export default Contact