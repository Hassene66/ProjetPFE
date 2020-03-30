import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { CreateProfile, getCurrentProfile } from "../../actions/profileEcole";
import { connect } from "react-redux";
import Spinner from "../../Components/Spinner";
import { Link, withRouter } from "react-router-dom";
const ContenuPageParameterEcole = ({
  getCurrentProfile,
  auth,
  profileEcole: { profile, loading },
  CreateProfile,
  history
}) => {
  const [formData, setFormData] = useState({
    LogoEcole: "",
    NomEcole: "",
    NumeroDeTel: "",
    Email: "",
    EmplacementDeEcole: "",
    LienFb: "",
    LienTwitter: "",
    LienLinkedIn: "",
    NbEleve: "",
    NbEnseignantCertifiés: "",
    tauxDeRéussite: "",
    QuiSommeNous: "",
    MotDeDirecteur: ""
  });

  //get current profile object a soon as ContenuPageParameterEcole page loades
  useEffect(() => {
    getCurrentProfile();
    if (profile === null) {
      setFormData({
        LogoEcole: "",
        NomEcole: "",
        NumeroDeTel: "",
        Email: "",
        EmplacementDeEcole: "",
        LienFb: "",
        LienTwitter: "",
        LienLinkedIn: "",
        NbEleve: "",
        NbEnseignantCertifiés: "",
        tauxDeRéussite: "",
        QuiSommeNous: "",
        MotDeDirecteur: ""
      });
    } else {
      setFormData({
        LogoEcole: profile.LogoEcole,
        NomEcole: profile.NomEcole,
        NumeroDeTel: profile.NumeroDeTel,
        Email: profile.Email,
        EmplacementDeEcole: profile.EmplacementDeEcole,
        LienFb: profile.LienFb,
        LienTwitter: profile.LienTwitter,
        LienLinkedIn: profile.LienLinkedIn,
        NbEleve: profile.NbEleve,
        NbEnseignantCertifiés: profile.NbEnseignantCertifiés,
        tauxDeRéussite: profile.tauxDeRéussite,
        QuiSommeNous: profile.QuiSommeNous,
        MotDeDirecteur: profile.MotDeDirecteur
      });
    }
  }, [loading]);

  const {
    LogoEcole,
    NomEcole,
    NumeroDeTel,
    Email,
    EmplacementDeEcole,
    LienFb,
    LienTwitter,
    LienLinkedIn,
    QuiSommeNous,
    MotDeDirecteur,
    NbEleve,
    NbEnseignantCertifiés,
    tauxDeRéussite
  } = formData;
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    if (profile === null) {
      CreateProfile(formData, history);
    } else {
      CreateProfile(formData, history, true);
    }
  };
  //if the profile is not loaded then show a spinner else show the ContenuPageParameterEcole
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <div>
      <form onSubmit={e => onSubmit(e)}>
        <div className="row">
          {/* //LOGO */}
          <div className="  col-sm-6 ">
            <div className="row p-5 ">
              <div className="col-sm-12  col-lg-10 px-0   ">
                <div className="form-group ">
                  <label>
                    <h5>Lien du logo de l'école</h5>
                  </label>
                  <div className=" xx">
                    <input
                      onChange={e => onChange(e)}
                      className="form-control mr-3"
                      type="text"
                      placeholder="logo de l'école ici"
                      value={LogoEcole}
                      name="LogoEcole"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*//NOM DE L'ECOLE */}
          <div className="col-sm-6">
            <div className="row p-5 ">
              <div className="col-sm-12  col-lg-10 px-0 ">
                <div className="form-group ">
                  <label>
                    <h5>Nom de l'école</h5>
                  </label>
                  <div className=" xx">
                    <input
                      onChange={e => onChange(e)}
                      className="form-control mr-3"
                      type="text"
                      placeholder="nom de l'ecole "
                      value={NomEcole}
                      name="NomEcole"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {/* //INFO-DE-CONTACT */}
          <div className="col-sm-6  px-5 my-4 ">
            <label className="mb-0">
              <h5 className="mb-0">Info de contact</h5>
            </label>
            <div className="infoElm">
              <div className="row ">
                <div className="col-sm-12  col-md-10 col-lg-8  x">
                  <span
                    className="iconify"
                    data-inline="false"
                    data-icon="vaadin:phone-landline"
                  ></span>
                  <input
                    onChange={e => onChange(e)}
                    className="form-control y"
                    type="text"
                    placeholder="Numéro de téléphone"
                    value={NumeroDeTel}
                    name="NumeroDeTel"
                  ></input>
                </div>
              </div>
            </div>
            <div className="infoElm">
              <div className="row">
                <div className="col-sm-12 col-md-10 col-lg-8  x">
                  <span
                    className="iconify"
                    data-inline="false"
                    data-icon="ic:outline-email"
                  ></span>
                  <input
                    onChange={e => onChange(e)}
                    className="form-control y"
                    type="text"
                    placeholder="Email "
                    name="Email"
                    value={Email}
                  ></input>
                </div>
              </div>
            </div>
            <div className="infoElm">
              <div className="row">
                <div className="col-sm-12 col-md-10 col-lg-8  x ">
                  <span
                    className="iconify"
                    data-inline="false"
                    data-icon="ic:sharp-location-on"
                  ></span>
                  <input
                    onChange={e => onChange(e)}
                    className="form-control y"
                    type="text"
                    placeholder="Emplacement de l'école"
                    name="EmplacementDeEcole"
                    value={EmplacementDeEcole}
                  ></input>
                </div>
              </div>
            </div>
          </div>

          {/* //RESEAUX-SOCIAUX */}
          <div className="col-sm-6 px-5 my-4 ">
            <label className="mb-0">
              <h5 className="mb-0">Réseaux sociaux</h5>
            </label>
            <div className="infoElm">
              <div className="row ">
                <div className=" col-sm-12  col-md-10 col-lg-8  x">
                  <span
                    className="iconify"
                    data-inline="false"
                    data-icon="ant-design:facebook-filled"
                  ></span>
                  <input
                    id="reseauSociaux"
                    className="form-control y"
                    type="text"
                    name="LienFb"
                    value={LienFb}
                    onChange={e => onChange(e)}
                    placeholder="Lien vers la page Facebook"
                  ></input>
                </div>
              </div>
            </div>
            <div className="infoElm">
              <div className="row">
                <div className=" col-sm-12  col-md-10 col-lg-8  x">
                  <span
                    className="iconify"
                    data-inline="false"
                    data-icon="uil:twitter"
                  ></span>
                  <input
                    className="form-control y"
                    type="text"
                    placeholder="Lien vers la page Twitter"
                    name="LienTwitter"
                    value={LienTwitter}
                    onChange={e => onChange(e)}
                  ></input>
                </div>
              </div>
            </div>
            <div className="infoElm">
              <div className="row">
                <div className=" col-sm-12  col-md-10 col-lg-8  x">
                  <span
                    className="iconify"
                    data-inline="false"
                    data-icon="ant-design:linkedin-filled"
                  ></span>
                  <input
                    className="form-control y"
                    type="text"
                    placeholder="Lien vers la page LinkedIn"
                    name="LienLinkedIn"
                    value={LienLinkedIn}
                    onChange={e => onChange(e)}
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* //QUI SOMME NOUS */}
          <div className="  col-sm-6 ">
            <div className="row p-5 ">
              <div className="col-sm-12  col-lg-10 px-0   ">
                <div className="form-group">
                  <label>
                    <h5>Qui somme nous ?</h5>
                  </label>
                  <textarea
                    className="form-control aa"
                    rows="6"
                    value={QuiSommeNous}
                    name="QuiSommeNous"
                    onChange={e => onChange(e)}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          {/*//MOT DU DIRECTEUR */}
          <div className="col-sm-6">
            <div className="row p-5 ">
              <div className="col-sm-12  col-lg-10 px-0 ">
                <div className="form-group">
                  <label>
                    <h5>Mot du directeur</h5>
                  </label>
                  <textarea
                    onChange={e => onChange(e)}
                    className="form-control aa"
                    rows="6"
                    value={MotDeDirecteur}
                    name="MotDeDirecteur"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* //nombre d'élèves */}
          <div className="  col-lg-3 ">
            <div className="row p-5 ">
              <div className="col-sm-8    px-0   ">
                <div className="form-group ">
                  <label>
                    <h5>Nombre d'élèves </h5>
                  </label>
                  <div className=" xx">
                    <input
                      onChange={e => onChange(e)}
                      className="form-control mr-3"
                      type="text"
                      placeholder="nombre d'élèves ici"
                      value={NbEleve}
                      name="NbEleve"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*//nombre d'enseignants certifiés */}
          <div className="col-lg-6">
            <div className="row p-5 ">
              <div className="col-sm-8    px-0 ">
                <div className="form-group ">
                  <label>
                    <h5>Nombre d'enseignants certifiés</h5>
                  </label>
                  <div className=" xx">
                    <input
                      onChange={e => onChange(e)}
                      className="form-control mr-3"
                      type="text"
                      placeholder="nombre d'enseignants certifiés ici"
                      value={NbEnseignantCertifiés}
                      name="NbEnseignantCertifiés"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*//taux de réussite */}
          <div className="col-lg-3">
            <div className="row p-5 ">
              <div className="col-sm-8   px-0 ">
                <div className="form-group ">
                  <label>
                    <h5>Taux de réussite</h5>
                  </label>
                  <div className=" xx">
                    <input
                      onChange={e => onChange(e)}
                      className="form-control mr-3"
                      type="text"
                      placeholder="taux de réussite ici "
                      value={tauxDeRéussite}
                      name="tauxDeRéussite"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="button mt-3 mb-5 ">
            Valider
          </button>
        </div>
      </form>
    </div>
  );
};

ContenuPageParameterEcole.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profileEcole: PropTypes.object.isRequired,
  CreateProfile: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  profileEcole: state.profileEcole
});
export default connect(mapStateToProps, { getCurrentProfile, CreateProfile })(
  withRouter(ContenuPageParameterEcole)
);
