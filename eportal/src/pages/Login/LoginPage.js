

import React from 'react';
// import { Link } from 'react-router-dom';
import Usernav from '../../Components/Usernav';




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