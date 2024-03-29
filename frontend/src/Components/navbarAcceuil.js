import React, { useState, useEffect, Fragment } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../actions/auth";
import { getCurrentProfile } from "../actions/profileEcole";
import "./navbarAcceuil.css";

const Navbar = ({
  getCurrentProfile,
  profileEcole: { profile, loadingProfileEcole },
  auth: { isAuthenticated, loading, token, user },
  logout,
}) => {
  const [stateNavbarAcceuil, setStateNavbarAcceuil] = useState({
    LogoEcole: "",
    NomEcole: "",
  });

  useEffect(() => {
    getCurrentProfile();
    if (profile === null) {
      setStateNavbarAcceuil({
        LogoEcole: "",
        NomEcole: "",
      });
    } else {
      setStateNavbarAcceuil({
        LogoEcole: profile.LogoEcole,
        NomEcole: profile.NomEcole,
      });
    }
  }, [loadingProfileEcole]);
  const { LogoEcole, NomEcole } = stateNavbarAcceuil;

  const LoginbtnAvant = (
    <Link
      type="submit"
      className="btn btn-light btn-sm user-acc-margin "
      to="/api/auth"
    >
      Se Connecter
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
      return "/PageAcceuilEleve";
    } else if (user.typeUtilisateur === "enseignant") {
      return "/PageAcceuilEnseignant";
    } else if (user.typeUtilisateur === "parent") {
      return "/PageAcceuilParent";
    }
  }

  return (
    <div className="navbar-acceuil">
      <nav className=" navbar sticky-top navbar navbar-expand-xl navbar-collapse navbar-dark bg-dark  ">
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
          <ul className="navbar-nav  ml-5">
            <li className="nav-item active ml-3 mr-3">
              <NavLink
                activeClassName="navacceuil"
                exact
                className="nav-link"
                to="/"
              >
                Acceuil<span className="sr-only">(current)</span>
              </NavLink>
            </li>

            <li className="nav-item active  ml-3 mr-3">
              <NavLink
                activeClassName="navacceuil"
                exact
                className="nav-link"
                to="/Presentation"
              >
                Présentation
              </NavLink>
            </li>

            <li className="nav-item active ml-3 mr-3">
              <NavLink
                activeClassName="navacceuil"
                exact
                className="nav-link"
                to="/NosFormation"
              >
                Formation
              </NavLink>
            </li>

            <li className="nav-item active ml-3 mr-3">
              <NavLink
                activeClassName="navacceuil"
                exact
                className="nav-link"
                to="/Activité"
              >
                Activités
              </NavLink>
            </li>
            <li className="nav-item active ml-3 mr-3">
              <NavLink
                activeClassName="navacceuil"
                exact
                className="nav-link"
                to="/Galerie"
              >
                Galerie
              </NavLink>
            </li>

            <li className="nav-item  ml-3 active ">
              <NavLink
                activeClassName="navacceuil"
                exact
                className="nav-link"
                to="/Contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* d-flex justify-content-right */}
          {!loading && isAuthenticated && token && (
            <ul className="navbar-nav user-acc-margin1 user-acc-margin2">
              <li className="nav-item dropdown ">
                <Link
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-user text-white mr-2"></i>
                  {user.prénom + " " + user.nom}
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to={getUser()}>
                    Mon Espace
                  </Link>

                  {Logoutbtn}
                </div>
              </li>
            </ul>
          )}
          {!loading && isAuthenticated && !token && (
            <Fragment>
              <ul className="navbar-nav Login-margin user-acc-margin1  ">
                <li className="nav-item">{LoginbtnAvant}</li>
              </ul>
            </Fragment>
          )}

          {!loading && !isAuthenticated && (
            <Fragment>
              <ul className="navbar-nav Login-margin user-acc-margin1  ">
                <li className="nav-item">{LoginbtnAvant}</li>
              </ul>
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
  profileEcole: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  profileEcole: state.profileEcole,
});
export default connect(mapStateToProps, { getCurrentProfile, logout })(Navbar);
