import React, {Component } from 'react';
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";


const toggleMobileNav = (() => {
  const navItem = document.querySelectorAll(".mobile-nav ul");
  navItem.forEach(item => {
    item.classList.toggle('hidden');
  })
})

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
      <div>
        {/* Desktop */}
        <div className="desktop-nav-full-width-wrapper">
          <nav className="desktop-nav" aria-label="Primary Naviation" role="navigation">
            <ul className="left-nav">
              {this.state.navItems.map( (nav,idx) =>
                <li key={idx}>
                  <NavLink
                    to={`${nav.object_slug}` === `home` ? `/` : `/${nav.object_slug}/`}
                    activeClassName="active">
                    {nav.title}
                  </NavLink>
                </li>
              )}
            </ul>
            <ul className="right-nav">
              <li>
                <Link to='/'><img src="http://www.oxleberry.com/all/mon_all.gif" alt="Oxleberry Logo"></img></Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile */}
        <nav className="mobile-nav" aria-label="Mobile Naviation" role="navigation">
          <button onClick={toggleMobileNav} aria-label="Mobile Navigation Trigger">
            <img src="http://www.oxleberry.com/all/mon_all.gif" alt="Oxleberry Logo"></img>
          </button>
          <ul className="hidden">
            {this.state.navItems.map( (nav,idx) =>
              <li key={idx}>
                <NavLink
                  to={`${nav.object_slug}` === `home` ? `/` : `/${nav.object_slug}/`}
                  activeClassName="active">
                  {nav.title}
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div>
    );
  }
}


export default Navbar;
