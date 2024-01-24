import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to ="/litigantaccount">
              <button>
                Back
              </button>
            </Link>
          </div>
          </div>
      </div>
    </>
  )
}

export default Casetracking
