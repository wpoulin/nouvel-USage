import React, { Component } from "react";
import PropTypes from "prop-types";
import "../assets/sale.css";
import { Button, Popup } from 'semantic-ui-react';
import axios from 'axios'
import { injectMessageManager } from 'react-message-manager';
import Select from 'react-select'
import FileBase64 from 'react-file-base64';

class ArticleDetailled extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageIsThere: false,
      updatedWithoutError: false,
      title: "",
      description: "",
      imageSrc: "",
      price: "",
      nego: false,
      negoOptions: [
        { value: false, label: 'Non-négociable' },
        { value: true, label: 'Négociable' }
      ]
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  componentWillReceiveProps(props){
    this.setState({ 
      title : props.title,
      description : props.description,
      imgsource : props.imgsource,
      price : props.price,
      nego : props.nego
    })
  }
  // Callback~
  getFiles(imgsource){
    this.setState({ imgsource: imgsource.base64 })
    this.setState({ imageIsThere: true })
  };

  validateFields = () => {
    let completed = this.state.title && this.state.description && this.state.price
    return(completed)
  }

  handleDelete (e) {
    e.preventDefault();
    const url = 'http://localhost:8080/backend/api/article';
    axios.delete(url + '?id=' + this.props.id).then(response => response.data)
		.then(() => {
      this.showSuccess("Votre annonce à été supprimée")
    });
  }

  handleUpdate (e) {
    e.preventDefault();
    const imgurUrl = 'https://api.imgur.com/3/upload'
    
    
    if(this.validateFields()) { 
      
      let image = this.state.imageIsThere ?
      this.state.imgsource.replace('data:image/png;base64,','').replace('data:image/jpeg;base64,','') :
      this.props.imgsource.replace('data:image/png;base64,','').replace('data:image/jpeg;base64,','');

      axios.post(imgurUrl, {image}, { headers: {Authorization: "Client-ID 546c25a59c58ad7"}}).then(response => response.data)
      .then((data) => {
        const url = 'http://localhost:8080/backend/api/article'
        let image_url = data.data.link
        /*let chosenTags = [];
        for (var i = 0, l = this.state.tags.length; i < l; i++) {
          chosenTags.push(this.state.tags[i].value);
        }*/
        let newArticle = {
          id_category: this.props.idCategory,
          cip: this.props.cip,
          title: this.state.title,
          description: this.state.description,
          price: this.state.price,
          wear: this.props.wear,
          nego: this.state.nego.value,
          //tags: chosenTags,
          image_src: image_url
        }
        console.log(newArticle);
        axios.post(url, newArticle).then((data) => {
          this.showSuccess("Votre annonce à été modifié")
          this.setState({'updatedWithoutError': true})
          this.props.title = this.state.title
          this.props.nego = this.state.nego
          this.props.price = this.state.price
          this.props.description = this.state.description
          this.props.image = this.state.image
          
        }).catch(error =>{
          this.showError(error)
        })
      }).catch(error =>{
        this.showError(error)
      }).then(() => {
        if(this.state.updatedWithoutError) {
          const url = 'http://localhost:8080/backend/api/article';
          axios.delete(url + '?id=' + this.props.id).then(response => response.data)
          this.setState({'updatedWithoutError': true})
        }

      })
    } else { this.showError('Des champs requis sont manquants') }


  }


  handleChangeNego = nego => {
    this.setState({ nego });
  };
  showSuccess = (message) => {
    const { messageManager } = this.props;
    messageManager.showSuccessMessage('Succès: ' + message, {
      displayTime: 5000, //defaults to 2000
    });
  };
  showError = (message) => {
    const { messageManager } = this.props;
    messageManager.showErrorMessage('Erreur: ' + message , {
      displayTime: 5000, //defaults to 2000
    });
  };
  render() {
    return (
      <div className="sale-component">
        <article className="sale-left-section">
          { 
            this.props.cip === localStorage.getItem('cip') 
            ? <input className="sale-title-input"  value={this.state.title} onChange={e => this.setState({ title: e.target.value })}></input>
            : <span className="sale-title">{this.props.title}</span>
          }
          <span className="sale-location">{this.props.location}</span>
          <div className="sale-images">
            { 
              this.props.cip === localStorage.getItem('cip') 
              ? <img src={this.state.imgsource} className="sale-main-image" alt={this.props.imgsource} />
              : <img src={this.props.imgsource} className="sale-main-image" alt={this.props.imgsource} />
            }
            {
              this.props.cip === localStorage.getItem('cip') 
              ? <FileBase64 className="sale-main-image-base64" multiple={ false } onDone={ this.getFiles.bind(this) }/>
              : <div></div>
            }
          </div>
          <h4>Description</h4>
          { 
            this.props.cip === localStorage.getItem('cip') 
            ? <textarea className="sale-description-input"  value={this.state.description} onChange={e => this.setState({ description: e.target.value })}></textarea>
            : <div className="sale-description">{this.props.description}</div>
          }
        </article>
        <div className="sale-mid-section"></div>
        <aside className="sale-right-section">
          { 
            this.props.cip === localStorage.getItem('cip') 
            ? <button onClick={this.handleDelete} className="sale-delete-button">Supprimer l'annonce</button>
            : <div/>
          }
          { 
            this.props.cip === localStorage.getItem('cip') 
            ? <input className="sale-price-input"  value={this.state.price} onChange={e => this.setState({ price: e.target.value })}></input>
            : <span className="sale-price">{this.props.price} $</span>
          }
          { 
            this.props.cip === localStorage.getItem('cip') 
            ? <Select options={this.state.negoOptions} onChange={this.handleChangeNego} value={this.state.nego} placeholder="Négociable"/>
            : <span className="sale-nego">{this.props.nego ? "négociable" : "fixe"}</span>
          }
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
          { 
            this.props.cip === localStorage.getItem('cip') 
            ? <button onClick={this.handleUpdate} className="sale-update-button">Mettre-à-jour</button>
            : <div/>
          }
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
