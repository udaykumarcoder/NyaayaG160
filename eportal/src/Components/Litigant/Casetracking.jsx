import React from 'react'
import './Casetracking.css';
import CSTcomponent from './CSTcomponent';

const Casetracking = () => {
  return (
    <>
      <div className="caseTracking">
          <div className="caseBox">
                <div className="ctHeadline">
            <p>🛤️CASE TRACKING</p>
            <div className="caseStatus">
              <CSTcomponent/>
              <CSTcomponent/>
              <CSTcomponent/>
              <CSTcomponent/>
              <CSTcomponent/>
              <CSTcomponent/>

            </div>
          </div>
          </div>
       

      </div>
    </>
  )
}

export default Casetracking