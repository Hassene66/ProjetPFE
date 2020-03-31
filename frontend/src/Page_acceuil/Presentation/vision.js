import React, { useState, useEffect, Fragment } from "react";
import image1 from "./Images/visibility.svg";
import image2 from "./Images/target.svg";
import image3 from "./Images/diamond.svg";
import "./Vision.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCurrentProfile } from "../../actions/profileEcole";
const Vision = ({
  getCurrentProfile,
  profileEcole: { profile, loadingProfileEcole }
}) => {
  const [stateVision, setStateVision] = useState({
    LesValeursDeNotreEcole: ""
  });

  useEffect(() => {
    getCurrentProfile();
    if (profile === null) {
      setStateVision({
        LesValeursDeNotreEcole: ""
      });
    } else {
      setStateVision({
        LesValeursDeNotreEcole: profile.LesValeursDeNotreEcole
      });
    }
  }, [loadingProfileEcole]);
  const { LesValeursDeNotreEcole } = stateVision;

  return (
    <div className="site-section bg-info">
      <div className="fluid-container mx-5 ">
        <div className="row ">
          <div className="col-lg-4 mb-4 mb-lg-0 ">
            <div className="package text-center bg-white my-5 ">
              <span className="img-wrap">
                <img src={image1} alt="Image" className="img-fluid" />
              </span>
              <h3 className="text-teal">Notre Vision</h3>
              <p>{LesValeursDeNotreEcole[0]}</p>
            </div>
          </div>
          <div className="col-lg-4 mb-4 mb-lg-0 ">
            <div className="package text-center bg-white my-5 ">
              <span className="img-wrap">
                <img src={image2} alt="Image" className="img-fluid" />
              </span>
              <h3 className="text-success">Notre mission</h3>
              <p>{LesValeursDeNotreEcole[1]}</p>
            </div>
          </div>
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="package text-center bg-white my-5 ">
              <span className="img-wrap">
                <img src={image3} alt="Image" className="img-fluid" />
              </span>
              <h3 className="text-danger">Nos Valeurs</h3>
              <p>{LesValeursDeNotreEcole[2]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Vision.prototype = {
  getCurrentProfile: PropTypes.func.isRequired,
  profileEcole: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profileEcole: state.profileEcole
});
export default connect(mapStateToProps, { getCurrentProfile })(Vision);
