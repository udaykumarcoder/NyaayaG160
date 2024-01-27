// import React from 'react'
// import Navbar3 from './Navbar3'

// const LoginPage = () => {
//   return (
//     <div>
//       <Navbar3/>
//     </div>
//   )
// }

// export default LoginPage


import React from 'react';
// import { Link } from 'react-router-dom';
import Usernav from './Usernav';




const LoginPage = () => {
  

  return (
   <>
   <Usernav
        advocatePath="/login/advocate"
        litigantPath="/login/litigant"
        adminPath="/login/administrator"
        buttonLabel="LOGIN"
      />   
   </>
  )
};

export default LoginPage