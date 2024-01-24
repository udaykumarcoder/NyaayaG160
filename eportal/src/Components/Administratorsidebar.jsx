import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import "./Administratorsidebar.css";

const Administratorsidebar = ({ switchComponent }) => {

  const location = useLocation();
  const emailFromLogin = location?.state?.email || '';
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/user?email=${emailFromLogin}`);

        if (!response.ok) {
          if (response.status === 404) {
            setError('User not found.');
          } else {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
        } else {
          const data = await response.json();
          if (data && Object.keys(data).length > 0) {
            setUserData(data);
          } else {
            setError('User data not available.');
          }
        }
      } catch (error) {
        setError(`Error fetching user data: ${error.message}`);
      }
    };

    fetchUserData();
  }, [emailFromLogin]);
  return (
    <section>
      {error && <p>{error}</p>}
    {userData && (
    <div class="sidebar">
 <div className="Adminprofile">
            <div className="profileImg">
            </div>
          </div>
          <div className="adminsidebarName">
          <h3>
          {userData.name}
          </h3>
          <p>Administrator</p>
          </div>
          <div>
    <ul>
      <li
          onClick={() => switchComponent(0)}><h3> 👤&nbsp;User Info</h3></li>
      <li 
          onClick={() =>switchComponent(1) }><h3> 📤 &nbsp;Upload Case <br/> &nbsp; &nbsp;&nbsp; &nbsp;   Documents</h3></li>
      <li  
          onClick={() =>switchComponent(2)}><h3>🔁&nbsp; Update Case <br/> &nbsp; &nbsp;&nbsp; &nbsp;  Details</h3></li>
           

      
    </ul>
    <Link smooth to='/#home'><button class="logout"><b>⇤Log Out</b></button></Link>
  </div>
</div>
    )}
</section>
  )
}



export default Administratorsidebar