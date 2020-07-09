import React from 'react';
import Header from './components/Header'; 
import LandingPage from './pages/LandingPage'; 
import Resume from './pages/Resume';
import Engineering from './pages/Engineering';

import {
  BrowserRouter as Router, 
  Switch, 
  Route, 
} from 'react-router-dom'; 

function App() {
  return (
    <Router> 
      <Header /> 

      <Switch> 
        <Route path="/" exact>
          <LandingPage /> 
        </Route>
        <Route path="/resume">
          <Resume /> 
        </Route>
        <Route path="/engineering">
          <Engineering /> 
        </Route>
      </Switch> 
    </Router> 
    
  )
}

export default App;
