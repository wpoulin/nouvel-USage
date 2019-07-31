import React, { Component } from "react";
import PropTypes from "prop-types";
import "../assets/newArticleInfo.css";
import axios from 'axios';
import FileBase64 from 'react-file-base64';
import { injectMessageManager } from 'react-message-manager';
import LoadingOverlay from 'react-loading-overlay';
import Select from 'react-select'

class NewArticleInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [
        { value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 3, label: '3' },
        { value: 4, label: '4' },
        { value: 5, label: '5' },
        { value: 6, label: '6' },
        { value: 7, label: '7' },
        { value: 8, label: '8' },
        { value: 9, label: '9' },
        { value: 10, label: '10' }
      ],
      tag_options: [
        { value: 'S1', label: 'S1' },
        { value: 'S2', label: 'S2' },
        { value: 'S3', label: 'S3' },
        { value: 'S4', label: 'S4' },
        { value: 'S5', label: 'S5' },
        { value: 'S6', label: 'S6' },
        { value: 'S7', label: 'S7' },
        { value: 'S8', label: 'S8' },
        { value: 'Maitrise', label: 'Maitrise' },
        { value: 'Doctorat', label: 'Doctorat' }
      ],
      categories: [
        { value: 1, label: 'Livre' },
        { value: 2, label: 'Matériel' }
      ],
      negoOptions: [
        { value: false, label: 'Non-négociable' },
        { value: true, label: 'Négociable' }
      ],
      idCategory : 0,
      cip : localStorage.getItem('cip'),
      title : "",
      description : "",
      price : 0,
      wear : 0,
      nego : false,
      tags : [],
      imageSrc : "",
      ImageIsThere: false,
      isActive: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.loading = this.loading.bind(this);
    this.validateFields = this.validateFields.bind(this);
  };

  showError = (message) => {
    const { messageManager } = this.props;
    messageManager.showErrorMessage('Erreur: ' + message , {
      displayTime: 5000, //defaults to 2000
    });
  };
 
  showSuccess = (message) => {
    const { messageManager } = this.props;
    messageManager.showSuccessMessage('Succès: ' + message, {
      displayTime: 5000, //defaults to 2000
    });
  };

  loading = (bool) => {
    this.setState({isActive : bool})
  }

  validateFields = () => {
    let completed = this.state.title && this.state.description && this.state.price && this.state.wear && this.state.nego && this.state.categories
    return(completed)
  }

  handleChangeTag = tags => {
    this.setState({ tags });
  };

  handleChangeCondition = wear => {
    this.setState({ wear });
  };

  handleChangeCategory = idCategory => {
    this.setState({ idCategory });
  };

  handleChangeNego = nego => {
    this.setState({ nego });
  };

  // Callback~
  getFiles(imgurUrl){
    this.setState({ imageSrc: imgurUrl })
    this.setState({ ImageIsThere: true })
    console.log(imgurUrl)
  };

  handleClick (e) {
    e.preventDefault();
    const url = 'https://api.imgur.com/3/upload'
    
    if(this.state.ImageIsThere && this.validateFields()) { 
      this.loading(true)
      let image = this.state.imageSrc.base64.replace('data:image/png;base64,','').replace('data:image/jpeg;base64,','');

      axios.post(url, {image}, { headers: {Authorization: "Client-ID 546c25a59c58ad7"}}).then(response => response.data)
      .then((data) => {
        const url = 'http://localhost:8080/backend/api/article'
        let image_url = data.data.link
        /*let chosenTags = [];
        for (var i = 0, l = this.state.tags.length; i < l; i++) {
          chosenTags.push(this.state.tags[i].value);
        }*/
        let newArticle = {
          id_category: this.state.idCategory.value,
          cip: this.state.cip,
          title: this.state.title,
          description: this.state.description,
          price: Number(this.state.price),
          wear: this.state.wear.value,
          nego: this.state.nego.value,
          //tags: chosenTags,
          image_src: image_url
        }
        console.log(newArticle);
        axios.post(url, newArticle).then((data) => {
          this.showSuccess("Votre annonce à été enregistré")
          this.loading(false);
        }).catch(error =>{
          this.showError(error)
          this.loading(false)
        })
      }).catch(error =>{
        this.showError(error)
        this.loading(false)
      })
    } else { this.showError('Des champs requis sont manquants') }
  };
  
  render() {
    return (
        <div className="newSale-component">
          <LoadingOverlay active={this.state.isActive} spinner text='Téléversement du contenu...'>
            <article>
                <form>
                  <label className="newSale-label">Titre*</label>
                  <input className="newSale-input" onChange={e => this.setState({ title: e.target.value })}></input>
                  <label className="newSale-label">Description*</label>
                  <input className="newSale-input" onChange={e => this.setState({ description: e.target.value })}></input>
                  <label className="newSale-label">Prix*</label>
                  <input className="newSale-input" onChange={e => this.setState({ price: e.target.value })}></input>
                  <label className="newSale-label"></label>
                  <Select options={this.state.negoOptions} onChange={this.handleChangeNego} value={this.state.nego} placeholder="Sélectionner..."/>
                  <label className="newSale-label">Type*</label>
                  <Select options={this.state.categories} onChange={this.handleChangeCategory} value={this.state.idCategory} placeholder="Sélectionner..."/>
                  <label className="newSale-label">Condition*</label>
                  <Select options={this.state.options} onChange={this.handleChangeCondition} value={this.state.wear} placeholder="Sélectionner..."/>
                  <label className="newSale-label">Tags</label>
                  <Select value={this.state.tags} onChange={this.handleChangeTag} options={this.state.tag_options} isMulti={true} placeholder="Sélectionner..."/>
                  <label className="newSale-label">Image*</label>
                  <FileBase64 multiple={ false } onDone={ this.getFiles.bind(this) }/>
                  <button className="newSale-apply-button" onClick={this.handleClick}>Créer l'annonce</button>
                </form>
              </article>
            </LoadingOverlay>
        </div>
    );
  }
}

NewArticleInfo.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    nego: PropTypes.bool.isRequired,
    idCategory: PropTypes.number.isRequired,
    wear: PropTypes.number.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    imageSrc: PropTypes.string
  };

export default injectMessageManager(NewArticleInfo);
