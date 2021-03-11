import React from "react";
import PagePosts from '../components/PagePosts.js';

const Home = (props) => (
  <main>
    <PagePosts slug={ props.slug }/>
  </main>
);


export default Home;