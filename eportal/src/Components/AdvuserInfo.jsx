
// import './Userinfo.css';


const AdvuserInfo = () => {
  


return (
  <div className="userInfo">
    
      <>
        {/* Render user data here */}
        <div className="whiteBox">
          <div className="profile">
            {/* You can customize this section based on your UI design */}
          </div>
        </div>

        <div className='Lprofile'>
          <div className='litigantName'>
            <h4>name</h4>
            <p>Advocate</p>
          </div>
          <div className='Lbutton'>
            <button>✒Edit Profile</button>
          </div>
        </div>

        <div className="litigantDetails">
          <h5><b>EMAIL ID</b></h5>
          <br />
          <p>email</p>
          <hr />
          <br />
          <h5><b>CONTACT</b></h5>
          <br />
          <p>phone</p>
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
 
  </div>
);
};



export default AdvuserInfo;

