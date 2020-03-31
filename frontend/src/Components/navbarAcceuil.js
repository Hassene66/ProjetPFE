import React, { useState, useEffect, Fragment } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../actions/auth";
import { getCurrentProfile } from "../actions/profileEcole";

const Navbar = ({
  getCurrentProfile,
  profileEcole: { profile, loadingProfileEcole },
  auth: { isAuthenticated, loading, token, user },
  logout
}) => {
  const [stateNavbarAcceuil, setStateNavbarAcceuil] = useState({
    LogoEcole: "",
    NomEcole: ""
  });

  useEffect(() => {
    getCurrentProfile();
    if (profile === null) {
      setStateNavbarAcceuil({
        LogoEcole: "",
        NomEcole: ""
      });
    } else {
      setStateNavbarAcceuil({
        LogoEcole: profile.LogoEcole,
        NomEcole: profile.NomEcole
      });
    }
  }, [loadingProfileEcole]);
  const { LogoEcole, NomEcole } = stateNavbarAcceuil;

  const LoginbtnApres = (
    <Link className="dropdown-item">
      <Link type="submit" className="btn btn-light btn-sm " to="/api/auth">
        Se Connecter
      </Link>
    </Link>
  );
  const LoginbtnAvant = (
    <Link>
      <Link type="submit" className="btn btn-light btn-sm " to="/api/auth">
        Se Connecter
      </Link>
    </Link>
  );

  const Logoutbtn = (
    <Link className="dropdown-item " to="/" onClick={logout}>
      Déconnexion
    </Link>
  );
  function getUser() {
    if (user === null) return "/";
    else if (user.typeUtilisateur === "admin") {
      return "/AccueilAdministration";
    } else if (user.typeUtilisateur === "élève") {
      return "/NosFormation";
    } else {
      return "/Activité";
    }
  }

  return (
    <div>
      <nav className=" navbar sticky-top navbar navbar-expand-lg navbar-dark bg-dark  ">
        <a className="navbar-brand  " href="/">
          <img
            alt=""
            src={LogoEcole}
            width="35"
            height="35"
            className="d-inline-block align-top"
          />
          <span className="pl-2  ">{NomEcole}</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-5">
            <li className="nav-item active ml-3 mr-3">
              <Link className="nav-link" to="/">
                Acceuil
              </Link>
            </li>
            <li className="nav-item active ml-3 mr-3">
              <Link className="nav-link" to="/Presentation">
                Présentation
              </Link>
            </li>
            <li className="nav-item active ml-3 mr-3">
              <Link className="nav-link" to="/NosFormation">
                Nos formation
              </Link>
            </li>
            <li className="nav-item active ml-3 mr-3">
              <Link className="nav-link" to="/Activité">
                Activités
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle pl-3"
                to="/Galerie"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Galerie
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/Galerie/Image">
                  Images
                </Link>

                <Link className="dropdown-item" to="/Galerie/Video">
                  Videos
                </Link>
              </div>
            </li>
            <li className="nav-item active ml-3 mr-3">
              <Link className="nav-link" to="/Contact">
                Contact
              </Link>
            </li>
            {!loading && isAuthenticated && (
              <Fragment>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {user.prénom + " " + user.nom}
                  </Link>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link className="dropdown-item" to={getUser()}>
                      Mon Espace
                    </Link>

                    {isAuthenticated && token ? Logoutbtn : LoginbtnApres}
                  </div>
                </li>
              </Fragment>
            )}
          </ul>
          {!loading && !isAuthenticated && (
            <Fragment>
              <li>{LoginbtnAvant}</li>
            </Fragment>
          )}
        </div>
      </nav>
    </div>
  );
};

Navbar.prototype = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profileEcole: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  profileEcole: state.profileEcole
});
export default connect(mapStateToProps, { getCurrentProfile, logout })(Navbar);
