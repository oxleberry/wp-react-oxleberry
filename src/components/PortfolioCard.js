import React from "react";


const PortfolioCard = (props) => (
  <section className="project-item" style={props.borderColor}>
    <div className="two-col-container">
      <div className="column-left">
        <a href="http://www.eastbay-takeout.com/">
          <h2 className="title" style={props.textColor}>East Bay Takeout</h2>
          <img src="http://www.oxleberry.com/portfolio/images/eb-takeout.png" alt="east bay takeout map" />
        </a>
      </div>
      <div className="column-right">
        <a href="https://github.com/mayormcmatt/eastbay-covid-takeout">
          <button style={props.textColor}>Github Code</button>
        </a>
        <div className="tech-block">
          <h3> TECHNOLOGIES USED:</h3>
          <ul>
            <li style={props.textColor}>React</li>
            <li style={props.textColor}>Redux</li>
            <li style={props.textColor}>Mapbox GL</li>
          </ul>
        </div>
        <p className="desc">East Bay Takeout is a site that maps restaurants open for business during the start of the 2020 COVID-19 shelter-in-place mandate. Search restaurant's by name or filter by cuisine type. This project was a collaboration between Matthew Lopez and Sharon Paz.</p>
      </div>
    </div>
    <hr />
  </section>
);


export default PortfolioCard;
