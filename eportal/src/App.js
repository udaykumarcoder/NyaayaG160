import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Homepage/Home';


import Signup from './pages/Signup/Signup';
import AdvocateForm from './pages/Signup/AdvocateForm';
import LitigantForm from './pages/Signup/LitigantForm';
import AdministratorForm from './pages/Signup/AdministratorForm';


import LoginPage from './pages/Login/LoginPage';
import AdvocateLogin from './pages/Login/Advocatelogin';
import LitigantLogin from './pages/Login/LitigantLogin';
import AdministratorLogin from './pages/Login/AdministratorLogin';



import Administratoraccount from './Components/Adminstratoraccount';
import AdvCaseDocinfo from './Components/AdvCaseDocinfo';
import Advocateaccount from './Components/Advocateaccount';
import CaseFiling from './Components/CaseFiling';
import CaseLegalform from './Components/CaseLegalform';

import ChangePassword1 from './Components/ChangePassword1';
import EditProfile from './Components/EditProfile';
import CaseDocinfo from './Components/Litigant/CaseDocinfo';
import Casetracking from './Components/Litigant/Casetracking';
import Litigantaccount from './Components/Litigant/Litigantaccount';
import RequestForm from './Components/Litigant/RequestForm';
import Rating from './Components/Litigant/rating';
import PasswordReset from './Components/PasswordReset';
import PasswordReset2 from './Components/PasswordReset2';
import PasswordReset3 from './Components/PasswordReset3';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/signup" element={<Signup/>}/>
        <Route path="/signup/advocate" element={<AdvocateForm/>}/>
        <Route path="/signup/litigant" element={<LitigantForm/>}/>
        <Route path="/signup/administrator" element={<AdministratorForm/>}/>


      <Route path="/login" element={<LoginPage />} />
        <Route path='/login/advocate' element={<AdvocateLogin/>}/>
        <Route path="/login/litigant" element={<LitigantLogin/>}/>
        <Route path="/login/administrator" element={<AdministratorLogin/>}/> 



 
        <Route path="/Advocateaccount" element={<Advocateaccount/>}/>
        <Route path="/Litigantaccount" element={<Litigantaccount/>}/>
        <Route path="/Adminstratoraccount" element={<Administratoraccount/>}/>
        <Route path="/casetracking" element={<Casetracking/>}/>
        <Route path="/passwordreset" element={<PasswordReset/>}/>
        <Route path="/passwordreset2" element={<PasswordReset2/>}/>
        <Route path="/passwordreset3" element={<PasswordReset3/>}/>
        <Route path="/casefiling" element={<CaseFiling/>}/>
        <Route path ="/advocatecasedocuments" element={<AdvCaseDocinfo/>}/>
        <Route path ="/litigantcasedocuments" element={<CaseDocinfo/>}/>
        <Route path='/caselegalform' element={<CaseLegalform/>}/>
        <Route path="/requestform" element={<RequestForm/>}/>
        <Route path='/ChangePassword1' element={<ChangePassword1/>}/>
        <Route path="/edit-profile" element={<EditProfile/>}/>
        <Route path="/Rating" element={<Rating/>}/>
      </Routes>
    </Router>
  );
}

export default App;