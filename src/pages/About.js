import React, {Component } from 'react';
import Header from '../components/Header.js';
import { AboutTile, AboutSocialTile } from "../components/AboutTiles.js";
import Footer from '../components/Footer.js';


class About extends Component {
	constructor() {
		super();
		this.state = {
      pagePost: [],
      header: [],
      tiles: [],
    }

		// Grabbing WP Pages API data
    this.apiUrl = 'http://oxleberry.com/wp/wp-json/wp/v2/pages/19';
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
        tiles: posts.acf.tiles,
      })
      // console.log("About Data:", this.state.pagePost);
      console.log("About Tiles:", this.state.tiles);
      // console.log("About Type:", this.state.tiles[0].type);
		})
	};

  render() {
    return (
      <div className="post-container">
        <Header headline={this.state.header} />
        <main className="about-tiles">
          {this.state.tiles.map((tile, idx) =>
            <AboutTile key={idx}
              type={tile.type}
              img={tile.image}
              title={tile.title}
              desc={tile.description}
              url={tile.url}
							isSprite={tile.is_sprite}
            />
          )}
          <AboutSocialTile />
        </main>
        <hr />
        <Footer />
      </div>
    );
  }
}


export default About;
