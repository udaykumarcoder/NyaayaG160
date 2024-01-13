import React,{useState} from 'react';
import Navbar4 from './Navbar4';
import Litigantsidebar from './Litigantsidebar';
import Litigantcontent from './Litigantcontent';
import './sidebar.css'
import './LitigantAccount.css'
const Litigantaccount = () => { const [selectedSection, setSelectedSection] = useState('');

const handleSidebarItemClick = (section) => {
  setSelectedSection(section);
};
  return (
    <div>
    
      <Navbar4 />
      <div className='Laccountbox'>

      <Litigantsidebar handleSidebarItemClick={handleSidebarItemClick} />
      <Litigantcontent selectedSection={selectedSection}/>
      </div>
    </div>
  );
};

export default Litigantaccount;