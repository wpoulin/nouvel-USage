import React, { Component } from "react";
import PropTypes from "prop-types";
import "../assets/article.css";

class Article extends Component {
  render() {
    return (
      <div className="article">
        <h4>{this.props.title}</h4>
        <img src={this.props.src} height="300px" alt={this.props.title}/>
        <p>
          Description : {this.props.description}
          <br />
          Prix : {this.props.price}
        </p>
      </div>
    );
  }
}

Article.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string
};

export default Article;
