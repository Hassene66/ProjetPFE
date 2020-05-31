import React, { useState, useEffect, Fragment } from "react";
import "./Content.css";
import img1 from "./imagesPageFormation/taylor-wilcox-4nKOEAQaTgA-unsplash.jpg";
import img2 from "./imagesPageFormation/person-writing-on-notebook-669615.jpg";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCurrentProfile } from "../../actions/profileEcole";
const Content = ({
  getCurrentProfile,
  profileEcole: { profile, loadingProfileEcole },
}) => {
  const [stateContent, setStateContent] = useState({
    NosFormations: "",
  });

  useEffect(() => {
    getCurrentProfile();
    if (profile === null) {
      setStateContent({
        NosFormations: "",
      });
    } else {
      setStateContent({
        NosFormations: profile.NosFormations,
      });
    }
  }, [loadingProfileEcole]);
  const { NosFormations } = stateContent;
  return (
    <div className="fluid-container px-0 mb-5">
      <div className="row align-items-center  ">
        <div
          id="premierLigne"
          className="col-lg-6 text-center order-1 order-lg-2 "
        >
          <div className="row justify-content-center">
            <div className="col-9">
              <h2 className="display-5 pb-3">Formation riche et variée</h2>
              <p id="premierParagraphe">{NosFormations[0]}</p>
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
              <h2 className="display-5 pb-3">
                Formation basée sur les projects et le pratique
              </h2>
              <p id="dexiemeParagraphe">{NosFormations[1]}</p>
            </div>
          </div>
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
