import React, { useState, useEffect, Fragment } from "react";
import "./Content.css";
import img1 from "./images_Page_activité/robotic.jpg";
import img3 from "./images_Page_activité/alyssa-ledesma-nMOrt4yVxL4-unsplash.jpg";
import img2 from "./images_Page_activité/adult-boys-children-city-618116.jpg";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCurrentProfile } from "../../actions/profileEcole";
const Content = ({
  getCurrentProfile,
  profileEcole: { profile, loadingProfileEcole },
}) => {
  const [stateContent, setStateContent] = useState({
    NosActivités: "",
  });

  useEffect(() => {
    getCurrentProfile();
    if (profile === null) {
      setStateContent({
        NosActivités: "",
      });
    } else {
      setStateContent({
        NosActivités: profile.NosActivités,
      });
    }
  }, [loadingProfileEcole]);
  const { NosActivités } = stateContent;
  return (
    <div className="fluid-container px-0">
      <div id="premierColonne" className="row align-items-center  ">
        <div
          id="premierLigne"
          className="col-lg-6 text-center order-1 order-lg-2 "
        >
          <div className="row justify-content-center">
            <div className="col-9">
              <h2 className="display-5 pb-3">
                Des clubs dans plusieurs domaine
              </h2>
              <p id="premierParagraphe">{NosActivités[0]}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 order-2 order-lg-1">
          <img className="img-fluid imgs" src={img1} alt="" />
        </div>
      </div>
      <div className="row align-items-center ">
        <div className="col-lg-6 order-2   ">
          <img className="img-fluid imgs " src={img2} alt="" />
        </div>
        <div id="dexiemeLigne" className="col-lg-6 text-center order-1 ">
          <div className="row justify-content-center">
            <div className="col-10">
              <h2 className="display-5 pb-3">Plusieurs sorties scolaire</h2>
              <p id="dexiemeParagraphe">{NosActivités[1]}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row align-items-center mb-3 ">
        <div
          id="troisiemeligne"
          className="col-lg-6 text-center order-1 order-lg-2 "
        >
          <div className="row justify-content-center">
            <div className="col-9">
              <h2 className="display-5 pb-3">Plusieurs activité sportive</h2>
              <p id="premierParagraphe">{NosActivités[2]}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 order-2 order-lg-1">
          <img className="img-fluid imgs" src={img3} alt="" />
        </div>
      </div>
    </div>
  );
};

Content.prototype = {
  getCurrentProfile: PropTypes.func.isRequired,
  profileEcole: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  profileEcole: state.profileEcole,
});
export default connect(mapStateToProps, { getCurrentProfile })(Content);
