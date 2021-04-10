import React, {Component } from 'react';
import Header from '../components/Header.js';
import CreativeCard from '../components/CreativeCard.js';

class CreativeCoding extends Component {
	constructor() {
		super();
		this.state = {
      allPosts: [],
      pagePost: []
    }

		// Grabbing WP Pages API data
    this.apiUrl = 'http://oxleberry.com/wp/wp-json/wp/v2/pages';
		this.apiArgs = {
			method: 'GET',
			mode: 'cors',
			cache: 'default',
			header: new Headers({
				'Content-Type': 'application/json'
			})
		};
		this.apiRequest = new Request( this.apiUrl, this.apiArgs );
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
		allPosts.then( ( posts ) => {

      let pagePost;
      posts.forEach( post => {
        // Find pagePost by matching all Posts slug with passed in component Props slug
        if (post.slug === this.props.slug) {
          console.log(this.props.slug)
          pagePost = [post];
        }
      })
      this.setState({
        allPosts: posts,
        pagePost: pagePost,
      })
      // console.log( "ALL pages Data:", this.state.allPosts );
      console.log( "THIS pages Data:", this.state.pagePost[0] );
		})
	};

  render() {
    return (
      // <div className="post-container creative-cards">
      <div className="post-container">
        {/* Displaying only posts for associated with a page */}
        {this.state.pagePost.map( post =>
          <div className="post" key={ post.id }>
            <Header headline={post.acf.headline} />
            {/* <h3 className="post-desc">{props.desc}</h3>
              {renderImg} */}
            {/* <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content.rendered }} /> */}

            {/* Repeater: Image, Title, Link */}
            <CreativeCard />
          </div>
          )}
      </div>
    );
  }
}


export default CreativeCoding;
