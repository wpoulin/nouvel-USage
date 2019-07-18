import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../assets/profileInfo.css";

class ProfileInfo extends Component {
  constructor(props) {
    super(props);
    // N’appelez pas `this.setState()` ici !
    this.state = { 
      firstName : "Guillaume", };
  }
  render() {
    return (
        <div className="profile-component">
            <article>
                <form>
                  <label className="profile-label">Prénom</label>
                  <input className="profile-input" placeholder={this.props.firstName} defaultValue={"Guillaume"} onChange={e => this.setState({ firstName: e.target.value })}></input>
                  <label className="profile-label">Nom</label>
                  <input className="profile-input" placeholder={this.props.lastName} defaultValue={"Auclair"}></input>
                  <label className="profile-label">Nom d'utilisateur</label>
                  <input className="profile-input" placeholder={this.props.username} defaultValue={"Chapeau"}></input>
                  <label className="profile-label">Courriel</label>
                  <input className="profile-input" placeholder={this.props.email} defaultValue={"guillaume.auclair@usherbrooke.ca"}></input>
                  <label className="profile-label">Téléphone</label>
                  <input className="profile-input" placeholder={this.props.tel} defaultValue={"418-444-1919"}></input>
                  <label className="profile-label">Cellulaire</label>
                  <input className="profile-input" placeholder={this.props.cell} defaultValue={"777-777-7777"}></input>
                  <label className="profile-label">Ville</label>
                  <input className="profile-input" placeholder={this.props.city} defaultValue={"Sherbrooke"}></input>

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
