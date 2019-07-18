import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../assets/profileInfo.css";

class LoginComponent extends Component {
  render() {
    return (
        <div className="profile-component">
            <article>
                <form>
                  <button className="profile-apply-button">Appliquer</button>
                  <Link to="/redirect" className="profile-pw-reset">Réinitialiser le mot de passe</Link>
                </form>
            </article>
        </div>
    );
  }
}

LoginComponent.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    tel: PropTypes.string,
    cell: PropTypes.string,
    city: PropTypes.string
  };

export default LoginComponent;
