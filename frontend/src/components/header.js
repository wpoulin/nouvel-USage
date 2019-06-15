import React, { Component } from "react";
import { Link } from 'react-router-dom'
import "../assets/header.css";

class Header extends Component {
  render() {
    return (
      <nav>
        <div>
          <ul>
            <li>
              <Link to="/">Nouvel USage</Link>
            </li>
            <li className="profile-menu">
              <a>
                <i className="material-icons">account_circle</i>
              </a>
            </li>
          </ul>
          <span />
        </div>
      </nav>
    );
  }
}

export default Header;
