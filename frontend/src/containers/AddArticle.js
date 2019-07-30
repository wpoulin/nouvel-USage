import React, { Component } from "react";
import NewArticleInfo from "../components/newArticleInfo";

class AddArticle extends Component {
	render () {
		return (
			<div className="add-sale">
				<h1>Créer une annonce</h1>
				<NewArticleInfo 
				/>
			</div>
		);
	}
}

export default AddArticle;