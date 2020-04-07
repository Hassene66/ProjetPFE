import React, { useState, useEffect, Fragment } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout, login } from "../actions/auth";
import { getCurrentProfile } from "../actions/profileEcole";
const Navbar = ({
  getCurrentProfile,
  profileEcole: { profile, loadingProfileEcole },
  auth: { isAuthenticated, loading },
  logout,
}) => {
  const [stateNav, setStateNav] = useState({
    LogoEcole: "",
    NomEcole: "",
  });

  useEffect(() => {
    getCurrentProfile();
    if (profile === null) {
      setStateNav({
        LogoEcole: "",
        NomEcole: "",
      });
    } else {
      setStateNav({
        LogoEcole: profile.LogoEcole,
        NomEcole: profile.NomEcole,
      });
    }
  }, [loadingProfileEcole]);
  const { LogoEcole, NomEcole } = stateNav;
  function getCurrentDate() {
    var tempDate = new Date();
    var date =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();

    return <h5 className="mb-0">{date}</h5>;
  }
  return (
    <div>
      <nav className=" navbar sticky-top navbar navbar-expand-lg navbar-dark bg-dark  ">
        <Link className="navbar-brand  " to="/">
          <img
            alt=""
            src={LogoEcole}
            width="35"
            height="35"
            className="d-inline-block align-top"
          />
          <span className="pl-2 pr-5 ">{NomEcole}</span>
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
            <li className="nav-item active mx-5">
              <Link className="nav-link" to="/">
                {getCurrentDate()} <span className="sr-only">(current)</span>
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
  getCurrentProfile: PropTypes.func.isRequired,
  profileEcole: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  profileEcole: state.profileEcole,
});
export default connect(mapStateToProps, { logout, getCurrentProfile })(Navbar);
