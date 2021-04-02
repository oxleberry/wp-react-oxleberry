import React from "react";
import PagePost from '../components/PagePost.js';

const Home = (props) => (
  <main>
    <PagePost slug={ props.slug }/>
  </main>
);


export default Home;