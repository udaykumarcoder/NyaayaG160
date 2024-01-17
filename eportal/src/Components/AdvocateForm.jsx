import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AdvocateForm.css';



const API_BASE_URL = 'http://localhost:3001'; // Update with your server URL
const SUBMIT_FORM_URL = `${API_BASE_URL}/signup/advocate`;


const AdvocateForm = () => {
  
  console.log('AdvocateForm component rendered');
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    state: 'Select State/Union Territory',
    gender: 'default',
    dob: '',
    barRegistrationNumber: '',
    courtType: '',
    courtName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    otp: '',
  });

  const navigate = useNavigate();

  const handleNext = (event) => {
    event.preventDefault();
    setStep(step + 1);
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
  
    const data = await response.json();
    console.log(data.formData);
    console.log('Form submitted successfully:', data);
    
    if (data.status === 'error' && data.message) {
      
      alert(data.message);}

      if (data.status === 'error' ){
        alert("Enter all fields");}
    
      
    if (data.status === 'ok') {
      
      alert('Submitted successfully');
      navigate("/login/advocate");
      
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    
  }
};
    

  
  const handleform = (event)=>
  {
    event.preventDefault();
   
  }
 
  const verifyEntry = (event) => {

    event.preventDefault(); 
    const enteredText = formData.barRegistrationNumber.trim();

  
  const expectedValues = Array.from(['245322733162','245322733177','245322733145','245322733149','245322733087','245322758101']).map(value => value.trim());
  
  if (expectedValues.includes(enteredText)) {
    alert('Verified');
  } else {
    alert('Not Verified');
    
   

  }
  
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <form onSubmit={handleform}>

          
          <div className="step">
          
            <div className="advocLeftbox">
              <div>
            <Link to ="/signup">
                  <button className='back'>
                    🔙
                  </button>
                </Link>
                </div>
              <div className="tracking">
                <div className='track1'>
                  <input type="radio" id='t1' />
                </div>
                
                <label htmlFor="t1">Bar Registration</label>
                
              </div>
              <div className="tracking">
                <div className='track2'>
                  <input type="radio" id='t2' />
                </div>
                <label htmlFor="t2">Place Of Practice</label>
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

            <div className="advocRightbox">
            
            
              <p className='bar'>BAR REGISTRATION</p>
              
              
              <form>
              
                <div className="form-group row">
                
                 
                  <label htmlFor="name" className="col-sm-3 col-form-label">Name:</label>
                  
                  <div className="inputs col-sm-7">
                    <input type="text" className="form-control" id="inputPassword" placeholder="Enter Your Name"  value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}/>
                  </div>
                </div>

             

                <div className="form-group row">
                  <label htmlFor="state" className="col-sm-3 col-form-label">Select State:</label>
                  <div className="inputs col-sm-7">
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
                <div className="form-group row">
                <label htmlFor="dob" className="col-sm-3 col-form-label">DOB:</label>
                  <input type="date"  id="dob" name="dob" className='form-control' style={{ width: '56%', marginLeft:'10px',backgroundColor:'grey' }} value={formData.dob} onChange={(e) => handleInputChange('dob', e.target.value)}/>
                  <br></br>
                </div>

                <div className="form-group row">
                  <label htmlFor="barRegistrationNumber" className="col-sm-9 col-form-label">Bar Registration Number:</label>
                  
                  <div className="inputs col-sm-9 barverify">
                    <input type="text" className="form-control" id="barRegistrationNumber" placeholder="State Code/Bar Code/Bar Year" value={formData.barRegistrationNumber} onChange={(e) => handleInputChange('barRegistrationNumber', e.target.value)}  />
                    {/* <button className='verifyBtn'>VERIFY</button> */}
                    <button  type="button" className='verifyBtn' onClick={verifyEntry}>VERIFY</button>
                    
                  </div>
                </div>

              </form>
              <div>
                
                <button type= "submit" className='saveNext' onClick={handleNext}>Save and Next</button>
                
                
              </div>
              
            </div>
            
          
          </div>
          
          
          </form>
        );

      case 2:
        return (
        <form onSubmit={handleform}>
          <div className="step">
            <div className="advocLeftbox">

              <div className="tracking">
                <div className='track1'>
                  <input type="radio" id='t1' checked />
                </div>
                <label htmlFor="t1">Bar Registration</label>
              </div>
              <div className="tracking">
                <div className='track2'>
                  <input type="radio" id='t2' />
                </div>
                <label htmlFor="t2">Place Of Practice</label>
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
            <div className="advocRightbox">
              <p className='bar'>PLACE OF PRACTICE</p>
              <form >
          
                <div className="form-group row">
                  <label htmlFor="state" className="col-sm-3 col-form-label">Select State:</label>
                  <div className="inputs col-sm-7">
                    <select id="state" name="state" className="custom-select" style={{ height: '35px', width: '100%', textAlign: 'left' }} value={formData.state} onChange={(e) => handleInputChange('state', e.target.value)}>
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
                  <label htmlFor="courtType" className="col-sm-3 col-form-label">Select a Court:</label>
                  <div className="inputs col-sm-7">
                    <div className="form-check">
                      <input type="radio" id="whichcourt1" name="courtType" className="form-check-input court" checked={formData.courtType === 'DistrictCourt'}  onChange={() => handleInputChange('courtType', 'DistrictCourt')}/>
                      <label htmlFor="whichcourt1" className="form-check-label ml-2 mb-2 ">District Court</label>
                    </div>
                    <div className="form-check">
                      <input type="radio" id="whichcourt2" name="court" className="form-check-input court"   checked={formData.courtType === 'HighCourt'} onChange={() => handleInputChange('courtType', 'HighCourt')} />
                      <label htmlFor="whichcourt2" className="form-check-label ml-2">High Court</label>
                    </div>
                  </div>
                </div>
                
                <div className="form-group row">
                  <label htmlFor="state" className="col-sm-3 col-form-label">Enter Court Name:</label>
                  <div className="inputs col-sm-7">
                  <input type="text" className="form-control" id="inputPassword" placeholder="Court Name" value={formData.courtName}
            onChange={(e) => handleInputChange('courtName', e.target.value)}
          />
          </div>
          
                      </div>
              </form>
              <div className='popbuttons advbuttons'>
                <button className='back' onClick={handleBack}>Back</button>
                {/* <button className='saveNext' onClick={handleNext}>Save and Next</button> */}
                <button type= "submit" className='saveNext' onClick={handleNext}>Save and Next</button>
              </div>
            </div>

          </div>
          </form>
        );

      case 3:
        return (
          <form onSubmit={handleform} >
          <div className="step">
            <div className="advocLeftbox">

              <div className="tracking">
                <div className='track1'>
                  <input type="radio" id='t1' checked />
                </div>
                <label htmlFor="t1">Bar Registration</label>
              </div>
              <div className="tracking">
                <div className='track2'>
                  <input type="radio" id='t2' checked />
                </div>
                <label htmlFor="t2">Place Of Practice</label>
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

            <div className="advocRightbox">
              <p className='bar'>CONTACT DETAILS</p>
              <form>
                <div className="contactContainer">
                <div className="form-group row">
                  <label for="name" className="col-sm-3 col-form-label">Phone:</label>
                  <div className="inputs col-sm-7">
                    <input type="number" className="form-control" id="inputPassword" placeholder="Enter Your Phone Number"   value={formData.phone} onChange={(e) => handleInputChange('phone', e.target.value)} />
                  </div>
                </div>
                <div  className="form-group row">
                  <label  for="name" className="col-sm-3 col-form-label" >Email ID:</label>
                  
                  <div className="inputs col-sm-7">
                   <input type="email" className="form-control" id="inputPassword"   placeholder="Enter Your Email ID"  value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)}/>
                  </div>
                </div>
                </div>
              </form>
              <div className='contactButtons advbuttons'>
                <button className='back' onClick={handleBack}>Back</button>
                
                <button type= "submit" className='saveNext' onClick={handleNext}>Save and Next</button>
              </div>
            </div>

          </div>
          </form>
        );

      case 4:
        return (
          <form onSubmit={handleSubmit}>
          <div className="step">
            <div className="advocLeftbox">

              <div className="tracking">
                <div className='track1'>
                  <input type="radio" id='t1' checked />
                </div>
                <label htmlFor="t1">Bar Registration</label>
              </div>
              <div className="tracking">
                <div className='track2'>
                  <input type="radio" id='t2' checked />
                </div>
                <label htmlFor="t2">Place Of Practice</label>
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

            <div className="advocRightbox">
              <p className='bar'>CREATE PASSWORD <br />& OTP VERIFICATION</p>
              <form>
                <div className="form-group row">
                  <label htmlForfor="name" className="col-sm-3 col-form-label">Password:</label>
                  <div className="inputs col-sm-7">
                    <input type="password" className="form-control" id="inputPassword" placeholder="Enter Your Password"  value={formData.password}
            onChange={(e) => handleInputChange('password', e.target.value)} required />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlForfor="name" className="col-sm-3 col-form-label">Confirm Password:</label>
                  <div className="inputs col-sm-7">
                    <input type="password" className="form-control" id="inputPassword" placeholder="Re-Enter Password"  value={formData.confirmPassword} onChange={(e) => handleInputChange('confirmPassword', e.target.value)}required />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="name" className="col-sm-7 col-form-label">OTP Authentication:</label>
                  <div className="otpInput inputs col-sm-12">
                    <button>Send OTP</button>
                    <input type="text" className="form-control" id="inputOtp" placeholder="Enter OTP" value={formData.otp} onChange={(e) => handleInputChange('otp', e.target.value)} required />
                  </div>
                </div>
              </form>
              <div className='advbuttons'>
              <button className='back' onClick={handleBack}>Back</button>
               <button type="submit" className='saveNext'>Submit</button>
               
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

export default AdvocateForm;


