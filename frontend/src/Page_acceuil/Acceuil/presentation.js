import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCurrentProfile } from "../../actions/profileEcole";
import imageQuiSommeNous from "./Images/about-us.png";
const Presentation = ({
  getCurrentProfile,
  profileEcole: { profile, loadingProfileEcole }
}) => {
  const [stateQuiSommeNous, setStateQuiSommeNous] = useState({
    QuiSommeNous: ""
  });

  useEffect(() => {
    getCurrentProfile();
    if (profile === null) {
      setStateQuiSommeNous({
        QuiSommeNous: ""
      });
    } else {
      setStateQuiSommeNous({
        QuiSommeNous: profile.QuiSommeNous
      });
    }
  }, [loadingProfileEcole]);
  const { QuiSommeNous } = stateQuiSommeNous;

  return (
    <section>
      <div className="mx-5 rounded">
        <div className="card my-5 shadow-lg bg-white ">
          <div className="row no-gutters">
            <div className="col-md-4 " style={{ backgroundColor: "#ededed" }}>
              <img
                src={imageQuiSommeNous}
                className="card-img  "
                alt="..."
                height="250"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Qui somme nous ?</h5>
                <p className="card-text">{QuiSommeNous}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Presentation.prototype = {
  getCurrentProfile: PropTypes.func.isRequired,
  profileEcole: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profileEcole: state.profileEcole
});
export default connect(mapStateToProps, { getCurrentProfile })(Presentation);
