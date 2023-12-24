import React from 'react';
//import {HashLink as Link} from 'react-router-hash-link';
import './LoginPage.css';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div class="body">
    <div class="container">
    <div class="transparent-box">
      
        <h1 id="font" >LOGIN</h1>
        <h2 class="a">Login as:</h2>
        <table>
            <tr>
                <td><h3 class="d"><input type="radio" name="Advocate"/> Advocate</h3></td>
                <td><h3 class="d"><input type="radio" name="Advocate"/>Litigant</h3></td>
                <td><h3 class="d"><input type="radio" name="Advocate"/>Administrator</h3></td>
            </tr>
        </table>
        <table>
        <tr>
            <td class="f">
                <label for="State"><h2>Select State:</h2></label>
                <div class="dropdown">
                    <button style={{ height:'35px' , width:'200px' ,textAlign:'left'}}>Select State/Union territory</button>
                    <div class="dropdown-content">
                      <button >Andhra Pradesh</button>
                      <button >Arunachal Pradesh</button>
                      <button>Assam</button>
                      <button >Bihar</button>
                      <button >Chhattisgarh</button>
                      <button >Goa</button>
                      <button>Gujarat</button>
                      <button >Haryana</button>
                      <button>Himachal Pradesh</button>
                      <button>Jharkhand</button>
                      <button>Karnataka</button>
                      <button>Kerala</button>
                      <button>Madhya Pradesh</button>
                      <button>Manipur</button>
                      <button>Meghalaya</button>
                      <button>Mizoram</button>
                      <button >Nagaland</button>
                      <button >Odisha</button>
                      <button>Punjab</button>
                      <button>Rajasthan</button>
                      <button>Sikkim</button>
                      <button>Tamil Nadu</button>
                      <button >Telangana</button>
                      <button>Tripura</button>
                      <button>Uttarakhand</button>
                      <button>Uttar Pradesh</button>
                      <button>West Bengal</button>
                      <button>Andaman and Nicobar Islands</button>
                      <button>Chandigarh</button>
                      <button>Dadra and Nagar Haveli and Daman and Diu</button>
                      <button>Govt of NCT of Delhi</button>
                      <button>Jammu and Kashmir</button>
                      <button>Ladakh</button>
                      <button>Lakshadweep</button>
                      <button>Puducherry</button>
                     
                    </div>
                  </div>
            </td>
            <td class="b">
                <label for="Username"><h2 className='i'>Username:</h2></label>
                <h2><input  className='o' type="email" name="Username" placeholder="Email"/></h2>
            </td>
        </tr>
        <tr>
            <td class="f">
                <label for="Password"><h2>Password:</h2></label>
                <h2><input className='n' type="password" name="Password" placeholder="Enter password"/></h2>
            </td>
            <td class="b">
            
                <label for="Otp"><h2>OTP Authentication:</h2></label>
                <div className='omg'>
                <button style={{height:'40px', width:'100px' }}>Send OTP</button>
                <h2 className='m'><input className='p' type="number" name="Otp" placeholder="Enter OTP" /></h2>
                </div>
            </td>
            </tr>
        </table>
        <div className='x'>
       <button ><b>LOGIN</b></button>
       </div>
       <Link id="back" to='/#home'><button className='backbtn'> Back </button></Link>
        <div class="c">
        <h4 >Don't have an account?</h4>
        <button class="btn">SIGN UP</button>
        </div>
    </div>
   
    </div>
      
    </div>
  );
};

export default LoginPage;