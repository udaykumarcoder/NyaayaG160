import React from 'react'
import "./Litigantsidebar.css"
const Litigantsidebar = () => {
  return (
    <section>
        <div className="sidebar">
          <div className="Litigantprofile">
            <div className="profileImg">
            </div>
          </div>
          <div className="lsidebarName">
          <h3>
            HARSHINI REDDY
          </h3>
          <p>Litigant</p>
          </div>
          
          <div>

          </div>
        <ul>
          <li><h3> 👤&nbsp;User Info</h3></li>
          <li><h3>📍&nbsp;Case Tracking</h3></li>
          <li><h3>📃&nbsp;Case Documents</h3></li>
          <li><h3>📝&nbsp;Case Appeal</h3></li>
          
        </ul>
        <button className="logout"><b>⇤Log Out</b></button>
      </div>
    </section>
  )
}

export default Litigantsidebar