import React, { Component } from "react";
import "../assets/header.css";

class Header extends Component {
  render() {
    return (
      <nav>
        <div>
          <ul>
            <li>
              <a href="#home">nouvel USage</a>
            </li>
            <li>
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
