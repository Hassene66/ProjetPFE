import React, { useState, useEffect, Fragment } from "react";
import "./footer.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout, login } from "../actions/auth";
import { getCurrentProfile } from "../actions/profileEcole";
const Footer = ({
  getCurrentProfile,
  profileEcole: { profile, loadingProfileEcole }
}) => {
  const [stateFooter, setStateFooter] = useState({
    NomEcole: ""
  });

  useEffect(() => {
    getCurrentProfile();
    if (profile === null) {
      setStateFooter({
        NomEcole: ""
      });
    } else {
      setStateFooter({
        NomEcole: profile.NomEcole
      });
    }
  }, [loadingProfileEcole]);
  const { NomEcole } = stateFooter;

  return (
    <footer className="footerAccuilAdmin">
      <p className="nom_ecole">
        <span
          className="iconify copyright"
          data-inline="false"
          data-icon="ant-design:copyright-outlined"
        ></span>
        ~ {NomEcole}
      </p>
    </footer>
  );
};

Footer.prototype = {
  getCurrentProfile: PropTypes.func.isRequired,
  profileEcole: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profileEcole: state.profileEcole
});
export default connect(mapStateToProps, { getCurrentProfile })(Footer);
