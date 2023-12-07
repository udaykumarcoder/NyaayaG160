import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div class="body">
    <div class="container">
    <div class="transparent-box">
      
        <h1 class="c">LOGIN</h1>
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
            <td class="a">
                <label for="State"><h2>Select State:</h2></label>
                <div class="dropdown">
                    <button>Select State/Union territory</button>
                    <div class="dropdown-content">
                      <a href="#">Andhra Pradesh</a>
                      <a href="#">Arunachal Pradesh</a>
                      <a href="#">Assam</a>
                      <a href="#">Bihar</a>
                      <a href="#">Chhattisgarh</a>
                      <a href="#">Goa</a>
                      <a href="#">Gujarat</a>
                      <a href="#">Haryana</a>
                      <a href="#">Himachal Pradesh</a>
                      <a href="#">Jharkhand</a>
                      <a href="#">Karnataka</a>
                      <a href="#">Kerala</a>
                      <a href="#">Madhya Pradesh</a>
                      <a href="#">Manipur</a>
                      <a href="#">Meghalaya</a>
                      <a href="#">Mizoram</a>
                      <a href="#">Nagaland</a>
                      <a href="#">Odisha</a>
                      <a href="#">Punjab</a>
                      <a href="#">Rajasthan</a>
                      <a href="#">Sikkim</a>
                      <a href="#">Tamil Nadu</a>
                      <a href="#">Telangana</a>
                      <a href="#">Tripura</a>
                      <a href="#">Uttarakhand</a>
                      <a href="#">Uttar Pradesh</a>
                      <a href="#">West Bengal</a>
                      <a href="#">Andaman and Nicobar Islands</a>
                      <a href="#">Chandigarh</a>
                      <a href="#">Dadra and Nagar Haveli and Daman and Diu</a>
                      <a href="#">Govt of NCT of Delhi</a>
                      <a href="#">Jammu and Kashmir</a>
                      <a href="#">Ladakh</a>
                      <a href="#">Lakshadweep</a>
                      <a href="#">Puducherry</a>
                    </div>
                  </div>
            </td>
            <td class="b">
                <label for="Username"><h2>Username:</h2></label>
                <h2><input type="number" name="Username" placeholder="Barcode/Email/Phone no."/></h2>
            </td>
        </tr>
        <tr>
            <td class="a">
                <label for="Password"><h2>Password:</h2></label>
                <h2><input type="password" name="Password" placeholder="Enter password"/></h2>
            </td>
            <td class="b">
            
                <label for="Otp"><h2>OTP Authentication:</h2></label>
                <div className='omg'>
                <button>Send OTP</button>
                <h2><input class="m" type="number" name="Otp" placeholder="Enter OTP" /></h2>
                </div>
                
            </td>
        </tr>
        </table>
        <div class="c">
        <h3 >Don't have an account?</h3>
        <button class="btn">SIGN UP</button>
        </div>
    </div>
    </div>
      
    </div>
  );
};

export default LoginPage;