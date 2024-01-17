import React from 'react';
import CSTcomponent from './CSTcomponent';
import './Casetracking.css';

const Casetracking = () => {
  return (
    <>
      <div className="caseTracking">
          <div className="caseBox">
                <div className="ctHeadline">
            <p>🛤️CASE TRACKING</p>
            <div className="caseStatus">
              <CSTcomponent/>
               

            </div>
          </div>
          </div>
       

      </div>
    </>
  )
}

export default Casetracking
