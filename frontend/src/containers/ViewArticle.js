import React, { Component } from "react";
import ArticleDetailled from "../components/articleDetailled";
import axios from 'axios';

class ViewArticle extends Component {

  constructor(props) {
    super (props);

    this.state = {
      loading: true
    };
  }

	componentDidMount() {
    const { params } = this.props.match;
    // Use params.id to get articleId 

		const url = 'http://localhost:8080/backend/api/article?id=' + params.id;
		axios.get(url).then(response => response.data)
		.then((data) => {
			let article = data;
	
			if (article) {
				console.log(article);
				this.setState({ 
					title: article.title,
					description: article.description,
					location: article.location,
					imageSrc: article.imageSrc,
					price: article.price,
					nego: article.nego,
					wear: article.wear,
					cip: article.userCIP,
					date: article.creationDate,
					loading: false
				});
			}

			const userInfoUrl = 'http://localhost:8080/backend/api/user?cip=' + article.userCIP;
			axios.get(userInfoUrl).then(response => response.data)
			.then((data) => {
				let userInfo = data;
		
				if (userInfo) {
					console.log(userInfo);
					this.setState({ 
						firstName: userInfo.firstName,
						lastName: userInfo.lastName,
						username: userInfo.username,
						email: userInfo.email,
						phone: userInfo.phone
					});
				}
			})
			.catch(function(error) {
				console.log(error);
			});
		})
		.catch(function(error) {
			console.log(error);
		});
	}

  render () {

    return (
      <div className="ViewArticle">
        <ArticleDetailled 
					title={this.state.title}
					description={this.state.description}
					location={this.state.location}
					price={this.state.price}
					cip={this.state.cip}
					nego={this.state.nego}
					wear={this.state.wear}
					date={this.state.date}
					tags={["Maitrise","Doctorat"]}
					imgsource={this.state.imageSrc}

					firstName={this.state.firstName}
					lastName={this.state.lastName}
					username={this.state.username}
					email={this.state.email}
					phone={this.state.phone}
        />
      </div>
    );
  }
}

export default ViewArticle;