// import React from 'react'
// import Navbar2 from '../Components/Navbar2'

// const Signup = () => {
//   return (
//     <div>
//       <Navbar2/>
//     </div>
//   )
// }

// export default Signup


import React from 'react'
import Usernav from '../Components/Usernav'

const Signup = () => {
  return (
    <div>
      <Usernav
        advocatePath="/signup/advocate"
        litigantPath="/signup/litigant"
        adminPath="/signup/administrator"
        buttonLabel="SIGNUP"
      />    </div>
  )
}

export default Signup