import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';


import Navigation from './Components/Navigation';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Bible from './Components/Bible';
import Chapters from './Components/Chapters';
import Verse from './Components/Verse';
import Sections from './Components/Sections';
import Temas from './Components/Temas';
import AddTemas from './Components/AddTemas';
import Login from './Components/Login';



function App() {
  
  return (
    <div className="App">
      <Navigation />
      
      <Switch>
        <Route exact path ="/" component={Home} />
        <Route exact path="/bible" component={Bible} />
        <Route path="/verses" component={Verse} />
    
        <Route path="/sections" component={Sections} />
        <Route path="/temas" component={Temas} />
        <Route path="/addtemas" component={AddTemas} />
        <Route path="/login" component={Login} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
