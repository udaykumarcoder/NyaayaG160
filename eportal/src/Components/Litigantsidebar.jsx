import React from 'react'
import "./sidebar.css"
const Litigantsidebar = ({ handleSidebarItemClick ,selectedSection}) => {
  return (
    <section>
        <div class="sidebar">
        <ul>
          <li  className={selectedSection === 'User Info' ? 'active' : ''} 
          onClick={() => handleSidebarItemClick('User Info')}><h3> 👤&nbsp;User Info</h3></li>
          <li className={selectedSection === 'Case Tracking' ? 'active' : ''}
           onClick={() => handleSidebarItemClick('Case Tracking')}><h3>📍&nbsp;Case Tracking</h3></li>
          <li className={selectedSection === 'Case Documents' ? 'active' : ''} 
           onClick={() => handleSidebarItemClick('Case Documents')}><h3>📃&nbsp;Case Documents</h3></li>
          <li className={selectedSection === 'Case Appeal' ? 'active' : ''} 
          onClick={() => handleSidebarItemClick('Case Appeal')}><h3>📝&nbsp;Case Appeal</h3></li>
          
        </ul>
        <button class="logout"><b>⇤Log Out</b></button>
      </div>
    </section>
  )
}

export default Litigantsidebar