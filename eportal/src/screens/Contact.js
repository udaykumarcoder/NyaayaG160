import React from 'react'

import "./Contact.css";



const Contact = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="contact" id='contacts'>
        <div className="contactContainer">
        <div className="contactLeft">
          <p>Contact</p>
          <div className="contactContent">
            <p>✉️ help.nyaaya@gmail.com</p>
            <p>🏠 Neil Gogte Institute of Technology,Uppal, <br />Kachawanisingaram Village,Hyderabad,Telangana,500039</p>
          </div>
        </div>
        <div className="contactRight">
          {/* <div className="quickLinks">
            <p>QuickLinks</p>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>FAQ</li>
            </ul>
          </div> */}
        </div>
        </div>
        <div className="contactCopyright">
          <hr />

          <h4>©️{currentYear} Nyaaya,All Rights Reserved</h4>
          <br />
        </div>
      </div>
     



    </>
  )
}

export default Contact