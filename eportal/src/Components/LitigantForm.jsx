import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LitigantForm.css';
const API_BASE_URL = 'http://localhost:3001'; // Update with your server URL
const SUBMIT_FORM_URL = `${API_BASE_URL}/signup/litigant`;

const LitigantForm = () => {
  console.log('litigiantForm component rendered');
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    state: 'Select State/Union Territory',
    gender: 'default',
    dob: '',
    
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    otp: '',
  });
 const navigate=useNavigate();

  const handleNext = (event) => {
    setStep(step + 1);
    event.preventDefault();

  };
  const handleBack = () => {
    setStep(step - 1);
  };


  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      // Submit form data to the server
      const response = await fetch(SUBMIT_FORM_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(formData),
      });
      console.log(formData);
      
  
      const data = await response.json();
      console.log('Form submitted successfully:', data);

      if (data.status === 'error' && data.message) {
        
        alert(data.message);}
      
        if (data.status === 'error' ){
          alert("Enter all fields");}
      
      if (data.status === 'ok') {
        
        alert('Submitted successfully');
        navigate("/login/litigant");
        
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  const handleform = (event)=>
  {
    event.preventDefault();
    
    
  } 

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <form onSubmit={handleform}>
          <div className="phoneNote">
            <p>For Litigant: Your registration mobile number should be same as used in case, to access your case data.</p>
          </div>
          <div className="step">
            <div className="litigantLeftbox">
              <div className="tracking">
                <div className='track1'>
                  <input type="radio" id='t1' />
                </div>
                <label htmlFor="t1">Personal Details</label>
              </div>
              <div className="tracking">
                <div className='track3'>
                  <input type="radio" id='t3' />
                </div>
                <label htmlFor="t3">Contact Details</label>
              </div>
              <div className="tracking">
                <div className='track4'>
                  <input type="radio" id='t4' />
                </div>
                <label htmlFor="t4">Create Password <br /> & OTP Verification</label>
              </div>
            </div>

            <div className="litigantRightbox">
              <p className='bar'>PERSONAL DETAILS</p>
              <form>
                <div class="form-group row">
                  <label for="name" class="col-sm-3 col-form-label">Name:</label>
                  <div class="inputs col-sm-7">
                    <input type="name" class="form-control" id="inputPassword" placeholder="Enter Your Name"  value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)} required />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="state" className="col-sm-3 col-form-label">Select State:</label>
                  <div className="inputs col-sm-7" >
                  <select id="state" name="state" className="custom-select" style={{ height: '35px', width: '100%', textAlign: 'left' }}  value={formData.state} onChange={(e) => handleInputChange('state', e.target.value)}>
                      <option value="" >Select State/Union territory</option>
                      <option value="AndhraPradesh">Andhra Pradesh</option>
                      <option value="ArunachalPradesh">Arunachal Pradesh</option>
                      <option value="Assam">Assam</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Chhattisgarh">Chhattisgarh</option>
                      <option value="Goa">Goa</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Haryana">Haryana</option>
                      <option value="HimachalPradesh">Himachal Pradesh</option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Kerala">Kerala</option>
                      <option value="MadhyaPradesh">Madhya Pradesh</option>
                      <option value="Manipur">Manipur</option>
                      <option value="Meghalaya">Meghalaya</option>
                      <option value="Mizoram">Mizoram</option>
                      <option value="Nagaland">Nagaland</option>
                      <option value="Odisha">Odisha</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Sikkim">Sikkim</option>
                      <option value="TamilNadu">Tamil Nadu</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Tripura">Tripura</option>
                      <option value="Uttarakhand">Uttarakhand</option>
                      <option value="UttarPradesh">Uttar Pradesh</option>
                      <option value="WestBengal">West Bengal</option>
                      <option value="AndamanNicobarIslands">Andaman and Nicobar Islands</option>
                      <option value="Chandigarh">Chandigarh</option>
                      <option value="DadraNagarHaveliDamanDiu">Dadra and Nagar Haveli and Daman and Diu</option>
                      <option value="Delhi">Govt of NCT of Delhi</option>
                      <option value="JammuKashmir">Jammu and Kashmir</option>
                      <option value="Ladakh">Ladakh</option>
                      <option value="Lakshadweep">Lakshadweep</option>
                      <option value="Puducherry">Puducherry</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="gender" className="col-sm-3 col-form-label">Gender:</label>
                  <div className="inputs col-sm-7">
                    <select name="gender" id="gender" style={{ height: '35px', width: '100%' }}  value={formData.gender} onChange={(e) => handleInputChange('gender', e.target.value)}>
                      <option value="default">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>

                  </div>
                </div>
                <div class="form-group row">
                  <label for="name" class="col-sm-3 col-form-label">DOB:</label>
                  
                  <input type="date"  id="dob" name="dob" className='form-control' style={{ width: '56%', marginLeft:'10px',backgroundColor:'grey'}} value={formData.dob} onChange={(e) => handleInputChange('dob', e.target.value)} required/>
                  <br></br>
                  
                </div>
              </form>
              <div>
                <button  type="submit" className='saveNext' onClick={handleNext}>Save and Next</button>
              </div>
            </div>
          </div>
          </form>
        );

   

      case 2:
        return (
          <form onSubmit={handleform}>
          <div className="phoneNote">
            <p>For Litigant: Your registration mobile number should be same as used in case, to access your case data.</p>
          </div>
          <div className="step">
            <div className="litigantLeftbox">

              <div className="tracking">
                <div className='track1'>
                  <input type="radio" id='t1' checked />
                </div>
                <label htmlFor="t1">Personal Details</label>
              </div>
              <div className="tracking">
                <div className='track3'>
                  <input type="radio" id='t3' />
                </div>
                <label htmlFor="t3">Contact Details</label>
              </div>
              <div className="tracking">
                <div className='track4'>
                  <input type="radio" id='t4' />
                </div>
                <label htmlFor="t4">Create Password <br /> & OTP Verification</label>
              </div>


            </div>

            <div className="litigantRightbox">
              <p className='bar'>CONTACT DETAILS</p>
              <form>
              <div className="contactContainer">
                <div class="form-group row">
                  <label for="name" class="col-sm-3 col-form-label">Phone:</label>
                  <div class="inputs col-sm-7">
                    <input type="number" class="form-control" id="inputPassword" placeholder="Enter Your Phone Number" value={formData.phone} onChange={(e) => handleInputChange('phone', e.target.value)} required />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="name" class="col-sm-3 col-form-label">Email ID:</label>
                  <div class="inputs col-sm-7">
                    <input type="email" class="form-control" id="inputPassword" placeholder="Enter Your Email ID"   value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} required />
                  </div>
                </div>
                </div>
              </form>
              <div className='advbuttons'>
                <button className='back' onClick={handleBack}>Back</button>
                <button type="submit" className='saveNext' onClick={handleNext}>Save and Next</button>
              </div>
            </div>

          </div>
          </form>
        );

      case 3:
        return (
          <form onSubmit={handleSubmit}>
          <div className="phoneNote">
            <p>For Litigant: Your registration mobile number should be same as used in case, to access your case data.</p>
          </div>
          <div className="step">
            <div className="litigantLeftbox">

              <div className="tracking">
                <div className='track1'>
                  <input type="radio" id='t1' checked />
                </div>
                <label htmlFor="t1">Personal Details</label>
              </div>
              <div className="tracking">
                <div className='track3'>
                  <input type="radio" id='t3' checked />
                </div>
                <label htmlFor="t3">Contact Details</label>
              </div>
              <div className="tracking">
                <div className='track4'>
                  <input type="radio" id='t4' />
                </div>
                <label htmlFor="t4">Create Password <br /> & OTP Verification</label>
              </div>


            </div>

            <div className="litigantRightbox">
              <p className='bar'>CREATE PASSWORD <br />& OTP VERIFICATION</p>
              <form>
                <div class="form-group row">
                  <label for="name" class="col-sm-3 col-form-label">Password:</label>
                  <div class="inputs col-sm-7">
                    <input type="password" class="form-control" id="inputPassword" placeholder="Enter Your Password" value={formData.password}
            onChange={(e) => handleInputChange('password', e.target.value)}  required />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="name" class="col-sm-3 col-form-label">Confirm Password:</label>
                  <div class="inputs col-sm-7">
                    <input type="confirmpassword" class="form-control" id="inputPassword" placeholder="Re-Enter Password" value={formData.confirmPassword} onChange={(e) => handleInputChange('confirmPassword', e.target.value)}  required />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="name" class="col-sm-7 col-form-label">OTP Authentication:</label>
                  <div class="otpInput inputs col-sm-12">
                    <button>Send OTP</button>
                    <input type="text" class="form-control" id="inputOtp" placeholder="Enter OTP" value={formData.otp} onChange={(e) => handleInputChange('otp', e.target.value)} required />
                  </div>
                </div>
              </form>
              <div className='advbuttons'>
                <button className='back' onClick={handleBack}>Back</button>
                <button type="submit" className='saveNext' >Save and Submit</button>
               
              </div>
            </div>

          </div>
          </form>
        );



      default:
        return null;
    }
  };

  return (
    <div>
      {renderStep()}
    </div>
  );
}

export default LitigantForm;