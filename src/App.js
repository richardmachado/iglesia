import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';


import Navigation from './Components/Navigation';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Biblia from './Components/Biblia';
// import Chapters from './Components/Chapters';
import Verse from './Components/Verse';
import Sections from './Components/Sections';



function App() {
  
  return (
    <div className="App">
      <Navigation />
      
      <Switch>
        <Route exact path ="/" component={Home} />
        <Route exact path="/biblia" component={Biblia} />
        <Route path="/verses" component={Verse} />
        {/* <Route path="/:id" component={Chapters} /> */}
        <Route path="/sections" component={Sections} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
