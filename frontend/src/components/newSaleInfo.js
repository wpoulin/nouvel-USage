import React, { Component } from "react";
import PropTypes from "prop-types";
import "../assets/newSaleInfo.css";

class NewSaleInfo extends Component {
  render() {
    return (
        <div className="newSale-component">
            <article>
                <form>
                  <label className="newSale-label">Nom</label>
                  <input className="newSale-input" placeholder={this.props.Name}></input>
                  <label className="newSale-label">Description</label>
                  <input className="newSale-input" placeholder={this.props.Description}></input>
                  <label className="newSale-label">Prix</label>
                  <input className="newSale-input" placeholder={this.props.Price}></input>
                  <label className="newSale-label">Condition</label>
                  <input className="newSale-input" placeholder={this.props.Condition}></input>
                  <label className="newSale-label">Parution</label>
                  <input className="newSale-input" placeholder={this.props.Parution}></input>
                  <label className="newSale-label">Tag</label>
                  <input className="newSale-input" placeholder={this.props.Tag}></input>
                  <label className="newSale-label">Image</label>
                  <input className="newSale-input" placeholder={this.props.Image}></input>
                  <button className="newSale-apply-button">Créer</button>
                </form>
            </article>
        </div>
    );
  }
}

NewSaleInfo.propTypes = {
    Name: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Price: PropTypes.string.isRequired,
    Condition: PropTypes.string.isRequired,
    Parution: PropTypes.string,
    Tag: PropTypes.string,
    Image: PropTypes.string
  };

export default NewSaleInfo;
