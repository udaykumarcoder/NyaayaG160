import React ,{useState} from 'react';
import Navbar4 from './Navbar4';
import Administratorsidebar from './Administratorsidebar';
import AdministratorContent from './AdministratorContent';
import './LitigantAccount.css'
const Administratoraccount= () => {const [selectedSection, setSelectedSection] = useState('');

const handleSidebarItemClick = (section) => {
  setSelectedSection(section);
};
  return (
    <div>
   <Navbar4 />
      <div className='Laccountbox'>

      <Administratorsidebar handleSidebarItemClick={handleSidebarItemClick} />
      <AdministratorContent selectedSection={selectedSection}/>
      </div>
    </div>
  );
};

export default Administratoraccount;