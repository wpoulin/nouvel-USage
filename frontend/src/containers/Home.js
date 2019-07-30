import React, { Component } from "react";
import "../assets/home.css";
import { Link } from "react-router-dom";
import Article from "../components/article";
import axios from 'axios';

class Home extends Component {
	constructor(props) {
		super(props);
		
		this.state = { 
			articles: [],
			loading: true
		};
	}

	render () {
		return (
			<div className="home">
				<div className="articleList">
					{this.state.articles.map((e,i) => (
						<Link to={"/ViewArticle/1" + e.idArticle} key={i}>
							<Article
								title={e.title}
								src={e.imageSrc}
								description={e.description}
								price={e.price}
								wear={e.wear}
							/>
						</Link>
					))}
				</div>
			</div>
		); 
	}

	componentDidMount() {
		const url = 'http://localhost:8080/backend/api/article/list';
		axios.get(url).then(response => response.data)
		.then((data) => {
			let articleList = data;
	
			if (articleList) {
				console.log(articleList);
				this.setState({ 
					articles: articleList,
					loading: false
				});
			}
		})
		.catch(function(error) {
			console.log(error);
		});
	}
}

export default Home;
