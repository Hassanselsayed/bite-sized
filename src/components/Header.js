import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="headerTitle">
          <img className="icon" src={require("../assets/headerIcon.png")} alt="icon of utensils on a plate" />

          <div className="title">
              <h1>bite-sized travel</h1>
          </div>

          <nav>
            <ul></ul>
              <li><NavLink to="/" exact>Home</NavLink></li>
              <li><NavLink to="/yourTrips" exact>Your Trips</NavLink></li>
          </nav>
        </div>
        
        <div className="heroImage">
        </div>
      </header>
    );
  }
}

export default Header;
