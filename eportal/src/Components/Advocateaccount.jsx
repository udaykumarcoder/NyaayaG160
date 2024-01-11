import React from 'react';
import { Link } from 'react-router-dom';

const Advocateaccount = () => {
  return (
    <div>
      <h1>Welcome Advocate 👨🏻‍⚖️</h1>
      <Link  to="/login">
        <button className="backbtn">
          <h6> Back</h6>{' '}
        </button>
      </Link>
    </div>
  );
};

export default Advocateaccount;