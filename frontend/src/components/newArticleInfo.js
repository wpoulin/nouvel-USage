import React, { Component } from "react";
import PropTypes from "prop-types";
import "../assets/newArticleInfo.css";
import axios from 'axios';
import FileBase64 from 'react-file-base64';
import { injectMessageManager } from 'react-message-manager';
import LoadingOverlay from 'react-loading-overlay';
import Select from 'react-select'
import DatePicker from 'react-date-picker'

class NewArticleInfo extends Component {
  constructor(props) {
    super(props);
    // N’appelez pas `this.setState()` ici !

    this.state = {
      options: [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
        { value: '6', label: '6' },
        { value: '7', label: '7' },
        { value: '8', label: '8' },
        { value: '9', label: '9' },
        { value: '10', label: '10' }
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
      Name : "",
      Description : "",
      Price : "",
      Condition : "",
      Parution : "",
      Tag : "",
      //Image : "iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAARklEQVQYV2P84mz2n6dyHsPLpH6GRUufMzAy7Lny/0t7EsP0BhGGuGhJBsaXcsn/QTKZDW8YQCoZuw97/QfJiM8rZACpBADrDxwAnEbMFQAAAABJRU5ErkJggg=="
      Image : null,
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
    let completed = this.state.Name && this.state.Description && this.state.Price && this.state.Condition
    return(completed)
  }

  onChange = Parution => this.setState({ Parution })

  handleChangeTag = Tag => {
    this.setState({ Tag });
  };

  handleChangeCondition = Condition => {
    this.setState({ Condition });
  };


  // Callback~
  getFiles(image){
    this.setState({ Image: image })
    this.setState({ ImageIsThere: true })
    console.log(image)
  };

  handleClick (e) {
    e.preventDefault();
    const url = 'https://api.imgur.com/3/upload'
    
    if(this.state.ImageIsThere && this.validateFields()) { 
      this.loading(true)
      let image = this.state.Image.base64.replace('data:image/png;base64,','')

      axios.post(url, {image}, { headers: {Authorization: "Client-ID " + "546c25a59c58ad7"}}).then(response => response.data)
      .then((data) => {
        const url = 'http://localhost:8080/backend/api/article'
        let image_url = data.data.link
        let article = {
          idClient: 1,
          Name: this.state.Name,
          Description: this.state.Description,
          Condition: this.state.Condition,
          Parution: this.state.Parution,
          Tag: this.state.Tag,
          Image: image_url
        }
        axios.post(url, article).then((data) => {
          this.showSuccess("Votre annonce à été enregistré")
        }).catch(error =>{
          this.showError(error)
          this.loading(false)
        })
      }).catch(error =>{
        this.showError(error)
        this.loading(false)
      })
    } else { this.showError('Les champs: Nom, Description, Prix et Image sont requis') }
  };
  
  //<input className="newSale-input" onChange={e => this.setState({ Condition: e.target.value })}></input>
  //<input className="newSale-input" onChange={e => this.setState({ Parution: e.target.value })}></input>
  //<input className="newSale-input" onChange={e => this.setState({ Tag: e.target.value })}></input>
  render() {
    return (
        <div className="newSale-component">
          <LoadingOverlay active={this.state.isActive} spinner text='Loading your content...'>
            <article>
                <form>
                  <label className="newSale-label">Nom</label>
                  <input className="newSale-input" onChange={e => this.setState({ Name: e.target.value })}></input>
                  <label className="newSale-label">Description</label>
                  <input className="newSale-input" onChange={e => this.setState({ Description: e.target.value })}></input>
                  <label className="newSale-label">Prix</label>
                  <input className="newSale-input" onChange={e => this.setState({ Price: e.target.value })}></input>
                  <label className="newSale-label">Condition</label>
                  <Select options={this.state.options} onChange={this.handleChangeCondition} value={this.state.Condition}/>
                  <label className="newSale-label">Parution</label>
                  <DatePicker onChange={this.onChange} value={this.state.Parution} />
                  <label className="newSale-label">Tag</label>
                  <Select value={this.state.tag} onChange={this.handleChangeTag} options={this.state.tag_options} isMulti={true}/>
                  <label className="newSale-label">Image</label>
                  <FileBase64 multiple={ false } onDone={ this.getFiles.bind(this) }/>
                  <button className="newSale-apply-button" onClick={this.handleClick}>Créer</button>
                </form>
              </article>
            </LoadingOverlay>
        </div>
    );
  }
}

NewArticleInfo.propTypes = {
    Name: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Price: PropTypes.string.isRequired,
    Condition: PropTypes.string.isRequired,
    Parution: PropTypes.string,
    Tag: PropTypes.string,
    Image: PropTypes.string
  };

export default  injectMessageManager(NewArticleInfo);
