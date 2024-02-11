import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdvCaseDocuments = () => {
    
    const navigate = useNavigate();
    const [cnrNumber, setCnrNumber] = useState('');
    const [ error,setError] = useState('');
    const [uniqueCode, setuniqueCode] = useState('');
    const [cnr, setCnr] = useState('');

    const handleOpenButtonClick = async () => {
   
      
       
        console.log('Login values:',cnrNumber, uniqueCode);
      
        try {
          // Perform login without OTP verification
          const loginResponse = await fetch(`http://localhost:3001app.post/cnrverification`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cnrNumber, uniqueCode }),
          });
      
          const loginData = await loginResponse.json();
      
          if (loginResponse.ok) {
            console.log('Login successful:', loginData);
            navigate('/advocateaccount', { state: { cnrNumber } });
          } else {
            console.error('Login failed:', loginData);
            alert('Login failed. Please check your credentials.');
          }
        } catch (loginError) {
          console.error('Error during login:', loginError);
          alert('An error occurred during login. Please try again.');
        }
      };
      
                   
  
      
    
  return (
    <>
      <div className="caseDocbox">
        <h4>CASE DOCUMENTS ACCESS</h4>
        <br />
        <div className="caseDocinbox">
          <div className="cnrInput">
            <h5>CNR Number:</h5>
            <input
            type="text"
            placeholder="Enter CNR"
            value={cnr}
            onChange={(e) => setCnr(e.target.value)}
          />
          </div>
          <div className="uniqueCode">
            <h5>Unique Code:</h5>
            <input
              type="text"
              placeholder="Enter Unique Code"
             
            />
          </div>
          <br />
          <div className="caseDoclogin">
          <button onClick={handleOpenButtonClick}>OPEN</button>
          </div>
          
        </div>
        {error &&<center> <p style={{color:"red", marginTop:"20px"}} className="error-message">{error}</p></center>}
      </div>
    </>
  )
}

export default AdvCaseDocuments