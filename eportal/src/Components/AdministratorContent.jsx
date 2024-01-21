import React from 'react'
import UserInfo from './UserInfo'
import Uploaddocs from './Uploaddocs'
import Updatedetails from './Updatedetails'

const AdministratorContent = ({ selectedSection }) => {
  return (
    <div>
            {selectedSection === 'User Info' && <UserInfo/>}
      {selectedSection === 'Upload Documents' && <Uploaddocs/>}
      {selectedSection === 'Update Case Details' && <Updatedetails/>}
    </div>
  )
}

export default AdministratorContent