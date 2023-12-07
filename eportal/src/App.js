
import './App.css';
import Home from './screens/Home';
import LoginPage from './screens/LoginPage';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


function App() {
  return (
    // <>
    //   <Home/>
    // </>
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
    
       
          <Route exact path='/login' element={<LoginPage/>}/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
