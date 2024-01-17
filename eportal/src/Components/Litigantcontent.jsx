import React from 'react'
import UserInfo from './UserInfo'

import CaseDocument from './CaseDocument'
const Litigantcontent = ({ selectedSection }) => {
  return (
    <div>
    {selectedSection === 'User Info' && <UserInfo/>}
      {selectedSection === 'Case Documents' && <CaseDocument/>}
    </div>
  )
}

export default Litigantcontent



