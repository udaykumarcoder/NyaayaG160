import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import "./Litigantsidebar.css"
const Litigantsidebar = ({ switchComponent }) => {
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
          
        <li><h3><button onClick={() => switchComponent(0)}>👤 &nbsp; User Info</button></h3></li>
        <li><h3><button onClick={() => switchComponent(1)}>📍&nbsp; Case Tracking</button></h3></li>  
        <li><h3><button onClick={()=>switchComponent(2)}>📃&nbsp;Case Documents</button></h3></li>
          <li><h3>📝&nbsp;Case Appeal</h3></li>
          
        </ul>
        <Link smooth to='/#home'><button className="logout"><b>⇤Log Out</b></button></Link>
      </div>
    </section>
  )
}

export default Litigantsidebar

// // Litigantsidebar.js
// import React from 'react';
// import "./Litigantsidebar.css";

// const Litigantsidebar = ({ switchComponent }) => {
//   return (
//     <section>
//       <div className="sidebar">
//         {/* ... your existing code ... */}
//         <ul>
//           <li><button onClick={() => switchComponent(0)}>👤 &nbsp; User Info</button></li>
//           <li><button onClick={() => switchComponent(1)}>📍&nbsp; Case Tracking</button></li>
          
//         </ul>
//         <button className="logout"><b>⇤ Log Out</b></button>
//       </div>
//     </section>
//   );
// };

// export default Litigantsidebar;
