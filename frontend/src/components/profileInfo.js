import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../assets/profileInfo.css";

class ProfileInfo extends Component {
  render() {
    return (
      <div className="profile-component">
        <article>
          <form>
            <label className="profile-label">Prénom</label>
            <input
              className="profile-input"
              placeholder={this.props.firstName}
            />
            <label className="profile-label">Nom</label>
            <input
              className="profile-input"
              placeholder={this.props.lastName}
            />
            <label className="profile-label">Nom d&apos;utilisateur</label>
            <input
              className="profile-input"
              placeholder={this.props.username}
            />
            <label className="profile-label">Courriel</label>
            <input className="profile-input" placeholder={this.props.email} />
            <label className="profile-label">Téléphone</label>
            <input className="profile-input" placeholder={this.props.tel} />
            <label className="profile-label">Cellulaire</label>
            <input className="profile-input" placeholder={this.props.cell} />
            <label className="profile-label">Ville</label>
            <input className="profile-input" placeholder={this.props.city} />

            <button className="profile-apply-button">Appliquer</button>
            <Link to="/ResetPassword" className="profile-pw-reset">
              Réinitialiser le mot de passe
            </Link>
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
