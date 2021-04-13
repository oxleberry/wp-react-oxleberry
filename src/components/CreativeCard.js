import React from "react";


const CreativeCard = (props) => (
  <div className="card-item bounce">
    <a href={props.url}>
      <div className="img-block">
        <img src={props.image.url} alt={props.image.alt}/>
      </div>
      <div className="text-block" dangerouslySetInnerHTML={{__html: props.title}} />
    </a>
  </div>
);


export default CreativeCard;
