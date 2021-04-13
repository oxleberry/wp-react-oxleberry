import React from "react";

const Header = (props) => (
  <header className="header">
    <h1 className="post-title" dangerouslySetInnerHTML={{__html: props.headline}} />
  </header>
);


export default Header;
