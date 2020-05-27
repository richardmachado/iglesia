import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';


import Navigation from './Components/Navigation';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Bible from './Components/Verse';



function App() {
  return (
    <div className="App">
      <Navigation />
      
      <Switch>
        <Route exact path ="/" component={Home} />
        <Route path = "/biblia" component={Bible} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
