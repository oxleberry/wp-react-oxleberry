import React from "react";
// import React, {Component } from 'react';
import { Link } from "react-router-dom";

const Nav = (props) => (
  <nav className="main-nav">
    <ul className="left-nav">
      <li>
        <Link to='home'>Oxleberry</Link>
        <Link to='about'>About</Link>
        <Link to='contact'>Contact</Link>
      </li>
    </ul>
    <ul className="right-nav">
      <li>
        <Link to='home'><img src="http://www.oxleberry.com/all/mon_all.gif" alt="Logo"></img></Link>
      </li>
    </ul>
  </nav>
);


export default Nav;