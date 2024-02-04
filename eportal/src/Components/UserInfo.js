//Adminstrator user info
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const UserInfo = () => {
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
  <div className="userInfo">
   
    {error && <p>{error}</p>}
    {userData && (
      <>
       
          

        <div className='Lprofile'>
        <div className="profile">
         
         </div>
          <div className='litigantName'>
            <h4>{userData.name}</h4>
            <p>Administrator</p>
          </div>
          <div className='Lbutton'>
            <button>✒Edit Profile</button>
          </div>
        </div>

        <div className="litigantDetails">
          <h5><b>EMAIL ID</b></h5>
          <br />
          <p>{userData.email || emailFromLogin}</p>
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
            <p>*********</p>
            <p>🔑<button>Change Password</button></p>
          </div>
          <hr />
        </div>
      </>
    )}
  </div>
);
};



export default UserInfo;

