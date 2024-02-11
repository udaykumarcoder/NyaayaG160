// import React from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
// import "./Advocatesidebar.css";
// import "./sidebar.css";
// import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

// const Advocatesidebar = ({switchComponent}) => {
//   const location = useLocation();
//   const emailFromLogin = location?.state?.email || '';
//   const [userData, setUserData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await fetch(`http://localhost:3001/api/user2?email=${emailFromLogin}`);

//         if (!response.ok) {
//           if (response.status === 404) {
//             setError('User not found.');
//           } else {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//           }
//         } else {
//           const data = await response.json();
//           if (data && Object.keys(data).length > 0) {
//             setUserData(data);
//           } else {
//             setError('User data not available.');
//           }
//         }
//       } catch (error) {
//         setError(`Error fetching user data: ${error.message}`);
//       }
//     };

//     fetchUserData();
//   }, [emailFromLogin]);


//   return (
//     <section>
//       {error && <p>{error}</p>}
//     {userData && (
    
//         <div className="sidebar">
        
//           <div className="Litigantprofile">
          
//             <div className="profileImg">
//             </div>
//           </div>
//           <div className="lsidebarName">
//           <h3>
//           {userData.name}
//           </h3>
//           <p>Advocate</p>
//           </div>
          
//           <div>
   
//           </div>
//         <ul>
          
//         <li><h3><button onClick={() => switchComponent(0)}>👤 &nbsp; User Info</button></h3></li>
//         <li><h3><button onClick={()=>switchComponent(1)}>📃&nbsp;Case Documents</button></h3></li>
//         <li><h3><Link to="/casefiling"><button > 📜Case Filing</button></Link></h3></li> 
          
          
//         </ul>
//         <Link smooth to='/#home'><button className="logout"><b>⇤Log Out</b></button></Link>
    
//       </div>
    
//     )}
//     </section>
//   )
// }



// export default Advocatesidebar