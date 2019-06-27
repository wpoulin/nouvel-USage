import React, { Component } from "react";
import { Link } from 'react-router-dom'
import "../assets/header.css";

class Header extends Component {
  render() {
    return (
      <header className="header-container">
        <div className="header-inner">
          <ul>
            <li>
              <Link to="/">Nouvel USage</Link>
            </li>
            <li className="profile-dropdown">
              <a className="profile-dropdown-button"><i className="material-icons">account_circle</i></a>
              <div class="profile-dropdown-content">
                <Link to="/MyProfile" className="profile-dropdown-element">Mon profil</Link>
                <Link to="/MySales" className="profile-dropdown-element">Mes annonces</Link>
              </div>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
