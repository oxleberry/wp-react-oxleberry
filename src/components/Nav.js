import React, {Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
	constructor() {
		super();
		this.state = {
      navItems: []
    }

		// Grabbing WP Menu API data
		this.apiNavUrl = 'http://oxleberry.com/wp/wp-json/wp-api-menus/v2/menus/2';
		this.apiNavArgs = {
			method: 'GET',
			mode: 'cors',
			cache: 'default',
			header: new Headers({
				'Content-Type': 'application/json'
			})
		};
		this.apiNavRequest = new Request( this.apiNavUrl, this.apiNavArgs );
	}; // end of constructor

  // Fetching WP Menu API data
  async fetchNavData() {
		try {
      const response = await fetch(this.apiNavRequest);
      const data = await response.json();
      return data.items;
    } catch (error) {
      console.error(error);
    }
	};

  componentDidMount() {
    // Setting WP Menu API data to state
		const navItems = this.fetchNavData();
		navItems.then( ( navItem ) => {
			this.setState( { navItems: navItem } )
			console.log( "Nav Data:", this.state.navItems );
		})
	};

  render() {
    return (
      <nav className="main-nav">
        <ul className="left-nav">
          {/* looping through Nav Items */}
          {this.state.navItems.map( (nav,idx) =>
            <li key={idx}>
              <Link to={ `${nav.object_slug}` === `home` ? `/` : `/${nav.object_slug}/`} >{nav.title}</Link>
            </li>
          )}
        </ul>
        <ul className="right-nav">
          <li>
            <Link to='/'><img src="http://www.oxleberry.com/all/mon_all.gif" alt="Oxleberry Logo"></img></Link>
          </li>
        </ul>
      </nav>
    );
  }
}


export default Navbar;
