import React from "react";
import Header from '../components/Header.js';
import { AboutTile, AboutSocialTile } from "../components/AboutTiles.js";
import Footer from '../components/Footer.js';

const About = (props) => (
  <div className="post-container">
    <Header headline="Static About Page with Examples" />
    <main className="about-tiles">
      <AboutTile />
      <AboutSocialTile />
    </main>
    <hr />
    <Footer />
  </div>
);


export default About;
