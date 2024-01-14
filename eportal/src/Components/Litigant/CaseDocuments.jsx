import React from 'react'
import './CaseDocuments.css';

const CaseDocuments = () => {
  return (
    <>
    <div className="caseDocbox">
        <h4>CASE DOCUMENTS ACCESS</h4>
        <br />
        <div className="caseDocinbox">
              <div className="cnrInput">
                <h5>CNR Number:</h5>
                <input type="text" placeholder='Enter CNR Number' />
              </div>
              <div className="uniqueCode">
                <h5>Unique Code:</h5>
                <input type="text" placeholder='Enter Unique Code' />
              </div>
        </div>
    </div>
    </>
  )
}

export default CaseDocuments