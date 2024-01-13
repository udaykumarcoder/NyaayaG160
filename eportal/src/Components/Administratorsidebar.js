import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

import "./sidebar.css"
const Administratorsidebar = ({ handleSidebarItemClick ,selectedSection}) => {
  return (
    <section>
    <div class="sidebar">
    <ul>
      <li className={selectedSection === 'User Info' ? 'active' : ''} 
          onClick={() => handleSidebarItemClick('User Info')}><h3> 👤&nbsp;User Info</h3></li>
      <li className={selectedSection === 'Upload Documents' ? 'active' : ''} 
          onClick={() => handleSidebarItemClick('Upload Documents')}><h3> 📤 &nbsp;Upload Case <br/> &nbsp; &nbsp;&nbsp; &nbsp;   Documents</h3></li>
      <li className={selectedSection === 'Update Case Details' ? 'active' : ''} 
          onClick={() => handleSidebarItemClick('Update Case Details')}><h3>🔁&nbsp; Update Case <br/> &nbsp; &nbsp;&nbsp; &nbsp;  Details</h3></li>
     
      
    </ul>
    <Link smooth to='/#home'><button class="logout"><b>⇤Log Out</b></button></Link>
  </div>
</section>
  )
}

export default Administratorsidebar