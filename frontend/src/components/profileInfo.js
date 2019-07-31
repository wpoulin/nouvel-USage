import React, { Component } from "react";
import PropTypes from "prop-types";
import "../assets/profileInfo.css";
import axios from 'axios';

class ProfileInfo extends Component {
  constructor(props) {
    super(props);
    // N’appelez pas `this.setState()` ici !
    this.state = {
        cip: "",
        firstName : "",
        lastName : "",
        username : "",
        email : "",
        tel : "",
        city : ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillReceiveProps(props){
    this.setState({ 
        cip : props.cip,
        firstName : props.firstName,
        lastName : props.lastName,
        username : props.username,
        email : props.email,
        tel : props.tel,
        city : props.city
    })
  }

  render() {
    return (
        <div className="profile-component">
            <article>
                <form>
                  <label className="profile-label">CIP</label>
                  <label className="profile-input">{this.state.cip}</label>
                  <label className="profile-label">Prénom</label>
                  <input className="profile-input" type="text" value={this.state.firstName} onChange={e => this.setState({ firstName: e.target.value })}></input>
                  <label className="profile-label">Nom</label>
                  <input className="profile-input" type="text" value={this.state.lastName} onChange={e => this.setState({ lastName: e.target.value })}></input>
                  <label className="profile-label">Nom d'utilisateur*</label>
                  <input className="profile-input" type="text" value={this.state.username} onChange={e => this.setState({ username: e.target.value })}></input>
                  <label className="profile-label">Courriel*</label>
                  <input className="profile-input" type="text" value={this.state.email} onChange={e => this.setState({ email: e.target.value })}></input>
                  <label className="profile-label">Téléphone*</label>
                  <input className="profile-input" type="text" value={this.state.tel} onChange={e => this.setState({tel: e.target.value })}></input>
                  <label className="profile-label">Ville</label>
                  <input className="profile-input" type="text" value={this.state.city} onChange={e => this.setState({ city: e.target.value })}></input>

                  <button className="profile-apply-button" onClick={this.handleClick}>Appliquer</button>
                </form>
            </article>
        </div>
    );
  }

  handleClick (e) {
    e.preventDefault();

    let user = {
      cip: this.state.cip,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      email: this.state.email,
      phone: this.state.tel,
      city : this.state.city
    }
    
    const url = 'http://localhost:8080/backend/api/user';
    axios.put(url, user).then(response => response.data)
		.then(() => {
			// eslint-disable-next-line no-console
			//console.log(data)
		});
  }
}

ProfileInfo.propTypes = {
    cip: PropTypes.string.isRequired,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    tel: PropTypes.string,
    city: PropTypes.string
  };

export default ProfileInfo;
