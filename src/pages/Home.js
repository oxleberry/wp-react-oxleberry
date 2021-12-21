import React, {Component } from 'react';
import Header from '../components/Header.js';
import PortfolioCard from '../components/PortfolioCard.js';
import Footer from '../components/Footer.js';

class Home extends Component {
	constructor() {
		super();
		this.state = {
      pagePost: [],
      header: [],
      cards: [],
      techList: [],
    }

		// Grabbing WP Pages API data
    this.apiUrl = 'http://oxleberry.com/wp/wp-json/wp/v2/pages/17';
		this.apiArgs = {
			method: 'GET',
			mode: 'cors',
			cache: 'default',
			header: new Headers({
				'Content-Type': 'application/json'
			})
		};
		this.apiRequest = new Request(this.apiUrl, this.apiArgs);
	}; // end of constructor

  // Fetching WP Pages API data
  async fetchData() {
		try {
      const response = await fetch(this.apiRequest);
      const data = await response.json();
      // console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
	};

  componentDidMount() {
    // Setting WP Pages API data to state
		const allPosts = this.fetchData();
		allPosts.then((posts) => {
      // console.log(posts);
      let pagePost = [posts];
      this.setState({
        pagePost: pagePost,
        header: posts.acf.header_headline,
        cards: posts.acf.cards,
      })
      // console.log("PORTFOLIO Data:", this.state.pagePost);
		})
	};

  render() {
    return (
      <div className="post-container">
        <Header headline={this.state.header} />
        <main className="portfolio-cards">
          {this.state.cards.map((card, idx) =>
            <PortfolioCard key={idx}
              title={card.title}
              desc={card.description}
              image={card.image}
              projLink={card.project_link}
              codeLink={card.github_link}
              techList={card.tech_list}
              borderColor={{borderColor:`${card.color}`}}
              textColor={{color:`${card.color}`}}
            />
          )}
        </main>
        <Footer />
      </div>
    );
  }
}


export default Home;
