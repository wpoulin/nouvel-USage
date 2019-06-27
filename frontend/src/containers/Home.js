import React, { Component } from "react";
import { Link } from "react-router-dom";
import Article from "../components/article";
import "../assets/home.css";

class Home extends Component {
	render () {
		return (
			<div className="home">
				<div className="row">
					<div className="column">
						<Link to="/ViewArticle/1">
							<Article
								title={"Clean Code"}
								src={"https://images-na.ssl-images-amazon.com/images/I/5154eSTKUxL._SX382_BO1,204,203,200_.jpg"}
								description={"Livre de scrap"}
								price={"10$"}
							/>
						</Link>
					</div>
					<div className="column">
						<Link to="/ViewArticle/2">
							<Article
								title={"Programming Python"}
								src={"https://images-na.ssl-images-amazon.com/images/I/51ovFaPaLjL._AC_SY400_.jpg"}
								description={"Livre pour apprendre le python"}
								price={"20$"}
							/>
						</Link>
					</div>
					<div className="column">
						<Link to="/ViewArticle/3">
							<Article
								title={"Head First Java"}
								src={"https://www.guru99.com/images/uploads/2012/06/head-first-java-original_v1.jpg"}
								description={"Livre pour apprendre le Java"}
								price={"30$"}
							/>
						</Link>
					</div>
				</div>
			</div>
		); 
	}
}

export default Home;
