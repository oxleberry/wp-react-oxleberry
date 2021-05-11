import React, {Component } from 'react';
import Header from '../components/Header.js';
import TextList from '../components/TextList.js';
import ThreeColImages from '../components/ThreeColImages.js';
import Footer from '../components/Footer.js';

class IMessageStickers extends Component {
	constructor() {
		super();
		this.state = {
      pagePost: [],
      header: [],
      textList: [],
      threeColImages: [],
    }

		// Grabbing WP Pages API data
    this.apiUrl = 'http://oxleberry.com/wp/wp-json/wp/v2/pages/33';
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
        textList: posts.acf.text_list,
        threeColImages: posts.acf.three_col_images,
      })
      console.log("IMessage Data:", this.state.pagePost);
      // console.log("IMessage Data - TextList:", this.state.textList);
      // console.log("IMessage Data - ThreeColImages:", this.state.threeColImages);
		})
	};

  render() {
    return (
      <div className="post-container">
        <Header headline={this.state.header} />
        <main className="imessage-stickers">
          <ul>
            {this.state.textList.map((listItem, idx) =>
              <TextList key={idx} text={listItem.text}/>)}
          </ul>
          <div className="three-col-images">
            {this.state.threeColImages.map((listItem, idx) =>
              <ThreeColImages key={idx} image={listItem.image}/>)}
          </div>
        </main>
        <hr />
        <Footer />
      </div>
    );
  }
}


export default IMessageStickers;
