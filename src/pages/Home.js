import React from "react";
import Header from '../components/Header.js';
// import PagePost from '../components/PagePost.js';
import PortfolioCard from '../components/PortfolioCard.js';
import Footer from '../components/Footer.js';


const Home = (props) => (
  <div className="post-container">
  <Header headline="CODING PROJECT HIGHLIGHTS" />
  <main className="portfolio-cards">
    {/* {this.state.cards.map((card, idx) =>
      <PortfolioCard key={idx}
        title={card.title}
        image={card.image}
        url={card.url}
      />
    )} */}
    <PortfolioCard borderColor={{borderColor:'#27c375'}} textColor={{color:'#27c375'}}/>
    <PortfolioCard borderColor={{borderColor:'#30368e'}} textColor={{color:'#30368e'}}/>
    <PortfolioCard borderColor={{borderColor:'#27c375'}} textColor={{color:'#27c375'}}/>
    <PortfolioCard borderColor={{borderColor:'#30368e'}} textColor={{color:'#30368e'}}/>
  </main>
  <Footer />
</div>
);


export default Home;