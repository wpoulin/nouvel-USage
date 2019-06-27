import React, { Component } from "react";
import { Link } from "react-router-dom";
import Article from "../components/article";
import "../assets/home.css";

class Home extends Component {
	render () {
		return (
			<div className="home">
				<aside className="filter-section">Filtres</aside>
				<article className="home-articles-section">
					<Link to="/ViewArticle/1">
						<Article
							title={"Clean Code"}
							src={"https://images-na.ssl-images-amazon.com/images/I/5154eSTKUxL._SX382_BO1,204,203,200_.jpg"}
							description={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>}
							price={19.99}
							wear={9}
						/>
					</Link>
					<Link to="/ViewArticle/2">
						<Article
							title={"Programming Python"}
							src={"https://images-na.ssl-images-amazon.com/images/I/51ovFaPaLjL._AC_SY400_.jpg"}
							description={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>}
							price={30.00}
							wear={10}
						/>
					</Link>
					<Link to="/ViewArticle/3">
						<Article
							title={"Head First Java"}
							src={"https://www.guru99.com/images/uploads/2012/06/head-first-java-original_v1.jpg"}
							description={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>}
							price={15.00}
							wear={8}
						/>
					</Link>
				</article>
			</div>
		); 
	}
}

export default Home;
