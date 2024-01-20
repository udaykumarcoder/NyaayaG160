import React, { useState } from 'react';
import Navbar4 from '../Navbar4';
import CaseDocuments from './CaseDocuments';
import CaseTrackbox from './CaseTrackbox';
import './Litigantaccount.css';
import Litigantsidebar from './Litigantsidebar';
import Userinfo from './Userinfo';
import Caseappeal from './Caseappeal';
import LawyerPortfolio from './LawyerPortfolio';

const Litigantaccount = () => {
  const components = [Userinfo, CaseTrackbox,CaseDocuments,Caseappeal,LawyerPortfolio];
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