import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';
const AdministratorLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [otp]= useState('');
    const navigate=useNavigate();

    const handleSendOTP = async (event) => {
      event.preventDefault();
      // Add logic to send OTP if needed
      console.log('Sending OTP to:', email);

    };  
    const handleLogin = async (event) => {
      event.preventDefault();
      console.log('Login values:', email, password, otp);
  
      try {
        const response = await fetch('http://localhost:3001/login/administrator', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password, otp }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          
          console.log('Login successful:', data);
        //  navigate('/adminstratoraccount');
          
        } else {
         
          console.error('Login failed:', data);
          //alert("login failed");
          navigate('/adminstratoraccount');
          
        }
      } catch (error) {
        console.error('Error during login:', error);
        
      }
    };
  
  return (
    <div>
       <div class="body">
    <div class="transparent-box">
    <form onSubmit={handleLogin}>
        <h1 id="font" >LOGIN</h1>
        <h2 class="a">You are logging in as:</h2>
        <table>
        
            <tr>
                <td><h4 class="d">➤Administrator </h4></td>
            </tr>
        </table>
        <table>
        <tr>
            <td class="b">
                <label for="Username"><h4 className='i'>Username:</h4></label></td>
               <td> <h5><input  className='o' type="email" name="Username" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/></h5>
            </td>
        </tr>
        <tr>
            <td class="b">
                <label className="y" for="Password"><h4>Password:</h4></label></td>
              <td>  <h5><input className='o' type="password" name="Password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} /></h5>
            </td></tr>
            <tr>
            <td class="b">
                <label className='y' for="Otp"><h4>OTP Authentication:</h4></label></td>
                <td> <div className='omg'>
                <button type="button" style={{ height: '33px', width: '100px' }} onClick={handleSendOTP}>Send OTP</button>

                <h6 className='m'><input className='p' type="number" name="Otp" placeholder="Enter OTP" /></h6>
                </div> 
            </td>
            </tr>
        </table>
        <div className='x'>
       <button ><b>LOGIN</b></button>
       </div>
       <Link id="back" to='/#home'><button className='backbtn'><h6> Back</h6> </button></Link>
        <div class="c">
        <h5 >Don't have an account?</h5>
        <Link to="/signup" ><button className='bn'><b>SIGN UP</b></button></Link>
        </div>
        </form>
    </div>
    
    </div>
    </div>
  )
}

export default AdministratorLogin