
import React, {Component } from 'react';

class PagePosts extends Component {
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
      console.log(data);
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
          // console.log(this.props.slug)
          // console.log(post.slug)
          pagePost = [post];
        }
      })
      this.setState({
        allPosts: posts,
        pagePost: pagePost,
      })
      console.log( "ALL pages Data:", this.state.allPosts );
      console.log( "THIS pages Data:", this.state.pagePost );
		})
	};

  render() {
    return (
      <div className="post-container">
        {/* Displaying ALL of the Posts across the site */}
        {/* {this.state.allPosts.map( post =>
          <PagePost key={ post.id }
            title={ post.title.rendered }
            // desc={ post.acf.description }
            // img={ post.acf.image }
            content={ post.content.rendered }
          /> )} */}

        {/* Displaying only posts for associated with a page */}
        {this.state.pagePost.map( post =>
          <PagePost key={ post.id }
            title={ post.title.rendered }
            // desc={ post.acf.description }
            // img={ post.acf.image }
            content={ post.content.rendered }
          /> )}
      </div>
    );
  }
}


// a single Post Component
function PagePost(props) {
  // checks if a Post has image data
  // const hasImage = props.img;
  // const renderImg = hasImage ? <img src={props.img.url} alt={props.img.title}/> : null;

  return (
    <div className="post">
      <h2 className="post-title" dangerouslySetInnerHTML={{ __html: props.title }} />
      {/* <h3 className="post-desc">{props.desc}</h3>
      {renderImg} */}
      <div className="post-content" dangerouslySetInnerHTML={{ __html: props.content }} />
    </div>
  )
}


export default PagePosts;
