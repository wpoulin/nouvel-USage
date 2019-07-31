import React, { Component } from "react";
import PropTypes from "prop-types";
import "../assets/sale.css";
import { Button, Popup } from 'semantic-ui-react';
import axios from 'axios'
import { injectMessageManager } from 'react-message-manager';

class ArticleDetailled extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete (e) {
    e.preventDefault();
    const url = 'http://localhost:8080/backend/api/article';
    axios.delete(url + '?id=' + this.props.id).then(response => response.data)
		.then(() => {
      this.showSuccess("Votre annonce à été supprimée")
    });
  }
  showSuccess = (message) => {
    const { messageManager } = this.props;
    messageManager.showSuccessMessage('Succès: ' + message, {
      displayTime: 5000, //defaults to 2000
    });
  };
  render() {
    return (
      <div className="sale-component">
        <article className="sale-left-section">
          <span className="sale-title">{this.props.title}</span>
          <span className="sale-location">{this.props.location}</span>
          <div className="sale-images">
            <img src={this.props.imgsource} className="sale-main-image" alt={this.props.imgsource} />
          </div>
          <h4>Description</h4>
          <div className="sale-description">{this.props.description}</div>
        </article>
        <div className="sale-mid-section"></div>
        <aside className="sale-right-section">
          { 
            this.props.cip === localStorage.getItem('cip') 
            ? <button onClick={this.handleDelete} className="sale-contact-button">Supprimer l'annonce</button>
            : <div/>
          }
          <span className="sale-price">{this.props.price} $</span>
          <span className="sale-nego">{this.props.nego ? "négociable" : "fixe"}</span>
          <br />
          <span className="sale-wearandtear">Condition: {this.props.wear}/10</span>
          <br />
          <div className="sale-tags-section">{this.props.tags.map((e, i) => <span className="sale-tag" key={i}>{e}</span>)}</div>
          <br />
          <span className="sale-announcer">{this.props.username}</span>
          <Popup 
            header={this.props.firstName + ' ' + this.props.lastName}
            content={this.props.cip + '\n' + this.props.email + '\n' + this.props.phone}
            on='click'
            pinned
            position='bottom center'
            trigger={<Button className="sale-contact-button" onClick={this.handleClick}>Contacter</Button>}
          />
        </aside>
      </div>
    );
  }
}

ArticleDetailled.propTypes = {
  id: PropTypes.number,
  title : PropTypes.string,
  description : PropTypes.string,
  location : PropTypes.string,
  price : PropTypes.number,
  cip : PropTypes.string,
  nego : PropTypes.bool,
  wear : PropTypes.number,
  date : PropTypes.string,
  tags : PropTypes.arrayOf(PropTypes.string),
  imgsource : PropTypes.string,

  firstName: PropTypes.string,
  lastName: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string
};

export default  injectMessageManager(ArticleDetailled);
