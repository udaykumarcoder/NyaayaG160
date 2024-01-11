import React from 'react';
import { Link } from 'react-router-dom';

const Loginsuccesss = () => {
  return (
    <div>
      <h1>Login successfull!</h1>
      <Link  to="/login">
        <button className="backbtn">
          <h6> Back</h6>{' '}
        </button>
      </Link>
    </div>
  );
};

export default Loginsuccesss;