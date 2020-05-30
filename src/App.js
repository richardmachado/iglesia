import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';


import Navigation from './Components/Navigation';
import Home from './Components/Home';
import Footer from './Components/Footer';


import Antiguo from './Components/AntiguoTestamento';
import Nuevo from './Components/NuevoTestamento';
import Chapters from './Components/Chapters';
import Verse from './Components/AntiguoTestamento';
import Sections from './Components/Sections';
import Temas from './Components/Temas';
import AddTemas from './Components/AddTemas';
import Login from './Components/Login';
import OldTestament from './Components/OldTestament';
import NewTestament from './Components/NewTestament';



function App() {
  
  return (
    <div className="App">
      <Navigation />
      
      <Switch>
        <Route exact path ="/" component={Home} />
        <Route path="/oldtestament" component={OldTestament} />
        <Route path="/newtestament" component={NewTestament} />

        <Route path="/chapters" component={Chapters} />
        <Route path="/antiguo" component={Antiguo} />
        <Route path ="/nuevo" component={Nuevo} />
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
