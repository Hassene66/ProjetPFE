import React, { Component } from "react";
import logoecole from "./Images/iconfinder_Closed_Book_Icon_1741323.svg";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout, login } from "../actions/auth";
const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  return (
    <div>
      <nav className=" navbar sticky-top navbar navbar-expand-lg navbar-dark bg-primary  ">
        <Link className="navbar-brand  " to="/">
          <img
            alt=""
            src={logoecole}
            width="35"
            height="35"
            className="d-inline-block align-top"
          />
          <span className="pl-2 pr-5 ">Mon Ecole</span>
        </Link>
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
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active ml-5 mr-5">
              <Link className="nav-link" to="/">
                21/07/1998 <span className="sr-only">(current)</span>
              </Link>
            </li>

            <li className="nav-item active ml-5 mr-4">
              <Link className="nav-link" to="/">
                <i className="fab fa-facebook-messenger fa-2x"></i>
              </Link>
            </li>
            <li className="nav-item active ml-2 mr-4">
              <Link className="nav-link" to="/">
                <i className="fas fa-bell fa-2x" style={{ color: "white" }}></i>
              </Link>
            </li>
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </Link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link class="dropdown-item" to="/">
                  Action
                </Link>
                <Link class="dropdown-item" to="/">
                  Another action
                </Link>
                <div class="dropdown-divider"></div>
                <Link class="dropdown-item" to="/">
                  Something else here
                </Link>
              </div>
            </li>
            <li className="nav-item active ml-2 mr-4">
              <Link className="nav-link" onClick={logout} to="/">
                <i
                  className="fas fa-sign-out-alt fa-2x "
                  style={{ color: "white" }}
                ></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({ auth: state.auth });
export default connect(mapStateToProps, { logout })(Navbar);
