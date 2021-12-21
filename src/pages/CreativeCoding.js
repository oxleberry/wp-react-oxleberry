import React, {Component } from 'react';
import Header from '../components/Header.js';
import CreativeCard from '../components/CreativeCard.js';
import Footer from '../components/Footer.js';

class CreativeCoding extends Component {
	constructor() {
		super();
		this.state = {
      // allPosts: [],
      pagePost: [],
      header: [],
      cards: [],
    }

		// Grabbing WP Pages API data
    this.apiUrl = 'http://oxleberry.com/wp/wp-json/wp/v2/pages/30';
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
      // posts.forEach( post => {
      //   pagePost = [post];
      //   // Find pagePost by matching all Posts slug with passed in component Props slug
      //   // if (post.slug === this.props.slug) {
      //   //   console.log(this.props.slug)
      //   //   pagePost = [post];
      //   // }
      // })
      this.setState({
        // allPosts: posts,
        pagePost: pagePost,
        header: posts.acf.header_headline,
        cards: posts.acf.cards,
      })
      // console.log("CREATIVE CODING Data:", this.state.pagePost);
      // console.log("CREATIVE CODING Data:", this.state.header);
      // console.log("CREATIVE CODING Data:", this.state.cards);
		})
	};

  render() {
    return (
      <div className="post-container">
        <Header headline={this.state.header} />
        <main className="creative-cards">
          {this.state.cards.map((card, idx) =>
            <CreativeCard key={idx}
              title={card.title}
              image={card.image}
              url={card.url}
            />
          )}
        </main>
        <hr />
        <Footer />
      </div>
    );
  }
}


export default CreativeCoding;
