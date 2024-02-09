import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Userinfo.css';


const AdvuserInfo = () => {
  const location = useLocation();
  const emailFromLogin = location?.state?.email  || localStorage.getItem('loggedInUserEmail') || '';
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/user2?email=${emailFromLogin}`);

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

  useEffect(() => {
    // Storing  email in localStorage
    localStorage.setItem('loggedInUserEmail', emailFromLogin);
  }, [emailFromLogin]);



return (
  <div className="userInfo">
    {error && <p>{error}</p>}
    {userData && (
      <>
        {/* <div className="whiteBox"> */}
          
          {/* </div> */}

        <div className='Lprofile'>
                    <div className="profile">
                    </div>

          <div className='litigantName'>
            <h4>{userData.name}</h4>
            <p>Advocate</p>
          </div>
          <div className='Lbutton'>
            <button className='userInfobuttons'>✒Edit Profile</button>
          </div>
        </div>

        <div className="litigantDetails">
          <h5><b>EMAIL ID</b></h5>
          <br />
          <p>{userData.email || emailFromLogin}</p>
          <hr />
          <br />
          <h5><b>Linkedin</b></h5>
          <br />
          <p><a href={userData.profileurl} target="_blank" rel="noopener noreferrer" style={{ textDecoration:'none',color:'black',cursor: 'pointer' }}>{userData.profileurl}</a></p>
          <hr />
          <br />
          <h5><b>CONTACT</b></h5>
          <br />
          <p>{userData.phone}</p>
          <hr />
          <br />
          <h5><b>PASSWORD</b></h5>
          <br />
          <div className="Lpassword">
            <p>*******</p>
            <p>🔑<button className='userInfobuttons'>Change Password</button></p>
          </div>
          <hr />
        </div>
      </>
    )}
 
  </div>
);
};



export default AdvuserInfo;
