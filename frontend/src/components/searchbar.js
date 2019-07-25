import React, { Component } from "react";
import "../assets/searchbar.css";

class SearchBar extends Component {
  render() {
    return (
        <nav className="search-bar-container">
            <div className="search-bar-inner">
                <div className="search-input-and-type">
                    <div className="search-input-container">
                        <input className="search-input" placeholder="Rechercher..."></input>
                    </div>
                    <div className="search-type-container">
                        <select className="search-type" defaultValue="0">
                            <option value="0">Toutes les catégories</option>
                            <option value="1">Livres</option>
                            <option value="2">Matériel</option>
                        </select>
                    </div>
                </div>
                <div className="search-button-container">
                    <button className="search-button">
                        <span className="material-icons">search</span>
                    </button>
                </div>
            </div>
        </nav>
    );
  }
}

export default SearchBar;
