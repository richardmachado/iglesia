import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Navigation from './Components/Navigation/Navigation';
import LoggedInNavigation from "./Components/Navigation/LoggedInNavigation"
import Home from './Components/Home';
import Footer from './Components/Footer';

import Antiguo from './Components/SpanishBible/AntiguoTestamento';
import Nuevo from './Components/SpanishBible/NuevoTestamento';

import Temas from './Components/Temas';
import AddTemas from './Components/AddTemas';
import DeleteTemas from './Components/DeleteTemas';
import EditTemas from './Components/EditTemas';
import EditandoTemas from './Components/EditandoTemas';

import Login from './Components/Login';
import OldTestament from './Components/EnglishBible/OldTestament';
import NewTestament from './Components/EnglishBible/NewTestament';
import LogOut from './Components/LogOut';



export default function App() {


  if (!localStorage.getItem('token')) {
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/oldtestament" component={OldTestament} />
          <Route path="/newtestament" component={NewTestament} />
          <Route path="/antiguotestamento" component={Antiguo} />
          <Route path="/nuevotestamento" component={Nuevo} />
          <Route path="/temas" component={Temas} />
          <Route path="/addtemas" component={AddTemas} />
          <Route path="/borrartemas" component={DeleteTemas} />
          <Route path="/editartemas" component={EditTemas} />
          <Route path="/login" component={Login} />
          <Route path="/editandotemas/:id" component={EditandoTemas} />
          <Route Path="/logout" component={LogOut} />
        </Switch>
        <Footer />
      </div>
    );
  } else if (localStorage.getItem("token")) {

    return (
      <div className="App">
        <Navigation />
        <LoggedInNavigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/oldtestament" component={OldTestament} />
          <Route path="/newtestament" component={NewTestament} />
          <Route path="/antiguotestamento" component={Antiguo} />
          <Route path="/nuevotestamento" component={Nuevo} />
          <Route path="/temas" component={Temas} />
          <Route path="/addtemas" component={AddTemas} />
          <Route path="/borrartemas" component={DeleteTemas} />
          <Route path="/editartemas" component={EditTemas} />
          <Route path="/login" component={Login} />
          <Route path="/editandotemas/:id" component={EditandoTemas} />
          <Route Path="/logout" component={LogOut} />
        </Switch>
        <Footer />
      </div>
    );
  }
}



