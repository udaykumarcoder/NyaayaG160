import React from 'react'
import './Userinfo.css';

const UserInfo = () => {
  return (
    <>
    <div className="userInfo">
      
      <div className="whiteBox"> 
      <div className="profile">
        
        </div>
      </div>
      <div className='Lprofile'>
        <div className='litigantName'>
        <h4>HARSHINI REDDY T</h4>
        <p>Litigant</p>
        </div>
        <div className='Lbutton'>
        <button>✒Edit Profile</button>
        </div>
        
      </div>
      <div className="litigantDetails">
        <h5><b>EMAIL ID</b></h5>
        <br />
        <p>hersheys1234@gmail.com</p>
        <hr />
        <br />
        <h5><b>CONTACT</b></h5>
        <br />
        <p>+91 999999999</p>
        <hr />
        <br />
        <h5><b>PASSWORD</b></h5>
        <br />
        <div className="Lpassword">
        <p></p>
        <p>🔑<button>Change Password</button></p>
        </div>
        <hr />
      </div>
      
     
    </div>
    </>
  )
}

export default UserInfo