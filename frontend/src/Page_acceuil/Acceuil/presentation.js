import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCurrentProfile } from "../../actions/profileEcole";
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
            <div className="col-md-4 ">
              <img
                src="data:image/png;base64,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"
                className="card-img h-100 "
                alt="..."
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
