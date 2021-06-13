import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './styles/App.scss';
import Home from './pages/Home.js';
import CreativeCoding from './pages/CreativeCoding.js';
import IMessageStickers from './pages/IMessageStickers.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Nav from './components/Nav.js';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
          <Nav />
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/2021_website" component={Home}></Route>
              <Route path="/home" component={Home}></Route>
              <Route path="/portfolio" component={Home}></Route>
              <Route path="/creative-coding" component={CreativeCoding}></Route>
              <Route path="/imessage-stickers" component={IMessageStickers}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/contact" component={Contact}></Route>
            </Switch>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
