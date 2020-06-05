import React, { useState, useEffect, Fragment } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout, login } from "../actions/auth";
import { getCurrentProfile } from "../actions/profileEcole";
import NotificationBadge from "react-notification-badge";
import { Effect } from "react-notification-badge";
import axios from "axios";
import moment from "moment-timezone";
import "./Navbar.css";
const Navbar = ({
  getCurrentProfile,
  profileEcole: { profile, loadingProfileEcole },
  logout,
}) => {
  const [stateNav, setStateNav] = useState({
    LogoEcole: "",
    NomEcole: "",
  });
  const [stateBadgeMsg, setStateBadgeMsg] = useState(1);

  useEffect(() => {
    getCurrentProfile();
    if (profile === null) {
      setStateNav({
        LogoEcole: "",
        NomEcole: "",
      });
    } else {
      axios.get("/ContacterNous/countDocuments").then((res) => {
        setStateBadgeMsg({ stateBadgeMsg: res.data });
      });
      setStateNav({
        LogoEcole: profile.LogoEcole,
        NomEcole: profile.NomEcole,
      });
    }
  }, [loadingProfileEcole]);

  function getCurrentDate() {
    var date = moment().tz("Africa/Tunis").format("L");

    return <h5 className="mb-0 ">{date}</h5>;
  }
  const { LogoEcole, NomEcole } = stateNav;
  return (
    <div className="Navbar-notification">
      <div className="container-fluid fixed-top bg-dark py-3 navbar-nav">
        <div className="row collapse show no-gutters d-flex h-100 position-relative">
          <div className=" px-0 w-sidebar navbar-collapse collapse d-none d-lg-flex ">
            {/*  spacer for col  */}
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
          <div className="col px-0 d-flex align-items-center">
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
              <li className="nav-item mr-4 mr-sm-5 text-white d-flex align-items-center">
                {getCurrentDate()}
              </li>
              <li className="nav-item d-flex align-items-center mr-5">
                <Link
                  className="nav-link py-0"
                  to="/AccueilAdministration/listeContacterNous"
                >
                  <NotificationBadge
                    count={stateBadgeMsg.stateBadgeMsg}
                    effect={Effect.SCALE}
                  />
                  <i className="far fa-envelope text-white fa-2x "></i>
                </Link>
              </li>
              {/* <li className="nav-item d-flex align-items-center ">
                <a
                  className=" text-light"
                  href="#!"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i
                    className="far fa-bell fa-2x  mx-4 mx-sm-5"
                    style={{ color: "white" }}
                  />
                </a>

                <ul className="dropdown-menu mt-4">
                  <li className="head text-light bg-secondary">
                    <div className="row">
                      <div className="col-lg-12 col-sm-12 col-12">
                        <span>Notifications (3)</span>
                        <a href className="float-right text-light">
                          Mark all as read
                        </a>
                      </div>
                    </div>
                  </li>
                  <div className="what">
                    <li className="notification-box">
                      <div className="row">
                        <div className="col-lg-3 col-sm-3 col-3 text-center ">
                          <img
                            src="/demo/man-profile.jpg"
                            className="w-50 rounded-circle"
                          />
                        </div>
                        <div className="col-lg-8 col-sm-8 col-8">
                          <strong className="text-info">David John</strong>
                          <div>Lorem ipsum dolor sit amet, consectetur</div>
                          <small className="text-warning">
                            27.11.2015, 15:00
                          </small>
                        </div>
                      </div>
                    </li>
                    <li className="notification-box bg-gray">
                      <div className="row">
                        <div className="col-lg-3 col-sm-3 col-3 text-center">
                          <img
                            src="/demo/man-profile.jpg"
                            className="w-50 rounded-circle"
                          />
                        </div>
                        <div className="col-lg-8 col-sm-8 col-8">
                          <strong className="text-info">David John</strong>
                          <div>Lorem ipsum dolor sit amet, consectetur</div>
                          <small className="text-warning">
                            27.11.2015, 15:00
                          </small>
                        </div>
                      </div>
                    </li>
                    <li className="notification-box">
                      <div className="row">
                        <div className="col-lg-3 col-sm-3 col-3 text-center">
                          <img
                            src="/demo/man-profile.jpg"
                            className="w-50 rounded-circle"
                          />
                        </div>
                        <div className="col-lg-8 col-sm-8 col-8">
                          <strong className="text-info">David John</strong>
                          <div>Lorem ipsum dolor sit amet, consectetur</div>
                          <small className="text-warning">
                            27.11.2015, 15:00
                          </small>
                        </div>
                      </div>
                    </li>
                    <li className="notification-box">
                      <div className="row">
                        <div className="col-lg-3 col-sm-3 col-3 text-center">
                          <img
                            src="/demo/man-profile.jpg"
                            className="w-50 rounded-circle"
                          />
                        </div>
                        <div className="col-lg-8 col-sm-8 col-8">
                          <strong className="text-info">David John</strong>
                          <div>Lorem ipsum dolor sit amet, consectetur</div>
                          <small className="text-warning">
                            27.11.2015, 15:00
                          </small>
                        </div>
                      </div>
                    </li>
                  </div>
                  <li className="footer bg-secondary text-center">
                    <a href className="text-light">
                      View All
                    </a>
                  </li>
                </ul>
              </li> */}
              <li className="nav-item d-flex align-items-center ">
                <Link className="nav-link p-0 " onClick={logout} to="/">
                  <button className="btn btn-light btn-sm d-flex flex-row py-2">
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
