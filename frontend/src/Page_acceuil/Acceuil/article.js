import React, { useState, useEffect, Fragment } from "react";
import { getCurrentProfile } from "../../actions/profileEcole";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import image33 from "./Images/test.svg";
import image4 from "./Images/learning.svg";

import "./article.css";
const Article = ({
  getCurrentProfile,
  profileEcole: { profile, loadingProfileEcole },
}) => {
  const [stateErticle, setStateErticle] = useState({
    LesPlusDeNotreEcole: "",
  });

  useEffect(() => {
    getCurrentProfile();
    if (profile === null) {
      setStateErticle({
        LesPlusDeNotreEcole: "",
      });
    } else {
      setStateErticle({
        LesPlusDeNotreEcole: profile.LesPlusDeNotreEcole,
      });
    }
  }, [loadingProfileEcole]);
  const { LesPlusDeNotreEcole } = stateErticle;

  return (
    <section className="posts mx-5">
      <div className="fluid-container">
        <div className="row">
          <div className="col-md-6">
            <article>
              <div className="pic">
                <img className="my-3" width={121} src={image4} alt="" />
              </div>
              <div className="info">
                <h3>La meilleure méthode d'apprentissage</h3>
                <p>{LesPlusDeNotreEcole[0]}</p>
              </div>
            </article>
          </div>
          <div className="col-md-6">
            <article>
              <div className="pic">
                <img className="my-3" width={121} src={image33} alt="" />
              </div>
              <div className="info">
                <h3>Résultat impressionnant de nos élèves</h3>
                <p>{LesPlusDeNotreEcole[1]}</p>
              </div>
            </article>
          </div>
        </div>
      </div>
      {/* / container */}
    </section>
  );
};

Article.prototype = {
  getCurrentProfile: PropTypes.func.isRequired,
  profileEcole: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  profileEcole: state.profileEcole,
});
export default connect(mapStateToProps, { getCurrentProfile })(Article);
