import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import LoginPage from './LoginPage';

const Ap = () => {
  return (
    <Router>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={LoginPage} />
    </Router>
  );
};
export default Ap;