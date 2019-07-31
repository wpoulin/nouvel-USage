import React, { Component } from "react";
import PropTypes from "prop-types";
import "../assets/article.css";

class Article extends Component {
  render() {
    return (
      <div className="article">
        <span className="article-title">{this.props.title}</span>
        <span className="article-price">{this.props.price} $</span>
        <img className="article-img" src={this.props.src} alt={this.props.title}/>
        <span className="article-description">{this.props.description}</span>
        <span className="article-wear">{this.props.wear}/10</span>
      </div>
    );
  }
}

Article.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  wear: PropTypes.number
};

export default Article;
