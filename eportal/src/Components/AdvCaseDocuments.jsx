import React, { useState } from 'react';
import AdvCaseDocinfo from './AdvCaseDocinfo';

const AdvCaseDocuments = () => {
    const [showOtherComponent, setShowOtherComponent] = useState(false);
  // const [cnrNumber, setCnrNumber] = useState('');
  // const [uniqueCode, setUniqueCode] = useState('');
    const handleOpenButtonClick = () => {
        setShowOtherComponent(true);
      };
    
      if (showOtherComponent) {
        return <AdvCaseDocinfo/>;
      }
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
      </div>
    </>
  )
}

export default AdvCaseDocuments