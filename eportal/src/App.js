import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import About from './screens/About';
import LoginPage from './screens/LoginPage';
import Contact from './screens/Contact';
import Signup from './screens/Signup';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="#contacts" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="#about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;


