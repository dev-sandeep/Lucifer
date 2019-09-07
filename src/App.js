
import React from 'react';
import './App.css';
import Navbar from './Components/Static/Header';

// import { Provider } from 'react-redux';
// import storeFactory from './store';

import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Help from './Components/Pages/Help';
import Home from './Components/Main/Home';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

// const store = storeFactory();

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Help" component={Help} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
