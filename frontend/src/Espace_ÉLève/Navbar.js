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

  function getCurrentDate() {
    var tempDate = new Date();
    var date =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();

    return <h6 className="mb-0 pt-1">{date}</h6>;
  }
  const { LogoEcole, NomEcole } = stateNav;
  return (
    <div>
      <div className="container-fluid fixed-top bg-dark py-3 navbar-nav">
        <div className="row collapse show no-gutters d-flex h-100 position-relative">
          <div className=" px-0 w-sidebar navbar-collapse collapse d-none d-md-flex ">
            {/*  spacer col */}
            <Link className="navbar-brand p-0 ml-2  " to="/">
              <img
                alt=""
                src={LogoEcole}
                width="32"
                height="32"
                className="d-inline-block align-top"
              />
              <span className="pl-2 pr-5 " style={{ color: "white" }}>
                {NomEcole}
              </span>
            </Link>
          </div>
          <div className="col px-3 px-md-0 d-flex align-items-center">
            {/* toggler */}
            <Link
              data-toggle="collapse"
              href="#"
              data-target=".collapse"
              role="button"
              className="text-white p-1 ml-2"
            >
              <i className="fa fa-bars fa-lg"></i>
            </Link>
            <ul className="navbar-nav ml-auto flex-row">
              <li className="nav-item mr-4 mr-sm-5 text-white">
                {getCurrentDate()}
              </li>
              <li className="nav-item ">
                <Link>
                  <i
                    className="fab fa-facebook-messenger fa-lg pt-2 "
                    style={{ color: "white" }}
                  />
                </Link>
              </li>
              <li className="nav-item ">
                <Link>
                  <i
                    className="fas fa-bell fa-lg pt-2 mx-4 mx-sm-5"
                    style={{ color: "white" }}
                  />
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link p-0 " onClick={logout} to="/">
                  <button className="btn btn-light btn-sm d-flex flex-row">
                    <i className="fas fa-sign-out-alt fa-lg pt-1 mr-1  "></i>
                    <h6 className=" mr-2 mb-0  ">Déconnection</h6>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
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
