import React, { Component } from "react";
import "../assets/searchbar.css";
import Select from 'react-select'

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			options: [
				{ value: "0", label: "Toutes les catégories" },
				{ value: "1", label: "Livres" },
				{ value: "2", label: "Matériel" }
			]
		};
	}

  render() {
    return (
        <nav className="search-bar-container">
            <div className="search-bar-inner">
                <div className="search-input-and-type">
                    <div className="search-input-container">
                        <input className="search-input" placeholder="Rechercher..."></input>
                    </div>
                    <div className="search-type-container">
                        <Select options={this.state.options} defaultValue={this.state.options[0]}></Select>
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
