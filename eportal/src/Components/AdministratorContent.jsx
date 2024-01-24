import React from 'react'
import Updatedetails from './Updatedetails'
import Uploaddocs from './Uploaddocs'
import UserInfo from './UserInfo'

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