import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import AdminImage from '../Assets/Admin.jpg';
import './LoginPage.css';

const AdministratorLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp]= useState('');
    const navigate=useNavigate();
    
    const handleSendOTP = async (event) => {
      event.preventDefault();
    
      try {
        // sending  OTP 
        const otpResponse = await fetch(`http://localhost:3001/send-otp`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: email }),
        });
    
        const otpData = await otpResponse.json();
    
        if (otpResponse.ok && otpData.status === 'ok') {
          alert('OTP sent successfully!');
        } else {
          alert('Failed to send OTP. Please try again.');
        }
      } catch (error) {
        console.error('Error sending OTP:', error);
        alert('An error occurred. Please try again.');
      }
    };
    

    
    const handleLogin = async (event) => {
      event.preventDefault();
      console.log('Login values:', email, password, otp);
    
      try {
        // Verifying OTP
        const otpVerificationResponse = await fetch(`http://localhost:3001/verify-otp`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, otp: parseInt(otp, 10) }), //converting otp into integer
        });
    
        const otpVerificationData = await otpVerificationResponse.json();
    
        if (otpVerificationResponse.ok && otpVerificationData.status === 'ok') {
          
          try {
            const loginResponse = await fetch(`http://localhost:3001/login/administrator`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email, password, otp }),
            });
    
            const loginData = await loginResponse.json();
    
            if (loginResponse.ok) {
              console.log('Login successful:', loginData);
              navigate('/adminstratoraccount', { state: { email } });
            } else {
              console.error('Login failed:', loginData);
              alert('Login failed. Please check your credentials.');
            }
          } catch (loginError) {
            console.error('Error during login:', loginError);
            alert('An error occurred during login. Please try again.');
          }
        } else {
          console.error('OTP verification failed:', otpVerificationData);
          alert('OTP verification failed. Please enter the correct OTP.');
        }
      } catch (error) {
        console.error('Error during OTP verification:', error);
        alert('An error occurred. Please try again.');
      }
    };
  
  return (
    <>
    <div className="advloginContainer">
        <div className="advloginLeft">
          <img src={AdminImage} alt="advocatelogo" />
          <p>"EMPOWER YOUR VOICE, FILE FOR <br /> JUSTICE -YOUR STORY, YOUR <br /> RIGHT, YOUR VICTORY."</p>
          <br />
          <div className="advbuttonsLogin">
            <div className='loginSignup'>
            <button onClick={() => {
              navigate('/#home')
            }} className='img'>Back</button>
            </div>
            <div className="sublogin">
              <h6 className='dontText'>Don't have an Account?</h6>

            <button onClick={() => {
              navigate('/signup')
            }} className='img loginSignup'>Sign Up</button>
        </div>

          </div>
          

        </div>

        <form onSubmit={handleLogin}>

          <div className="advloginRight">
            <h3>LOGIN</h3>
            <div className="subadvloginRight">
              <label htmlFor="Username">
                <h4 className="i">Username:</h4>
              </label>
              <h5>
                <input
                  className="o"
                  type="email"
                  name="Email"
                  placeholder="   Bar Code/Email/Phone no.   "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </h5>
              <br />
              <label className="y" htmlFor="Password">
                <h4>Password:</h4>
              </label>
              <h5>
                <input
                  className="o"
                  type="password"
                  name="Password"
                  placeholder="  Enter password  "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </h5>
              <br />
              <label className="y" htmlFor="Otp">
                <h4>OTP Authentication:</h4>
              </label>
              <div className="omg">
                <button type="button" style={{ height: '33px', width: '100px', marginRight: '10px' }} onClick={handleSendOTP}>Send OTP</button>

                <h6 className="m">

                  <input
                    className="p"
                    type="number"
                    name="Otp"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)} 

                  />
                </h6>
              </div>
              <br /><br />
              <div className="x">
                <button type="submit">

                  <b>LOGIN</b>
                </button>
                <br />
                <p>Forgot Password?</p>
              </div>
            </div>

          </div>
        </form>
      </div>
    </>
    // <div>
    //    <div class="body">
    // <div class="transparent-box">
    // <form onSubmit={handleLogin}>
    //     <h1 id="font" >LOGIN</h1>
    //     <h2 class="a">You are logging in as:</h2>
    //     <table>
        
    //         <tr>
    //             <td><h4 class="d">➤Administrator </h4></td>
    //         </tr>
    //     </table>
    //     <table>
    //     <tr>
    //         <td class="b">
    //             <label for="Username"><h4 className='i'>Username:</h4></label></td>
    //            <td> <h5><input  className='o' type="email" name="Username" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/></h5>
    //         </td>
    //     </tr>
    //     <tr>
    //         <td class="b">
    //             <label className="y" for="Password"><h4>Password:</h4></label></td>
    //           <td>  <h5><input className='o' type="password" name="Password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} /></h5>
    //         </td></tr>
    //         <tr>
    //         <td class="b">
    //             <label className='y' for="Otp"><h4>OTP Authentication:</h4></label></td>
    //             <td> <div className='omg'>
    //             <button type="button" style={{ height: '33px', width: '100px' }} onClick={handleSendOTP}>Send OTP</button>

    //             <h6 className='m'>
    //             <input
    //                 className="p"
    //                 type="number"
    //                 name="Otp"
    //                 placeholder="Enter OTP"
    //                 value={otp}
    //                 onChange={(e) => setOtp(e.target.value)} 
    //               />
    //             </h6>
    //             </div> 
    //         </td>
    //         </tr>
    //     </table>
    //     <div className='x'>
    //    <button ><b>LOGIN</b></button>

    //    <button
    //     type="button"
    //     onClick={() => navigate('/passwordreset3')}
    //   >
    //     Forgot Password?
    //   </button>
    //    </div>
      
    //    <Link id="back" to='/#home'><button className='backbtn'><h6> Back</h6> </button></Link>
    //     <div class="c">
    //     <h5 >Don't have an account?</h5>
    //     <Link to="/signup" ><button className='bn'><b>SIGN UP</b></button></Link>
    //     </div>
    //     </form>
    // </div>
    
    // </div>
    // </div>
  )
}

export default AdministratorLogin