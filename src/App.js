import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Navigation from "./Components/Navigation/Navigation";
import LoggedInNavigation from "./Components/Navigation/LoggedInNavigation";
import Home from "./Components/Home";
import Footer from "./Components/Navigation/Footer";

import Spanish_Old_Testament from "./Components/SpanishBible/Spanish_Old_Testament";
import Spanish_New_Testament from "./Components/SpanishBible/Spanish_New_Testament";

import OldTestament from "./Components/EnglishBible/OldTestament";
import NewTestament from "./Components/EnglishBible/NewTestament";

import Temas from "./Components/Temas/Temas";
import AddTemas from "./Components/Temas/AddTemas";
import DeleteTemas from "./Components/Temas/DeleteTemas";
import EditTemas from "./Components/Temas/EditTemas";
import EdittingTemas from "./Components/Temas/EdittingTemas";
import DeletingTemas from "./Components/Temas/DeletingTemas";

import Login from "./Components/Login";

import PrivateRoute from "./utils/PrivateRoutes";

export default function App() {


  if (!localStorage.getItem("token")) {
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/oldtestament" component={OldTestament} />
          <Route path="/newtestament" component={NewTestament} />
          <Route path="/antiguotestamento" component={Spanish_Old_Testament} />
          <Route path="/nuevotestamento" component={Spanish_New_Testament} />
          <Route path="/temas" component={Temas} />
          <Route path="/login" component={Login} />
          {/* PrivateRoutes should not work if not logged in*/}
          <PrivateRoute path="/addtemas" component={AddTemas} />
          <PrivateRoute path="/deletetemas" component={DeleteTemas} />
          <PrivateRoute path="/edittemas" component={EditTemas} />
          <PrivateRoute path="/edittingtemas/:id" component={EdittingTemas} />
          <PrivateRoute path="/deletingtemas/:id" component={DeletingTemas} />
          {/* Reroute invalid links to home */}
          <Route path="*" component={Home} />
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
          <Route path="/oldtestament" component={OldTestament} />
          <Route path="/newtestament" component={NewTestament} />
          <Route path="/antiguotestamento" component={Spanish_Old_Testament} />
          <Route path="/nuevotestamento" component={Spanish_New_Testament} />
          <Route path="/temas" component={Temas} />
          <Route path="/login" component={Login} />
          {/* PrivateRoutes */}
          <PrivateRoute path="/addtemas" component={AddTemas} />
          <PrivateRoute path="/deletetemas" component={DeleteTemas} />
          <PrivateRoute path="/edittemas" component={EditTemas} />
          <PrivateRoute path="/edittingtemas/:id" component={EdittingTemas} />
          <PrivateRoute path="/deletingtemas/:id" component={DeletingTemas} />
          {/* Reroute invalid links to home */}
          <Route path="*" component={Home} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
