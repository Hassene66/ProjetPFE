import React, { useState, useEffect, Fragment } from "react";
import image1 from "./Images/directeur.jpg";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCurrentProfile } from "../../actions/profileEcole";

const Mot_Directeur = ({
  getCurrentProfile,
  profileEcole: { profile, loadingProfileEcole }
}) => {
  const [stateMotDirecteur, setStateMotDirecteur] = useState({
    MotDeDirecteur: ""
  });

  useEffect(() => {
    getCurrentProfile();
    if (profile === null) {
      setStateMotDirecteur({
        MotDeDirecteur: ""
      });
    } else {
      setStateMotDirecteur({
        MotDeDirecteur: profile.MotDeDirecteur
      });
    }
  }, [loadingProfileEcole]);
  const { MotDeDirecteur } = stateMotDirecteur;
  return (
    <div className="fluid-container  ">
      <div className="card my-5  ">
        <div className="row no-gutters ">
          <div className="col-lg-4 ">
            <img
              src={image1}
              className="card-img w-100 h-100 "
              alt="Directeur"
            />
          </div>
          <div className="col-lg-8 ">
            <div className="card-body">
              <h5
                className="card-title"
                style={{
                  "border-bottom": "3px solid #51be78",
                  display: "inline-block"
                }}
              >
                Mot de directeur
              </h5>
              <p className="card-text ">{MotDeDirecteur}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Mot_Directeur.prototype = {
  getCurrentProfile: PropTypes.func.isRequired,
  profileEcole: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profileEcole: state.profileEcole
});
export default connect(mapStateToProps, { getCurrentProfile })(Mot_Directeur);
