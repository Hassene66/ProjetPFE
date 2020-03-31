import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCurrentProfile } from "../../actions/profileEcole";

const Info_Données = ({
  getCurrentProfile,
  profileEcole: { profile, loadingProfileEcole }
}) => {
  const [stateInfoDonnées, setInfoDonnées] = useState({
    lesCyclesQueNotreEcolePropose: ""
  });

  useEffect(() => {
    getCurrentProfile();
    if (profile === null) {
      setInfoDonnées({
        lesCyclesQueNotreEcolePropose: ""
      });
    } else {
      setInfoDonnées({
        lesCyclesQueNotreEcolePropose: profile.lesCyclesQueNotreEcolePropose
      });
    }
  }, [loadingProfileEcole]);
  const { lesCyclesQueNotreEcolePropose } = stateInfoDonnées;
  return (
    <div className="fluid-container my-3 ">
      <div className="text-center mb-2">
        <h4
          style={{
            fontFamily: "sans-serif",
            fontSize: "40px",
            "border-bottom": "4px solid #51be78",
            display: "inline-block"
          }}
        >
          Quelques informations et données sur le collége
        </h4>
      </div>
      <h4 className="text-center pb-2" style={{ color: "#757572" }}>
        ~ Les cycles du collége ~
      </h4>
      <div className="row d-flex justify-content-center ">
        <div className="col-12 mx-5 px-5 mb-5 ">
          <div className="card  tab-card  ">
            <div className="card-header tab-card-header ">
              <ul
                className="nav nav-tabs card-header-tabs"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="one-tab"
                    data-toggle="tab"
                    href="#one"
                    role="tab"
                    aria-controls="One"
                    aria-selected="true"
                  >
                    Septieme
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="two-tab"
                    data-toggle="tab"
                    href="#two"
                    role="tab"
                    aria-controls="Two"
                    aria-selected="false"
                  >
                    Huitiéme
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="three-tab"
                    data-toggle="tab"
                    href="#three"
                    role="tab"
                    aria-controls="Three"
                    aria-selected="false"
                  >
                    Neuviéme
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active p-3"
                id="one"
                role="tabpanel"
                aria-labelledby="one-tab"
              >
                <h5 className="card-title">Cycle d'exploitation :</h5>
                <p className="card-text">{lesCyclesQueNotreEcolePropose[0]}</p>
              </div>
              <div
                className="tab-pane fade p-3"
                id="two"
                role="tabpanel"
                aria-labelledby="two-tab"
              >
                <h5 className="card-title">Cycle d'exploitation :</h5>
                <p className="card-text">{lesCyclesQueNotreEcolePropose[1]}</p>
              </div>
              <div
                className="tab-pane fade p-3"
                id="three"
                role="tabpanel"
                aria-labelledby="three-tab"
              >
                <h5 className="card-title">Cycle d'exploitation :</h5>
                <p className="card-text">{lesCyclesQueNotreEcolePropose[2]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Info_Données.prototype = {
  getCurrentProfile: PropTypes.func.isRequired,
  profileEcole: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profileEcole: state.profileEcole
});
export default connect(mapStateToProps, { getCurrentProfile })(Info_Données);
