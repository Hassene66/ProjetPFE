import React, { useState, useEffect, Fragment } from "react";
import "./Temoignage.css";
import person1 from "./Images/p1.png";
import person2 from "./Images/p2.png";
import person3 from "./Images/p3.png";
import { getCurrentProfile } from "../../actions/profileEcole";
import PropTypes from "prop-types";
import { connect } from "react-redux";
const Temoinage = ({
  getCurrentProfile,
  profileEcole: { profile, loadingProfileEcole },
}) => {
  const [stateTemoignage, setStateTemoignage] = useState({
    Témoinage: "",
  });
  useEffect(() => {
    getCurrentProfile();
    if (profile === null) {
      setStateTemoignage({
        Témoinage: "",
      });
    } else {
      setStateTemoignage({
        Témoinage: profile.Témoinage,
      });
    }
  }, [loadingProfileEcole]);
  const { Témoinage } = stateTemoignage;

  return (
    <div className="testemonial">
      <div className="testimonials">
        <div className="inner">
          <h1>Témoignage</h1>
          <div className="border"></div>

          <div className="row">
            <div className="col-md">
              <div className="testimonial">
                <img src={person1} alt="" />
                <div className="name">Marouene</div>

                <p>{Témoinage[0]}</p>
              </div>
            </div>

            <div className="col-md">
              <div className="testimonial">
                <img src={person2} alt="" />
                <div className="name">Aya</div>

                <p>{Témoinage[1]}</p>
              </div>
            </div>

            <div className="col-md">
              <div className="testimonial">
                <img src={person3} alt="" />
                <div className="name">Yosra</div>

                <p>{Témoinage[2]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Temoinage.prototype = {
  getCurrentProfile: PropTypes.func.isRequired,
  profileEcole: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  profileEcole: state.profileEcole,
});
export default connect(mapStateToProps, { getCurrentProfile })(Temoinage);
