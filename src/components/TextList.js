import React from "react";

const TextList = (props) => (
  <li className="text-list" dangerouslySetInnerHTML={{__html: props.text}}></li>
);

export default TextList;
