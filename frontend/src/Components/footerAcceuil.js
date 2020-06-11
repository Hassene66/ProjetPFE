import React, { useState, useEffect, Fragment } from "react";
import "./footerAcceuil.css";
import { getCurrentProfile } from "../actions/profileEcole";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";

const Footer = ({
  getCurrentProfile,
  profileEcole: { profile, loadingProfileEcole },
}) => {
  const [stateFooterAcceuil, setStateFooterAcceuil] = useState({
    NumeroDeTel: "",
    Email: "",
    EmplacementDeEcole: "",
    LienFb: "",
    LienTwitter: "",
    LienLinkedIn: "",
    NomEcole: "",
    newsletter: "",
  });

  useEffect(() => {
    getCurrentProfile();
    if (profile === null) {
      setStateFooterAcceuil({
        NumeroDeTel: "",
        Email: "",
        EmplacementDeEcole: "",
        LienFb: "",
        LienTwitter: "",
        LienLinkedIn: "",
        NomEcole: "",
      });
    } else {
      setStateFooterAcceuil({
        NumeroDeTel: profile.NumeroDeTel,
        Email: profile.Email,
        EmplacementDeEcole: profile.EmplacementDeEcole,
        LienFb: profile.LienFb,
        LienTwitter: profile.LienTwitter,
        LienLinkedIn: profile.LienLinkedIn,
        NomEcole: profile.NomEcole,
      });
    }
  }, [loadingProfileEcole]);
  const {
    NumeroDeTel,
    Email,
    EmplacementDeEcole,
    LienFb,
    LienTwitter,
    LienLinkedIn,
    NomEcole,
  } = stateFooterAcceuil;
  const onChange = (e) => {
    setStateFooterAcceuil({
      ...stateFooterAcceuil,
      newsletter: e.target.value,
    });
  };
  const handleClick1 = (e) => {
    const letter = {
      newsletter: stateFooterAcceuil.newsletter,
    };

    axios
      .post("/Newsletter", letter)
      .then(setStateFooterAcceuil({ newsletter: e.target.value }));
  };

  return (
    <div>
      <footer className="pt-1 pb-1 " id="contact">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="col-lg-4 col-md-4 col-sm-6 mt-2 mb-4">
              <h5 className="mb-4 font-weight-bold">NOUS CONTACTER</h5>
              <h6 className="mb-4"> Avez vous des questions ?</h6>
              <ul className="f-address pl-0">
                <li>
                  <div className="row">
                    <div className="col-1">
                      <i className="fas fa-map-marker" />
                    </div>
                    <div className="col-10">
                      <h6 className="font-weight-bold mb-0">Adresse :</h6>
                      <p className="footer-paragraph">{EmplacementDeEcole}</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="col-1">
                      <i className="far fa-envelope" />
                    </div>
                    <div className="col-10">
                      <h6 className="font-weight-bold mb-0">Email :</h6>
                      <p className="footer-paragraph">{Email}</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="col-1">
                      <i className="fas fa-phone-volume" />
                    </div>
                    <div className="col-10">
                      <h6 className="font-weight-bold mb-0">Téléphone :</h6>
                      <p className="footer-paragraph">{NumeroDeTel}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 mt-2 mb-4  text-center">
              <div className="container mt-0">
                <div>
                  <h5 className="mb-4 font-weight-bold d-flex justify-content-right ">
                    GOOGLE MAPS
                  </h5>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d811.9952402796937!2d11.06490782920535!3d35.504748998764754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDMwJzE3LjEiTiAxMcKwMDMnNTUuNiJF!5e0!3m2!1sen!2stn!4v1583764094683!5m2!1sen!2stn"
                    width="100%"
                    height="200"
                    frameborder="0"
                    allowfullscreen=""
                    className="pr-5 "
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6 mt-2 mb-4">
              <h5 className="mb-4 font-weight-bold mr-5">
                S'INSCRIRE AU NEWSLETTER
              </h5>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Votre adresse email"
                  onChange={(e) => onChange(e)}
                  value={stateFooterAcceuil.newsletter}
                />

                <button
                  type="button"
                  className="btn btn-primary "
                  onClick={(e) => handleClick1(e)}
                >
                  Ok
                </button>
              </div>
              <div className="mt-5">
                <h5 className="mb-4 font-weight-bold ">RÉSEAUX SOCIAUX</h5>
                <ul className="social-pet mt-4 pl-0 ">
                  <li>
                    <a href={LienFb} target="_blank" title="facebook">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href={LienTwitter} target="_blank" title="twitter">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href={LienLinkedIn} target="_blank" title="linked-in">
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Copyright */}
      <section className="copyright_black mr-0">
        <div className="container">
          <div className="row ">
            <div className="col-md-12  ">
              <div className="text-center text-white ">
                © 2020 {NomEcole}. Tous Droits Réservés.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Footer.prototype = {
  getCurrentProfile: PropTypes.func.isRequired,
  profileEcole: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  profileEcole: state.profileEcole,
});
export default connect(mapStateToProps, { getCurrentProfile })(Footer);
