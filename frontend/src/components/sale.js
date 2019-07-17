import React, { Component } from "react";
import PropTypes from "prop-types";
import "../assets/sale.css";
import axios from 'axios';

class Sale extends Component {

  componentDidMount() {
    // eslint-disable-next-line no-console
    axios.get(`localhost:8080/backend/api/sale/1`)
      .then(res => {
        // eslint-disable-next-line no-console
        console.log("test")
        console.log(res.data)
        //const persons = res.data;
        //this.setState({ persons });
      })
  }

  render() {
    return (
      <div className="sale-component">
        <article className="sale-left-section">
          <span className="sale-title">{this.props.title}</span>
          <span className="sale-location">{this.props.location}</span>
          <div className="sale-images">
            <img src={this.props.imgsources[0]} className="sale-main-image" alt={this.props.imgsources[0]} />
            <div className="sale-other-images">
              <img src={this.props.imgsources[1]} alt={this.props.imgsources[1]} />
              <img src={this.props.imgsources[2]} alt={this.props.imgsources[2]} />
              <img src={this.props.imgsources[3]} alt={this.props.imgsources[3]} />
            </div>
          </div>
          <h4>Description</h4>
          <div className="sale-description">{this.props.description}</div>
        </article>
        <div className="sale-mid-section"></div>
        <aside className="sale-right-section">
          <span className="sale-price">{this.props.price} $</span>
          <span className="sale-nego">{this.props.nego ? "négociable" : "fixe"}</span>
          <br />
          <span className="sale-wearandtear">Condition: {this.props.wear}/10</span>
          <br />
          <span className="sale-announcer">{this.props.announcer}</span>
          <button className="sale-contact-button">Contacter</button>
          <br />
          <br />
          <span className="sale-date-label">Date de parution</span>
          <span className="sale-date">{this.props.date}</span>
          <br />
          <div className="sale-tags-section">{this.props.tags.map((item, key) => <span className="sale-tag">{item}</span>)}</div>
        </aside>
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
