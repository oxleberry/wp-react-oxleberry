// import React, {Component } from 'react';
import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';
import './styles/App.scss';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Nav from './components/Nav.js';

function App() {

// class App extends Component {
//   render() {

    return (
      <div className="app">
        <BrowserRouter>
            <div>
            <Nav />
            <header className="header">
              <h1>Hello Oxleberry</h1>
            </header>
              <Switch>
                <Route exact path="/"><Home slug="home"/></Route>
                <Route path="/home"><Home slug="home"/></Route>
                <Route path="/about"><About slug="about"/></Route>
                {/* <Route path="/contact"><Contact slug="contact" /></Route> */}
                {/* <Route path="/privacy-policy"><PrivacyPolicy /></Route> */}
              </Switch>
            </div>
            {/* <Footer /> */}
          </BrowserRouter>
      </div>
    );
  // }
}

export default App;
