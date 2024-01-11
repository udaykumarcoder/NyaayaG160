import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AdministratorForm from './Components/AdministratorForm';
import AdministratorLogin from './Components/AdministratorLogin';
import AdvocateForm from './Components/AdvocateForm';
import AdvocateLogin from './Components/Advocatelogin';
import LitigantForm from './Components/LitigantForm';
import LitigantLogin from './Components/LitigantLogin';
import Loginsuccesss from './Components/Loginsuccesss';
import About from './screens/About';
import Contact from './screens/Contact';
import Home from './screens/Home';
import LoginPage from './Components/LoginPage';
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
        <Route path="/loginsuccess" element={<Loginsuccesss/>}/>
        
       
      </Routes>
    </Router>
  );
}

export default App;