import React, { Component } from "react";
import { Link } from 'react-router-dom'
import "../assets/header.css";

class Header extends Component {
  render() {
    return (
      <header className="header-container">
          <ul>
            <li>
              <Link to="/">Nouvel USage</Link>
            </li>
            <li className="profile-menu">
              <Link to="/"><i className="material-icons">account_circle</i></Link>
            </li>
          </ul>
      </header>
    );
  }
}

export default Header;
