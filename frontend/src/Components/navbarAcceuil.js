import React, { Fragment } from "react";
import logoEcole from "./Images/iconfinder_Closed_Book_Icon_1741323.svg";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading, token }, logout }) => {
  const Loginbtn = (
    <li className="nav-item active ml-3 mr-3">
      <Link to="/api/auth">
        <button type="submit" className="btn btn-light btn-sm ">
          Se Connecter
        </button>
      </Link>
    </li>
  );

  const Logoutbtn = (
    <li className="nav-item active ml-3 mr-3">
      <Link to="/">
        <button
          type="submit"
          className="btn btn-light btn-sm "
          onClick={logout}
        >
          Déconnexion
        </button>
      </Link>
    </li>
  );

  return (
    <div>
      <nav className=" navbar sticky-top navbar navbar-expand-lg navbar-dark bg-dark  ">
        <a className="navbar-brand  " href="/">
          <img
            alt=""
            src={logoEcole}
            width="35"
            height="35"
            className="d-inline-block align-top"
          />
          <span className="pl-2  ">Mon Ecole</span>
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
            {!loading && (
              <Fragment>
                {isAuthenticated && token ? Logoutbtn : Loginbtn}
              </Fragment>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

Navbar.prototype = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { logout })(Navbar);
