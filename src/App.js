// import React, {Component } from 'react';
import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import './App.css';
import './styles/App.scss';
import Home from './pages/Home.js';
import Portfolio from './pages/Portfolio.js';
import CreativeCoding from './pages/CreativeCoding.js';
import IMessageStickers from './pages/IMessageStickers.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Nav from './components/Nav.js';

function App() {

// class App extends Component {
//   render() {

    return (
      <div className="app">
        <BrowserRouter>
            <Nav />
            <div className="content">
            <header className="header">
              <h1>Hello Oxleberry</h1>
            </header>
              <Switch>
                <Route exact path="/"><Home slug="home"/></Route>
                <Route path="/home"><Home slug="home"/></Route>
                <Route path="/portfolio"><Portfolio slug="portfolio"/></Route>
                <Route path="/creative-coding"><CreativeCoding slug="creative-coding"/></Route>
                <Route path="/imessage-stickers"><IMessageStickers slug="imessage-stickers"/></Route>
                <Route path="/about"><About slug="about"/></Route>
                <Route path="/contact"><Contact slug="contact" /></Route>
              </Switch>
            </div>
            {/* <Footer /> */}
          </BrowserRouter>
      </div>
    );
  // }
}

export default App;
