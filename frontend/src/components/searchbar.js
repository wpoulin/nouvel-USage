import React, { Component } from "react";
import "../assets/searchbar.css";
import Select from 'react-select'
import { Link } from "react-router-dom";

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			filter: "",
			category: 0,
			options: [
				{ value: 0, label: "Toutes les catégories" },
				{ value: 1, label: "Livres" },
				{ value: 2, label: "Matériel" }
			]
		};
	}

	handleFilterChanged = e => {
		this.setState({filter: e.target.value});
	}

	handleCategoryChanged = category => {
		this.setState({category});
	}

	getCategoryValue = () => {
		if (!this.state.category.value)
			this.state.category = this.state.options[0];

		return this.state.category.value;
	}

  render() {
    return (
			<nav className="search-bar-container">
				<div className="search-bar-inner">
					<div className="search-input-and-type">
						<div className="search-input-container">
							<input className="search-input" placeholder="Rechercher..." text={this.state.filter} onChange={this.handleFilterChanged} />
						</div>
						<div className="search-type-container">
							<Select options={this.state.options} defaultValue={this.state.options[0]} value={this.state.category} onChange={this.handleCategoryChanged}/>
						</div>
					</div>
					<div className="search-button-container">
						<Link to={"/Home/" + this.getCategoryValue() + "/" + this.state.filter}>
							<button className="search-button">
								<span className="material-icons">search</span>
							</button>
						</Link>
					</div>
				</div>
			</nav>
    );
  }
}

export default SearchBar;
