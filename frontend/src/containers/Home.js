import React, { Component } from "react";
import "../assets/home.css";
import ArticleList from "../components/articleList";

class Home extends Component {
	render () {
		return (
			<div className="home">
				<aside className="filter-section">Filtres</aside>
				<article className="home-articles-section">
					<ArticleList 
						filter={""}
					/>
				</article>
			</div>
		); 
	}
}

export default Home;
