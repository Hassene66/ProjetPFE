import React, { useState, useEffect } from "react";
import axios from "axios";
import { setAlert } from "../../actions/alert";
import Alert from "../../Components/alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const CreerCompte = ({ setAlert }) => {
  const [accountAdminData, setAccountAdminData] = useState({
    prénomAdmin: "",
    nomAdmin: "",
    identifiantAdmin: "",
    motDePasseAdmin: "",
  });
  const [accountEnseignantData, setAccountEnseignantData] = useState({
    prenomEnseignant: "",
    nomEnseignant: "",
    identifiantEnseignant: "",
    motDePasseEnseignant: "",
    niveauEnseigné1: "",
    classeEnseigné1: "",
    matiéreEnseigné: "",
  });
  const [accountEléveData, setAccountEléveData] = useState({
    prénomEléve: "",
    nomEléve: "",
    identifiantEléve: "",
    motDePasseEléve: "",
    niveauEléve: "",
    classeEléve: "",
  });
  const {
    motDePasseAdmin,
    identifiantAdmin,
    nomAdmin,
    prénomAdmin,
  } = accountAdminData;
  const {
    prenomEnseignant,
    nomEnseignant,
    identifiantEnseignant,
    motDePasseEnseignant,
    niveauEnseigné1,
    classeEnseigné1,
    matiéreEnseigné,
  } = accountEnseignantData;
  const {
    prénomEléve,
    nomEléve,
    identifiantEléve,
    motDePasseEléve,
    niveau,
    classe,
  } = accountEléveData;
  const onchange1 = (e) => {
    setAccountAdminData({
      ...accountAdminData,
      [e.target.name]: e.target.value,
    });
  };
  const onchange2 = (e) => {
    setAccountEnseignantData({
      ...accountEnseignantData,
      [e.target.name]: e.target.value,
    });
  };
  const onchange3 = (e) => {
    setAccountEléveData({
      ...accountEléveData,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit1 = (e) => {
    e.preventDefault();
    const profileAdmin = {};
    profileAdmin.typeUtilisateur = "admin";
    profileAdmin.prénom = prénomAdmin;
    profileAdmin.nom = nomAdmin;
    profileAdmin.identifiant = identifiantAdmin;
    profileAdmin.motDePasse = motDePasseAdmin;
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify(profileAdmin);
    axios
      .post("/api/users/", body, config)
      .then(
        setAccountAdminData({
          prénomAdmin: "",
          nomAdmin: "",
          identifiantAdmin: "",
          motDePasseAdmin: "",
        })
      )
      .then(setAlert("Compte a été créé avec succès", "success"));
  };
  const onSubmit2 = (e) => {
    e.preventDefault();
    const classeEnseigné = classeEnseigné1.split(",");
    const niveauEnseigné = niveauEnseigné1.split(",");
    const profileEnseignant = {
      classeEnseigné,
      niveauEnseigné,
      matiéreEnseigné,
    };
    const AccountEnseignant = {};
    AccountEnseignant.typeUtilisateur = "enseignant";
    AccountEnseignant.prénom = prenomEnseignant;
    AccountEnseignant.nom = nomEnseignant;
    AccountEnseignant.identifiant = identifiantEnseignant;
    AccountEnseignant.motDePasse = motDePasseEnseignant;
    AccountEnseignant.profileEnseignant = profileEnseignant;
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify(AccountEnseignant);
    axios
      .post("/api/users/", body, config)
      .then((res) => console.log(res.data));
    setAccountEnseignantData({
      prenomEnseignant: "",
      nomEnseignant: "",
      identifiantEnseignant: "",
      motDePasseEnseignant: "",
      niveauEnseigné1: "",
      classeEnseigné1: "",
      matiéreEnseigné: "",
    }).then(setAlert("Compte a été créé avec succès", "success"));
  };

  const onSubmit3 = (e) => {
    e.preventDefault();

    const profileEleve = {
      niveau,
      classe,
    };
    const AccountEleve = {};
    AccountEleve.typeUtilisateur = "élève";
    AccountEleve.prénom = prénomEléve;
    AccountEleve.nom = nomEléve;
    AccountEleve.identifiant = identifiantEléve;
    AccountEleve.motDePasse = motDePasseEléve;
    AccountEleve.profileEleve = profileEleve;
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify(AccountEleve);
    axios
      .post("/api/users/", body, config)
      .then((res) => console.log(res.data));
    setAccountEléveData({
      prénomEléve,
      nomEléve,
      identifiantEléve,
      motDePasseEléve,
      niveau,
      classe,
    }).then(setAlert("Compte a été créé avec succès", "success"));
  };

  return (
    <div className="col p-3">
      <Alert />
      <h1>Créer compte</h1>
      <div className="row d-flex justify-content-center ">
        <div className="col-12">
          <div className="card  tab-card  ">
            <div className="card-header tab-card-header p-0 ">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="AdminForm">
                  <a
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Administrateur
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Enseignant
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="contact-tab"
                    data-toggle="tab"
                    href="#contact"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    Élève
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="fluid-container">
                  <form onSubmit={(e) => onSubmit1(e)}>
                    <div className="row">
                      <div className="col ml-3 mt-3">
                        <div className="form-group">
                          <label htmlFor="prénomAdmin">Prénom</label>
                          <input
                            type="text"
                            className="form-control w-75"
                            id="prénomAdmin"
                            aria-describedby="prenomAdmin"
                            placeholder="Prénom"
                            name="prénomAdmin"
                            value={prénomAdmin}
                            onChange={(e) => onchange1(e)}
                            required
                            minlength="2"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="nomAdmin">Nom</label>
                          <input
                            type="text"
                            className="form-control w-75"
                            id="nomAdmin"
                            placeholder="Nom"
                            name="nomAdmin"
                            value={nomAdmin}
                            onChange={(e) => onchange1(e)}
                            required
                            minlength="2"
                          />
                        </div>
                      </div>
                      <div className="col mt-3">
                        <div className="form-group">
                          <label htmlFor="Identifiant">Identifiant</label>
                          <input
                            type="text"
                            className="form-control w-75"
                            id="Identifiant"
                            aria-describedby="Identifiant"
                            placeholder="identifiant"
                            name="identifiantAdmin"
                            value={identifiantAdmin}
                            onChange={(e) => onchange1(e)}
                            required
                            minlength="7"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="motDePasseAdmin">Mot de passe </label>
                          <input
                            type="password"
                            className="form-control w-75"
                            id="motDePasseAdmin"
                            placeholder="Mot de passe"
                            name="motDePasseAdmin"
                            value={motDePasseAdmin}
                            onChange={(e) => onchange1(e)}
                            required
                            minlength="6"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center my-3">
                      <button type="submit" className="btn btn-primary">
                        Créer Compte
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="fluid-container">
                  <form onSubmit={(e) => onSubmit2(e)}>
                    <div className="row">
                      <div className="col ml-3 mt-3">
                        <div className="form-group">
                          <label htmlFor="prenomEnseignant">Prénom</label>
                          <input
                            type="text"
                            className="form-control w-75"
                            id="prenomEnseignant"
                            aria-describedby="prenomEnseignant"
                            placeholder="Prénom "
                            name="prenomEnseignant"
                            value={prenomEnseignant}
                            onChange={(e) => onchange2(e)}
                            required
                            minlength="2"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="nomEnseignant">Nom</label>
                          <input
                            type="text"
                            className="form-control w-75"
                            id="nomEnseignant"
                            placeholder="Nom"
                            name="nomEnseignant"
                            value={nomEnseignant}
                            onChange={(e) => onchange2(e)}
                            required
                            minlength="2"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="identifiantEnseignant">
                            Identifiant
                          </label>
                          <input
                            type="text"
                            className="form-control w-75"
                            id="identifiantEnseignant"
                            placeholder="identifiant"
                            name="identifiantEnseignant"
                            value={identifiantEnseignant}
                            onChange={(e) => onchange2(e)}
                            required
                            minlength="7"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="motDePasseEnseignant">
                            Mot de passe
                          </label>
                          <input
                            type="password"
                            className="form-control w-75"
                            id="motDePasseEnseignant"
                            placeholder="mot de passe"
                            name="motDePasseEnseignant"
                            value={motDePasseEnseignant}
                            onChange={(e) => onchange2(e)}
                            required
                            minlength="6"
                          />
                        </div>
                      </div>
                      <div className="col mt-3">
                        <div className="form-group">
                          <label htmlFor="matiéreEnseigné">
                            Matiére Enseigné
                          </label>
                          <input
                            type="text"
                            className="form-control w-75"
                            id="matiéreEnseigné"
                            placeholder="matiére Enseigné"
                            name="matiéreEnseigné"
                            value={matiéreEnseigné}
                            onChange={(e) => onchange2(e)}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="classeEnseigné1">
                            Classe Enseigné
                          </label>
                          <input
                            type="text"
                            className="form-control w-75"
                            id="classeEnseigné1"
                            aria-describedby="classeEnseigné1"
                            placeholder="eg. 7B2 ,8B1 ,9B4 ect.."
                            name="classeEnseigné1"
                            value={classeEnseigné1}
                            onChange={(e) => onchange2(e)}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="niveauEnseigné1">
                            Niveau Enseigné
                          </label>
                          <input
                            type="text"
                            className="form-control w-75"
                            id="niveauEnseigné1"
                            placeholder="eg.  huitième ,neuvième ect.."
                            name="niveauEnseigné1"
                            value={niveauEnseigné1}
                            onChange={(e) => onchange2(e)}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center my-3">
                      <button type="submit" className="btn btn-primary">
                        Créer Compte
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                <div className="fluid-container">
                  <form onSubmit={(e) => onSubmit3(e)}>
                    <div className="row">
                      <div className="col ml-3 mt-3">
                        <div className="form-group">
                          <label htmlFor="prénomEléve">Prénom</label>
                          <input
                            type="text"
                            className="form-control w-75"
                            id="prénomEléve"
                            aria-describedby="prenomAdmin"
                            placeholder="Prénom "
                            name="prénomEléve"
                            value={prénomEléve}
                            onChange={(e) => onchange3(e)}
                            required
                            minlength="2"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="nomEléve">Nom</label>
                          <input
                            type="text"
                            className="form-control w-75"
                            id="nomEléve"
                            placeholder="Nom"
                            name="nomEléve"
                            value={nomEléve}
                            onChange={(e) => onchange3(e)}
                            required
                            minlength="2"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="identifiantEléve">Identifiant</label>
                          <input
                            type="text"
                            className="form-control w-75"
                            id="identifiantEléve"
                            placeholder="identifiant"
                            name="identifiantEléve"
                            value={identifiantEléve}
                            onChange={(e) => onchange3(e)}
                            required
                            minlength="7"
                          />
                        </div>
                      </div>
                      <div className="col mt-3">
                        <div className="form-group">
                          <label htmlFor="motDePasseEléve">Mot de passe</label>
                          <input
                            type="password"
                            className="form-control w-75"
                            id="motDePasseEléve"
                            placeholder="mot de passe"
                            name="motDePasseEléve"
                            value={motDePasseEléve}
                            onChange={(e) => onchange3(e)}
                            required
                            minlength="6"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="NiveauEléve">Niveau</label>
                          <input
                            type="text"
                            className="form-control w-75"
                            id="NiveauEléve"
                            aria-describedby="NiveauEléve"
                            placeholder="eg. septième ,huitième ,neuvième ect.."
                            name="niveau"
                            value={niveau}
                            onChange={(e) => onchange3(e)}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="classeEléve">Classe</label>
                          <input
                            type="text"
                            className="form-control w-75"
                            id="classeEléve"
                            placeholder="eg. 7B6"
                            name="classe"
                            value={classe}
                            onChange={(e) => onchange3(e)}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center my-3">
                      <button type="submit" className="btn btn-primary">
                        Créer Compte
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
CreerCompte.prototype = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { setAlert })(CreerCompte);
