import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Services from './screens/Services';
import About from './screens/About';
import LoginPage from './screens/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="#services" element={<Services />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="#about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;


