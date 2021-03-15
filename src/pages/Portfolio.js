import React from "react";
import PagePosts from '../components/PagePosts.js';

const Portfolio = (props) => (
  <main>
    <PagePosts slug={ props.slug }/>
  </main>
);


export default Portfolio;