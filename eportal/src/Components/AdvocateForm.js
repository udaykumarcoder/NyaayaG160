import React, { useState } from 'react';
import './AdvocateForm.css';
import DateInput from './Date';

const AdvocateForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    state: '',
    gender: '',
    dob: '',
    barRegistrationNumber: '',
    popstate: '',
    lang:'',

  });

 

  const handleInputChange = (field, value) => {
    // console.log(`Updating ${field} to:`, value);
  
    setFormData({
      ...formData,
      [field]: value,
    });
  
    // console.log("formData after updating:", formData);
  };
  

  const handleNext = () => {

    // Check if all required fields in step 1 are filled
    if (formData.name && formData.state && formData.gender && formData.barRegistrationNumber && formData.dob) {
      setStep(step + 1);
    } else {
      // Optionally, provide feedback to the user that all details are required.
      alert('Please fill in all details before proceeding.');
      
    
    }
    if (formData.popstate && formData.lang){
      setStep(step+1);
    }
    else{
      alert('Please fill in all details before proceeding.');

    }

  };
  const handleBack = () => {
    setStep(step - 1);
  };



  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="step">
            <div className="advocLeftbox">
              <div className="tracking">
                <div className='track1'>
                  <input type="radio" id='t1' disabled />
                </div>
                <label htmlFor="t1">Bar Registration</label>
              </div>
              <div className="tracking">
                <div className='track2'>
                  <input type="radio" id='t2' disabled />
                </div>
                <label htmlFor="t2">Place Of Practice</label>
              </div>
              <div className="tracking">
                <div className='track3'>
                  <input type="radio" id='t3' disabled />
                </div>
                <label htmlFor="t3">Contact Details</label>
              </div>
              <div className="tracking">
                <div className='track4'>
                  <input type="radio" id='t4' disabled />
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
                    <input
                      type="text"
                      className="form-control"
                      id="inputName"
                      placeholder="Enter Your Name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      name="name" // Make sure 'name' is unique
                      required
                    />

                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="state" className="col-sm-3 col-form-label">Select State:</label>
                  <div className="inputs col-sm-7">
                    <select
                      id="state"
                      name="state" // Make sure 'state' is unique
                      className="custom-select"
                      style={{ height: '35px', width: '100%', textAlign: 'left' }}
                      value={formData.state}
                      onChange={(e) => handleInputChange('state', e.target.value)}
                      required
                    >
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
                  <label htmlFor="name" className="col-sm-3 col-form-label">Gender:</label>
                  <div className="inputs col-sm-7">
                    <select
                      name="gender" // Make sure 'gender' is unique
                      style={{ height: '35px', width: '100%' }}
                      value={formData.gender}
                      onChange={(e) => handleInputChange('gender', e.target.value)}
                      required
                    >
                      <option value="default">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>

                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="name" className="col-sm-3 col-form-label">DOB:</label>
                  <div className="inputs col-sm-3 mt-1">
                    <DateInput
                      id="dob"
                      name="dob"
                      value={formData.dob}
                      onChange={(date) => handleInputChange('dob', date)}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="name" className="col-sm-9 col-form-label">Bar Registration Number:</label>
                  <div className="inputs col-sm-9 barverify">
                    <input
                      type="text"
                      className="form-control"
                      id="barRegistrationNumber"
                      placeholder="State Code/Bar Code/Bar Year"
                      value={formData.barRegistrationNumber}
                      onChange={(e) => handleInputChange('barRegistrationNumber', e.target.value)}
                      name="barRegistrationNumber" // Make sure 'barRegistrationNumber' is unique
                    />
                    <button className='verifyBtn'>VERIFY</button>
                  </div>
                </div>

              </form>
              <div>
                <button className='saveNext' onClick={handleNext}>Save & Next</button>
              </div>
            </div>


          </div>
        );

      case 2:
        return (
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
                  <input type="radio" id='t2' disabled />
                </div>
                <label htmlFor="t2">Place Of Practice</label>
              </div>
              <div className="tracking">
                <div className='track3'>
                  <input type="radio" id='t3' disabled />
                </div>
                <label htmlFor="t3">Contact Details</label>
              </div>
              <div className="tracking">
                <div className='track4'>
                  <input type="radio" id='t4' disabled />
                </div>
                <label htmlFor="t4">Create Password <br /> & OTP Verification</label>
              </div>
            </div>
            <div className="advocRightbox">
              <p className='bar'>PLACE OF PRACTICE</p>
              <form>
                <div className="form-group row">
                  <label htmlFor="name" className="col-sm-3 col-form-label">Select a Court:</label>
                  <div className="inputs col-sm-7">
                    <div className="form-check">
                      <input type="radio" id="whichcourt1" name="court" className="form-check-input court" />
                      <label htmlFor="whichcourt1" className="form-check-label ml-2 mb-2 ">District Court</label>
                    </div>
                    <div className="form-check">
                      <input type="radio" id="whichcourt2" name="court" className="form-check-input court" />
                      <label htmlFor="whichcourt2" className="form-check-label ml-2">High Court</label>
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="popstate" className="col-sm-3 col-form-label">Select State:</label>
                  <div className="inputs col-sm-7">
                    <select 
                    id="popstate"
                     name="popstate"
                     className="custom-select" 
                     style={{ height: '35px', width: '100%', textAlign: 'left' }}
                     value={formData.popstate}
                     onChange={(e)=> handleInputChange('state',e.target.value)}
                     required>
                      <option value="" >Select State</option>
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
                  <label htmlFor="lang" className="col-sm-3 col-form-label">Select District:</label>
                  <div className="inputs col-sm-7">
                    <select id="lang" 
                    name="lang" 
                    className="custom-select" 
                    style={{ height: '35px', width: '100%', textAlign: 'left' }}
                    value={formData.lang}
                    onChange={(e)=>handleInputChange('lang',e.target.value)}
                    required>
                      <option value="" >Select District</option>
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
                    {/* <div className="dropup">
                      <button className="dropbtn" id="Font">Select Language</button>
                      <div className="dropup-content">
                        <button>Assamese</button>
                        <button >Bengali</button>
                        <button >Bodo</button>
                        <button >Dogri</button>
                        <button >Gujarati</button>
                        <button >Hindi</button>
                        <button>Kannada</button>
                        <button>Kashmiri</button>
                        <button >Konkani</button>
                        <button >Maithili</button>
                        <button >Malayalam</button>
                        <button >Manipuri</button>
                        <button >Marathi</button>
                        <button >Nepali</button>
                        <button>Odhia</button>
                        <button >Punjabi</button>
                        <button >Sanskrit</button>
                        <button >Santali</button>
                        <button >Sindhi</button>
                        <button>Tamil</button>
                        <button >Telugu</button>
                        <button >Urdu</button>
                      </div>
                    </div> */}
                  </div>
                </div>
              </form>
              <div className='popbuttons advbuttons'>
                <button className='back' onClick={handleBack}>Back</button>
                <button className='saveNext' onClick={handleNext}>Save and Next</button>
              </div>
            </div>

          </div>
        );

      case 3:
        return (
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
                  <input type="radio" id='t3' disabled />
                </div>
                <label htmlFor="t3">Contact Details</label>
              </div>
              <div className="tracking">
                <div className='track4'>
                  <input type="radio" id='t4' disabled />
                </div>
                <label htmlFor="t4">Create Password <br /> & OTP Verification</label>
              </div>
            </div>

            <div className="advocRightbox">
              <p className='bar'>CONTACT DETAILS</p>
              <form>
                <div className="contactContainer">
                  <div className="form-group row">
                    <label htmlFor="name" className="col-sm-3 col-form-label">Phone:</label>
                    <div className="inputs col-sm-7">
                      <input type="number" className="form-control" id="inputPassword" placeholder="Enter Your Phone Number" required />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="name" className="col-sm-3 col-form-label">Email ID:</label>
                    <div className="inputs col-sm-7">
                      <input type="email" className="form-control" id="inputPassword" placeholder="Enter Your Email ID" required />
                    </div>
                  </div>
                </div>
              </form>
              <div className='contactButtons advbuttons'>
                <button className='back' onClick={handleBack}>Back</button>
                <button className='saveNext' onClick={handleNext}>Save and Next</button>
              </div>
            </div>

          </div>
        );

      case 4:
        return (
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
                  <input type="radio" id='t4' disabled />
                </div>
                <label htmlFor="t4">Create Password <br /> & OTP Verification</label>
              </div>


            </div>

            <div className="advocRightbox">
              <p className='bar'>CREATE PASSWORD <br />& OTP VERIFICATION</p>
              <form>
                <div className="form-group row">
                  <label htmlFor="name" className="col-sm-3 col-form-label">Password:</label>
                  <div className="inputs col-sm-7">
                    <input type="password" className="form-control" id="inputPassword" placeholder="Enter Your Password" required />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="name" className="col-sm-3 col-form-label">Confirm Password:</label>
                  <div className="inputs col-sm-7">
                    <input type="confirmpassword" className="form-control" id="inputPassword" placeholder="Re-Enter Password" required />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="name" className="col-sm-7 col-form-label">OTP Authentication:</label>
                  <div className="otpInput inputs col-sm-12">
                    <button>Send OTP</button>
                    <input type="text" className="form-control" id="inputOtp" placeholder="Enter OTP" required />
                  </div>
                </div>
              </form>
              <div className='advbuttons'>
                <button className='back' onClick={handleBack}>Back</button>
                <button className='save'>Save</button>
              </div>
            </div>

          </div>
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


