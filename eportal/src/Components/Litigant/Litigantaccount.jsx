
import React, { useState } from 'react';
import Navbar4 from '../Navbar4';
import Litigantsidebar from './Litigantsidebar';
import './Litigantaccount.css';
import Userinfo from './Userinfo';
import Casetracking from './Casetracking';
import CaseDocuments from './CaseDocuments';

const Litigantaccount = () => {
  const components = [Userinfo, Casetracking,CaseDocuments];
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);

  const switchComponent = (index) => {
    setCurrentComponentIndex(index);
  };

  const CurrentComponent = components[currentComponentIndex];

  return (
    <div>
      <Navbar4 />
      <div className='Laccountbox'>
        <Litigantsidebar switchComponent={switchComponent} />
        <CurrentComponent />
      </div>
    </div>
  );
};

export default Litigantaccount;

