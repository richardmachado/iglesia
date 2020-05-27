import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Navigation from './Components/Navigation';
import Home from './Components/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
       <Navigation />
      <Switch>
        <Route exact="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
