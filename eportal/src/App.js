import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AdministratorForm from './Components/AdministratorForm';
import AdministratorLogin from './Components/AdministratorLogin';
import Administratoraccount from './Components/Adminstratoraccount';
import AdvCaseDocinfo from './Components/AdvCaseDocinfo';
import AdvocateForm from './Components/AdvocateForm';
import Advocateaccount from './Components/Advocateaccount';
import AdvocateLogin from './Components/Advocatelogin';
import CaseFiling from './Components/CaseFiling';
import CaseLegalform from './Components/CaseLegalform';
import ChangePassword1 from './Components/ChangePassword1';
import EditProfile from './Components/EditProfile';
import CaseDocinfo from './Components/Litigant/CaseDocinfo';
import Casetracking from './Components/Litigant/Casetracking';
import Litigantaccount from './Components/Litigant/Litigantaccount';
import RequestForm from './Components/Litigant/RequestForm';
import Rating from './Components/Litigant/rating';
import LitigantForm from './Components/LitigantForm';
import LitigantLogin from './Components/LitigantLogin';
import LoginPage from './Components/LoginPage';
import PasswordReset from './Components/PasswordReset';
import PasswordReset2 from './Components/PasswordReset2';
import PasswordReset3 from './Components/PasswordReset3';
import About from './screens/About';
import Contact from './screens/Contact';
import Home from './screens/Home';
import Signup from './screens/Signup';
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path='#contacts' element={<Contact/>}/>  
        <Route path="/login" element={<LoginPage />} />
        <Route path="#about" element={<About />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signup/advocate" element={<AdvocateForm/>}/>
        <Route path="/signup/litigant" element={<LitigantForm/>}/>
        <Route path="/signup/administrator" element={<AdministratorForm/>}/>
        <Route path="/login/advocate" element={<AdvocateLogin/>}/>
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