
import './App.css';
import About from './screens/About';
import Home from './screens/Home';
import Login from './screens/login';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/login' element={<Login/>}/>


        </Routes>
      </div>
    </Router>
  );
}

export default App;
