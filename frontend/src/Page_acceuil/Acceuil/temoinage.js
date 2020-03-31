import React, { useState, useEffect, Fragment } from "react";
import image1 from "./Images/person-1.jpg";
import image2 from "./Images/person-2.jpg";
import image3 from "./Images/person-1.jpg";
import "./temoinage.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getCurrentProfile } from "../../actions/profileEcole";
const Temoinage = ({
  getCurrentProfile,
  profileEcole: { profile, loadingProfileEcole }
}) => {
  const [stateTemoignage, setStateTemoignage] = useState({
    Témoinage: ""
  });

  useEffect(() => {
    getCurrentProfile();
    if (profile === null) {
      setStateTemoignage({
        Témoinage: ""
      });
    } else {
      setStateTemoignage({
        Témoinage: profile.Témoinage
      });
    }
  }, [loadingProfileEcole]);
  const { Témoinage } = stateTemoignage;

  return (
    <div className="tempoinage-color ">
      <div className="container d-flex justify-content-center mt-0">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner  ">
            <div className="carousel-item active mx-auto">
              <img
                className="d-block  rounded-circle mx-auto my-3 mt-5 "
                src={image1}
                alt="First slide"
                width="120"
                height="120"
              />
              <blockquote className="pb-5 mb-5">{Témoinage[0]}</blockquote>
            </div>
            <div className="carousel-item">
              <img
                className="d-block  rounded-circle mx-auto my-3 mt-5"
                src={image2}
                alt="Second slide"
                width="120"
                height="120"
              />
              <blockquote className="pb-5 mb-5">{Témoinage[1]}</blockquote>
            </div>
            <div className="carousel-item">
              <img
                className="d-block  rounded-circle mx-auto my-3 mt-5"
                src={image3}
                alt="Third slide"
                width="120"
                height="120"
              />
              <blockquote className="pb-5 mb-5">{Témoinage[2]}</blockquote>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};

Temoinage.prototype = {
  getCurrentProfile: PropTypes.func.isRequired,
  profileEcole: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profileEcole: state.profileEcole
});
export default connect(mapStateToProps, { getCurrentProfile })(Temoinage);
