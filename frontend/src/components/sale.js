import React, { Component } from "react";
import PropTypes from "prop-types";
import "../assets/sale.css";

class Sale extends Component {
  render() {
    return (
      <div className="sale-component">
        <div className="sale-left-section">
          <span className="sale-title">{this.props.title}</span>
          <span className="sale-location">{this.props.location}</span>
          <div className="sale-images">
            <img src={this.props.imgsources[0]} className="sale-main-image" />
            <div className="sale-other-images">
              <img src={this.props.imgsources[1]} />
              <img src={this.props.imgsources[2]} />
              <img src={this.props.imgsources[3]} />
            </div>
          </div>
          <div className="sale-description">{this.props.description}</div>
        </div>
        <div className="sale-right-section">
          <span className="sale-price">{this.props.price}$</span>
          <span className="sale-nego">{this.props.nego ? "nego." : "fixe"}</span>
          <br />
          <span className="sale-wearandtear">Condition: {this.props.wear}/10</span>
          <br />
          <span className="sale-announcer-label">Annonceur</span>
          <span className="sale-announcer">{this.props.announcer}</span>
          <button className="sale-contact-button">Contacter</button>
          <br />
          <br />
          <span className="sale-date-label">Date de parution</span>
          <span className="sale-date">{this.props.date}</span>
          <br />
          <div className="sale-tags-section">{this.props.tags.map((item, key) => <span className="sale-tag">{item}</span>)}</div>
        </div>
      </div>
    );
  }
}

Sale.propTypes = {
  title : PropTypes.string.isRequired,
  description : PropTypes.element,
  location : PropTypes.string,
  price : PropTypes.number,
  announcer : PropTypes.string,
  nego : PropTypes.bool,
  wear : PropTypes.number,
  date : PropTypes.string,
  tags : PropTypes.arrayOf(PropTypes.string),
  imgsources : PropTypes.arrayOf(PropTypes.string)
};

export default Sale;
