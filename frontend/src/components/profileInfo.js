import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../assets/profileInfo.css";

class ProfileInfo extends Component {
  constructor(props) {
    super(props);
    // N’appelez pas `this.setState()` ici !
    console.log(this.props)
    this.state = { 
      firstName : "",
      lastName : "",
      username : "",
      email : "",
      tel : "",
      cell : "",
      city : ""
     };
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillReceiveProps(props){
    this.setState({       
      firstName : props.firstName,
      lastName : props.lastName,
      username : props.username,
      email : props.email,
      tel : props.lastName,
      cell : props.cell,
      city : props.city 
    })
  }
  render() {
    return (
        <div className="profile-component">
            <article>
                <form>
                  <label className="profile-label">Prénom</label>
                  <input className="profile-input" type="text" value={this.state.firstName} onChange={e => this.setState({ firstName: e.target.value })}></input>
                  <label className="profile-label">Nom</label>
                  <input className="profile-input" value={this.state.lastName} onChange={e => this.setState({ lastName: e.target.value })}></input>
                  <label className="profile-label">Nom d'utilisateur</label>
                  <input className="profile-input" value={this.state.username} onChange={e => this.setState({ username: e.target.value })}></input>
                  <label className="profile-label">Courriel</label>
                  <input className="profile-input" value={this.state.email} onChange={e => this.setState({ email: e.target.value })}></input>
                  <label className="profile-label">Téléphone</label>
                  <input className="profile-input" value={this.state.tel} onChange={e => this.setState({ tel: e.target.value })}></input>
                  <label className="profile-label">Cellulaire</label>
                  <input className="profile-input" value={this.state.cell} onChange={e => this.setState({ cell: e.target.value })}></input>
                  <label className="profile-label">Ville</label>
                  <input className="profile-input" value={this.state.city} onChange={e => this.setState({ city: e.target.value })}></input>

                  <button className="profile-apply-button">Appliquer</button>
                  <Link to="/ResetPassword" className="profile-pw-reset">Réinitialiser le mot de passe</Link>
                </form>
            </article>
        </div>
    );
  }
}

ProfileInfo.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    tel: PropTypes.string,
    cell: PropTypes.string,
    city: PropTypes.string
  };

export default ProfileInfo;
