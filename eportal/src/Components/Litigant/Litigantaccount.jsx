import React from 'react';
import Navbar4 from '../Navbar4';
import Litigantsidebar from './Litigantsidebar';
import './Litigantaccount.css';
import Userinfo from './Userinfo';


const Litigantaccount = () => {
  return (
    <div>
    
      <Navbar4/>
      <div className='Laccountbox'>
      <Litigantsidebar />
      <Userinfo/>
      </div>
    </div>
  );
};

export default Litigantaccount;