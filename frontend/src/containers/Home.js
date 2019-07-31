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

	componentDidUpdate(prevProps) {
		if (prevProps.location.key !== this.props.location.key) {
			this.getArticlesFiltered();
		}
	}

	componentDidMount() {
		this.getArticlesFiltered();
	}

	getArticlesFiltered() {
		const { params } = this.props.match;

		let idCategory = params.idCategory;
		let filter = params.filter;

		if (!idCategory) idCategory = 0;
		if (!filter) filter = "";

		const url = 'http://localhost:8080/backend/api/article/list?idCategory=' + idCategory + '&filter=' + filter;
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

	render () {
		return (
			<div className="home">
				<div className="articleList">
					{this.state.articles.map((e,i) => (
						<Link to={"/ViewArticle/" + e.id} key={i}>
							<Article
								id={e.id}
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
}

export default Home;
