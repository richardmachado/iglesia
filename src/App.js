import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Navigation from './Components/Navigation';
import Home from './Components/Home';
import Footer from './Components/Footer';

import Antiguo from './Components/AntiguoTestamento';
import Nuevo from './Components/NuevoTestamento';

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

        <Route path="/antiguotestamento" component={Antiguo} />
        <Route path ="/nuevotestamento" component={Nuevo} />
      
        <Route path="/temas" component={Temas} />
        <Route path="/addtemas" component={AddTemas} />
        <Route path="/login" component={Login} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
