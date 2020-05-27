import React, { Component } from 'react'
import logo from '../logo.jpg';
import "../App.css";

export class Home extends Component {
    render() {
        return (
            <div className="home">
             <img src={logo} className="App-logo" alt="logo" />
                <p>Iglesia de Cristo</p>
                <p> Servicio - Domingo - 1PM </p>
            </div>
        )
    }
}

export default Home
