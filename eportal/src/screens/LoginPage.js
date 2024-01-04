import React from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div class="body">
    <div class="transparent-box">
        <h1 id="font" >LOGIN</h1>
        <h2 class="a">Login as:</h2>
        <table>
            <tr>
                <td><h4 class="d"><input type="radio" name="Advocate"/> Advocate</h4></td>
                <td><h4 class="d"><input type="radio" name="Litigant"/>Litigant</h4></td>
                <td><h4 class="d"><input type="radio" name="Adminstrator"/>Administrator</h4></td>
            </tr>
        </table>
        <br/>
        <table>
        <tr>
            <td class="b">
                <label for="Username"><h4 className='i'>Username:</h4></label></td>
               <td> <h5><input  className='o' type="email" name="Username" placeholder="Email"/></h5>
            </td>
        </tr>
        <tr>
            <td class="b">
                <label className="y" for="Password"><h4>Password:</h4></label></td>
              <td>  <h5><input className='o' type="password" name="Password" placeholder="Enter password"/></h5>
            </td></tr>
            <tr>
            <td class="b">
                <label className='y' for="Otp"><h4>OTP Authentication:</h4></label></td>
                <td> <div className='omg'>
                <button  style={{height:'33px', width:'100px' }}>Send OTP</button>
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
    </div>
    </div>
  );
};

export default LoginPage;