import React, { useState } from 'react';
import './AdministratorForm.css';


const AdministratorForm = () => {
  const [step, setStep] = useState(1);
  const [selectedState, setSelectedState] = useState('Select State/Union Territory'); 
  const handleStateChange = (state) => {
    setSelectedState(state);
  };

  const handleNext = () => {
    setStep(step + 1);
  };
  const handleBack = () => {
    setStep(step - 1);
  };


  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
          
          <div className="step">
            <div className="adminLeftbox">
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

            <div className="adminRightbox">
              <p className='bar'>PERSONAL DETAILS</p>
              <form>
                <div className="form-group row">
                  <label for="name" className="col-sm-3 col-form-label">Name:</label>
                  <div className="inputs col-sm-7">
                    <input type="name" className="form-control" id="inputPassword" placeholder="Enter Your Name" required />
                  </div>
                </div>
                

                <div className="form-group row">
                  <label htmlFor="state" className="col-sm-3 col-form-label">Select State:</label>
                  <div className="inputs col-sm-7">
                  <div className='dropdown'>
                  <button style={{  height:'60%',width:'240%',textAlign:'left',backgroundColor:'grey'}}>{selectedState }</button>
                  <div className="dropdown-content">                     
                      <button onClick={() => handleStateChange("Andhra Pradesh")}>Andhra Pradesh</button>
                      <button onClick={() => handleStateChange("Arunachal Pradesh")}>Arunachal Pradesh</button>
                      <button onClick={() => handleStateChange("Assam")}>Assam</button>
                      <button onClick={() => handleStateChange("Bihar")}>Bihar</button>
                      <button onClick={()=> handleStateChange("Chhattisgarh")}>Chhattisgarh</button>
                      <button onClick={()=> handleStateChange("Goa")}>Goa</button>
                      <button onClick={()=> handleStateChange("Gujarat")}>Gujarat</button>
                      <button onClick={()=> handleStateChange("Haryana")}>Haryana</button>
                      <button onClick={()=> handleStateChange("Himachal Pradesh")}>Himachal Pradesh</button>
                      <button onClick={()=> handleStateChange("Jharkhand")}>Jharkhand</button>
                      <button onClick={()=> handleStateChange("Karnataka")}>Karnataka</button>
                      <button onClick={()=> handleStateChange("Kerala")}>Kerala</button>
                      <button onClick={()=> handleStateChange("Madhya Pradesh")}>Madhya Pradesh</button>
                      <button onClick={()=> handleStateChange("Manipur")}>Manipur</button>
                      <button onClick={()=> handleStateChange("Meghalaya")}>Meghalaya</button>
                      <button onClick={()=> handleStateChange("Mizoram")}>Mizoram</button>
                      <button onClick={()=> handleStateChange("Nagaland")}>Nagaland</button>
                      <button onClick={()=> handleStateChange("Odisha")}>Odisha</button>
                      <button onClick={()=> handleStateChange("Punjab")}>Punjab</button>
                      <button onClick={()=> handleStateChange("Rajasthan")}>Rajasthan</button>
                      <button onClick={()=> handleStateChange("Sikkim")}>Sikkim</button>
                      <button onClick={()=> handleStateChange("Tamil Nadu")}>Tamil Nadu</button>
                      <button onClick={()=> handleStateChange("Telangana")}>Telangana</button>
                      <button onClick={()=> handleStateChange("Tripura")}>Tripura</button>
                      <button onClick={()=> handleStateChange("Uttarakhand")}>Uttarakhand</button>
                      <button onClick={()=> handleStateChange("Uttar Pradesh")}>Uttar Pradesh</button>
                      <button onClick={()=> handleStateChange("West Bengal")}>West Bengal</button>
                      <button onClick={()=> handleStateChange("Andaman&Nicobar Islands")}>Andaman&Nicobar Islands</button>
                      <button onClick={()=> handleStateChange("Chandigarh")}>Chandigarh</button>
                      <button onClick={()=> handleStateChange("Dadra and Nagar Haveli")}>Dadra and Nagar Haveli</button>
                      <button onClick={()=> handleStateChange("Govt of NCT of Delhi")}>Govt of NCT of Delhi</button>
                      <button onClick={()=> handleStateChange("Jammu and Kashmir")}>Jammu and Kashmir</button>
                      <button onClick={()=> handleStateChange("Ladakh")}>Ladakh</button>
                      <button onClick={()=> handleStateChange("Lakshadweep")}>Lakshadweep</button>
                      <button onClick={()=> handleStateChange("Puducherry")}>Puducherry</button>
                  </div>
                </div>
                </div>
                </div>
                <br/>

                <div className="form-group row">
                  <label for="name" className="col-sm-3 col-form-label">Gender:</label>
                  <div className="inputs col-sm-7">
                    <select name="" id="" style={{ height: '35px', width: '100%' }}>
                      <option value="default">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>

                  </div>
                </div>
                <br/>
                <div className="form-group row">
                  <label for="name" className="col-sm-3 col-form-label">DOB:</label>
                  
                  <input type="date"  id="dob" name="dob" className='form-control' style={{ width: '56%', marginLeft:'10px',backgroundColor:'grey' }}required/>
                  <br/>
                
                </div>
              </form>
              <div>
                <button className='saveNext' onClick={handleNext}>Save and Next</button>
              </div>
            </div>
          </div>
          </>
        );

   

      case 2:
        return (
          <>
          
          <div className="step">
            <div className="adminLeftbox">

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

            <div className="adminRightbox">
              <p className='bar'>CONTACT DETAILS</p>
              <form>
              <div className="contactContainer">
                <div className="form-group row">
                  <label for="name" className="col-sm-3 col-form-label">Phone:</label>
                  <div className="inputs col-sm-7">
                    <input type="number" className="form-control" id="inputPassword" placeholder="Enter Your Phone Number" required />
                  </div>
                </div>
                <div className="form-group row">
                  <label for="name" className="col-sm-3 col-form-label">Email ID:</label>
                  <div className="inputs col-sm-7">
                    <input type="email" className="form-control" id="inputPassword" placeholder="Enter Your Email ID" required />
                  </div>
                </div>
                </div>
              </form>
              <div className='advbuttons'>
                <button className='back' onClick={handleBack}>Back</button>
                <button className='saveNext' onClick={handleNext}>Save and Next</button>
              </div>
            </div>

          </div>
          </>
        );

      case 3:
        return (
          <>
         
          <div className="step">
            <div className="adminLeftbox">

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

            <div className="adminRightbox">
              <p className='bar'>CREATE PASSWORD <br />& OTP VERIFICATION</p>
              <form>
                <div className="form-group row">
                  <label for="name" className="col-sm-3 col-form-label">Password:</label>
                  <div className="inputs col-sm-7">
                    <input type="password" className="form-control" id="inputPassword" placeholder="Enter Your Password" required />
                  </div>
                </div>
                <div className="form-group row">
                  <label for="name" className="col-sm-3 col-form-label">Confirm Password:</label>
                  <div className="inputs col-sm-7">
                    <input type="confirmpassword" className="form-control" id="inputPassword" placeholder="Re-Enter Password" required />
                  </div>
                </div>
                <div className="form-group row">
                  <label for="name" className="col-sm-7 col-form-label">OTP Authentication:</label>
                  <div className="otpInput inputs col-sm-12">
                    <button>Send OTP</button>
                    <input type="text" className="form-control" id="inputOtp" placeholder="Enter OTP" required />
                  </div>
                </div>
              </form>
              <div className='advbuttons'>
                <button className='back' onClick={handleBack}>Back</button>
                <button>Save and Submit</button>
              </div>
            </div>

          </div>
          </>
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

export default AdministratorForm;