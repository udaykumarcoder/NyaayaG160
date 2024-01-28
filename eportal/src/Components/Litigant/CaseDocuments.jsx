import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

import './CaseDocuments.css';

const CaseDocuments = () => {
  const navigate = useNavigate();
  const [cnr, setCnr] = useState('');
  const [ error,setError] = useState('');

  const handleOpenButtonClick = async() => {
    console.log('cnr number:', cnr);
    try {
      const response = await fetch('http://localhost:3001/validate-cnr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cnr }),
      });

      const data = await response.json();

      if (response.ok) {
        
        console.log('success:', data);
        navigate('/litigantcasedocuments', { state: { cnr} });
        
      } else {
                  setError('User not found. Please try again.');
                }
              } catch (error) {
                console.error('Error checking CNR:', error);
                setError('Error checking CNR. Please try again later.');
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
              placeholder="Enter CNR Number"
             
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
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
    </>
  );
};

export default CaseDocuments;
