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
  const {
    tauxDeRéussite,
    NbEnseignantCertifiés,
    NbEleve,
    visible1,
    visible2,
    visible3
  } = stateCounter;

  const onChangeVisibility1 = isActive => {
    setStateCounter({ ...stateCounter, visible1: isActive });
  };
  const onChangeVisibility2 = isActive => {
    setStateCounter({ ...stateCounter, visible2: isActive });
  };
  const onChangeVisibility3 = isActive => {
    setStateCounter({ ...stateCounter, visible3: isActive });
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
              onChange={e => onChangeVisibility1(e)}
              active={!visible1}
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
              onChange={e => onChangeVisibility2(e)}
              active={!visible2}
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
              onChange={e => onChangeVisibility3(e)}
              active={!visible3}
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
