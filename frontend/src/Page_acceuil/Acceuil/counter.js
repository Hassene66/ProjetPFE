import React, { useState, useEffect, Fragment } from "react";
import "./counter.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { getCurrentProfile } from "../../actions/profileEcole";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Counter = ({
  getCurrentProfile,
  profileEcole: { profile, loadingProfileEcole }
}) => {
  const [stateCounter, setStateCounter] = useState({
    NbEleve: "",
    NbEnseignantCertifiés: "",
    tauxDeRéussite: "",
    visible1: false,
    visible2: false,
    visible3: false
  });

  useEffect(() => {
    getCurrentProfile();
    if (profile === null) {
      setStateCounter({
        NbEleve: "",
        NbEnseignantCertifiés: "",
        tauxDeRéussite: ""
      });
    } else {
      setStateCounter({
        NbEleve: profile.NbEleve,
        NbEnseignantCertifiés: profile.NbEnseignantCertifiés,
        tauxDeRéussite: profile.tauxDeRéussite
      });
    }
  }, [loadingProfileEcole]);
  const { tauxDeRéussite, NbEnseignantCertifiés, NbEleve } = stateCounter;

  const onChangeVisibility1 = isVisible => {
    setStateCounter({ visible1: isVisible });
  };
  const onChangeVisibility2 = isVisible => {
    setStateCounter({ visible2: isVisible });
  };
  const onChangeVisibility3 = isVisible => {
    setStateCounter({ visible3: isVisible });
  };
  return (
    <section class="counters">
      <div class=" d-flex justify-content-around  row">
        <div className="col-sm-4 ">
          <div className="count ">
            <span
              class="iconify info-ecole"
              data-inline="false"
              data-icon="fa-solid:graduation-cap"
            ></span>
            <VisibilitySensor
              stayVisible={true}
              partialVisibility
              onChange={tauxDeRéussite}
              active={!stateCounter.visible1}
            >
              {({ isVisible }) => (
                <div style={{ height: 75, fontSize: "50px" }}>
                  {isVisible ? <CountUp end={NbEleve} /> : null}
                </div>
              )}
            </VisibilitySensor>
            <h3>élèves inscrit</h3>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="count">
            <span
              class="iconify info-ecole"
              data-inline="false"
              data-icon="fa-solid:chalkboard-teacher"
            ></span>
            <VisibilitySensor
              stayVisible={true}
              partialVisibility
              onChange={NbEnseignantCertifiés}
              active={!stateCounter.visible2}
            >
              {({ isVisible }) => (
                <div style={{ height: 75, fontSize: "50px" }}>
                  {isVisible ? <CountUp end={NbEnseignantCertifiés} /> : null}
                </div>
              )}
            </VisibilitySensor>
            <h3>enseignents certifiés</h3>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="count">
            <span
              class="iconify info-ecole"
              data-inline="false"
              data-icon="ic:baseline-percentage"
            ></span>
            <VisibilitySensor
              stayVisible={true}
              partialVisibility
              onChange={NbEleve}
              active={!stateCounter.visible3}
            >
              {({ isVisible }) => (
                <div style={{ height: 75, fontSize: "50px" }}>
                  {isVisible ? <CountUp end={tauxDeRéussite} /> : null}
                </div>
              )}
            </VisibilitySensor>
            <h3>taux de réussite</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

Counter.prototype = {
  getCurrentProfile: PropTypes.func.isRequired,
  profileEcole: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profileEcole: state.profileEcole
});
export default connect(mapStateToProps, { getCurrentProfile })(Counter);
