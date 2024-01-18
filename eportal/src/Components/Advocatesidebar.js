import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import "./Advocatesidebar.css";
import "./sidebar.css";

const Advocatesidebar = ({switchComponent}) => {
  return (
    <section>
      
        <div className="sidebar">
        
          <div className="Litigantprofile">
          
            <div className="profileImg">
            </div>
          </div>
          <div className="lsidebarName">
          <h3>
          name
          </h3>
          <p>Advocate</p>
          </div>
          
          <div>
   
          </div>
        <ul>
          
        <li><h3><button onClick={() => switchComponent(0)}>👤 &nbsp; User Info</button></h3></li>
        <li><h3><button onClick={()=>switchComponent(1)}>📃&nbsp;Case Documents</button></h3></li>
        <li><h3><button onClick={() => switchComponent(2)} >📜&nbsp;Case Filing</button></h3></li>
          
          
        </ul>
        <Link smooth to='/#home'><button className="logout"><b>⇤Log Out</b></button></Link>
    
      </div>
    
   
    </section>
  )
}



export default Advocatesidebar