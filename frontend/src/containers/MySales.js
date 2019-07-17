import React, { Component } from "react";
import "../assets/home.css";
import ArticleList from "../components/articleList";

class MySales extends Component {
	render () {
		return (
			<div className="home">
				<ArticleList 
						filter={""}
				/>
			</div>
		); 
	}
}

export default MySales;
