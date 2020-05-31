import React, { useState, useEffect, Fragment } from "react";
import "./counter.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { getCurrentProfile } from "../../actions/profileEcole";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import student from "./Images/student1.svg";
import teacher from "./Images/teacher1.svg";
import goal from "./Images/goal.svg";

const Counter = ({
  getCurrentProfile,
  profileEcole: { profile, loadingProfileEcole },
}) => {
  const [stateCounter, setStateCounter] = useState({
    NbEleve: "",
    NbEnseignantCertifiés: "",
    tauxDeRéussite: "",
    visible1: false,
    visible2: false,
    visible3: false,
  });

  useEffect(() => {
    getCurrentProfile();
    if (profile === null) {
      setStateCounter({
        NbEleve: "",
        NbEnseignantCertifiés: "",
        tauxDeRéussite: "",
      });
    } else {
      setStateCounter({
        NbEleve: profile.NbEleve,
        NbEnseignantCertifiés: profile.NbEnseignantCertifiés,
        tauxDeRéussite: profile.tauxDeRéussite,
      });
    }
  }, [loadingProfileEcole]);
  const {
    tauxDeRéussite,
    NbEnseignantCertifiés,
    NbEleve,
    visible1,
    visible2,
    visible3,
  } = stateCounter;

  const onChangeVisibility1 = (isActive) => {
    setStateCounter({ ...stateCounter, visible1: isActive });
  };
  const onChangeVisibility2 = (isActive) => {
    setStateCounter({ ...stateCounter, visible2: isActive });
  };
  const onChangeVisibility3 = (isActive) => {
    setStateCounter({ ...stateCounter, visible3: isActive });
  };
  return (
    <section class="counters ">
      <div class=" d-flex justify-content-around  row">
        <div className="col-sm-4 ">
          <div className="count ">
            <img src={student} alt="nombre élève" height="100" width="100" />
            <VisibilitySensor
              stayVisible={true}
              partialVisibility
              onChange={(e) => onChangeVisibility1(e)}
              active={!visible1}
            >
              {({ isVisible }) => (
                <div style={{ height: 75, fontSize: "40px" }}>
                  {isVisible ? <CountUp end={NbEleve} /> : null}
                </div>
              )}
            </VisibilitySensor>
            <h4>élèves inscrit</h4>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="count">
            <img
              src={teacher}
              alt="nombre d'enseignants ceritifié"
              height="100"
              width="100"
            />
            <VisibilitySensor
              stayVisible={true}
              partialVisibility
              onChange={(e) => onChangeVisibility2(e)}
              active={!visible2}
            >
              {({ isVisible }) => (
                <div style={{ height: 75, fontSize: "40px" }}>
                  {isVisible ? <CountUp end={NbEnseignantCertifiés} /> : null}
                </div>
              )}
            </VisibilitySensor>
            <h4>enseignents certifiés</h4>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="count">
            <img src={goal} alt="taux de réussite" height="100" width="100" />
            <VisibilitySensor
              stayVisible={true}
              partialVisibility
              onChange={(e) => onChangeVisibility3(e)}
              active={!visible3}
            >
              {({ isVisible }) => (
                <div style={{ height: 75, fontSize: "40px" }}>
                  {isVisible ? <CountUp end={tauxDeRéussite} /> : null}%
                </div>
              )}
            </VisibilitySensor>
            <h4>taux de réussite</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

Counter.prototype = {
  getCurrentProfile: PropTypes.func.isRequired,
  profileEcole: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  profileEcole: state.profileEcole,
});
export default connect(mapStateToProps, { getCurrentProfile })(Counter);
