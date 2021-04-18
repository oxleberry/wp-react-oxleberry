import React from "react";


const PortfolioCard = ({
  title, desc, image, projLink, codeLink, techList, borderColor, textColor
}) => (
  <section className="project-item" style={borderColor}>
    <div className="two-col-container">
      <div className="column-left">
        <a href={projLink}>
          <h2 className="title" style={textColor}>{title}</h2>
          <img src={image.url} alt={image.alt} />
        </a>
      </div>
      <div className="column-right">
        <a href={codeLink}>
          <button style={textColor}>Github Code</button>
        </a>
        <div className="tech-block">
          <h3> TECHNOLOGIES USED:</h3>
          <ul>
            {techList.map((item, idx) =>
              <li key={idx} style={textColor}>{item.tech_name}</li>
            )}
          </ul>
        </div>
        <p className="desc">{desc}</p>
      </div>
    </div>
    <hr />
  </section>
);


export default PortfolioCard;
