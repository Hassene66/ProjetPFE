import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import Spinner from "../../Components/Spinner";
import { setAlert } from "../../actions/alert";
import Alert from "../../Components/alert";
const ContacterÉlève = ({ setAlert, auth: { user } }) => {
  const [formData, setFormData] = useState({
    classe: user.profileEnseignant.classeEnseigné[0],
    listeDesEleves: [],
    élèveSelectioné: "",
    submitted: false,
    count: 0,
    sujet: "",
    message: "",
  });
  const [loadingState, setloadingState] = useState(false);
  const {
    listeDesEleves,
    classe,
    ListeEnseignant,
    élèveSelectioné,
    sujet,
    message,
    count,
  } = formData;

  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ classe });

    axios.post("/Enseignant/mesEleves", body, config).then((res) => {
      if (typeof res.data === "object") {
        setFormData({
          ...formData,
          listeDesEleves: res.data,
          élèveSelectioné: "1- " + res.data[0].prénom + " " + res.data[0].nom,
        });
        setloadingState({ loadingState: true });
      } else {
        if (typeof res.data === "string") {
          setFormData({
            ...formData,
            listeDesEleves: res.data,
            submitted: true,
          });
          setloadingState({ loadingState: true });
        }
      }
    });
  }, [classe]);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const lastcount = Number(élèveSelectioné.charAt(0)) - 1;
    const Message = {};
    Message.prenomEmetteur = user.prénom;
    Message.nomEmetteur = user.nom;
    Message.identifiantEmetteur = user.identifiant;
    Message.classeEmetteur = "";
    Message.prenomDestinataire = listeDesEleves[lastcount].prénom;
    Message.nomDestinataire = listeDesEleves[lastcount].nom;
    Message.identifiantDestinataire = listeDesEleves[lastcount].identifiant;
    Message.Sujet = sujet;
    Message.Message = message;
    const body = {};
    body.ListeDesMesages = Message;

    axios
      .post("/Contacter/Enseignant", body, config)
      .then((res) => setAlert(res.data.message, "success"));
  };

  return loadingState === false ? (
    <Spinner />
  ) : (
    <div className="Contact-enseignant col p-3">
      <Alert />
      <h1 className="pb-3">Contacter Élève</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <h6>Classe :</h6>
        <select
          className="form-control w-25"
          value={classe}
          onChange={(e) => onChange(e)}
          name="classe"
        >
          {user.profileEnseignant.classeEnseigné.map((classe) => {
            return (
              <option key={classe} value={classe}>
                {classe}
              </option>
            );
          })}
        </select>

        {typeof listeDesEleves === "string" ? (
          <h3 className="text-center mt-5">Pas des élèves dans cette classe</h3>
        ) : (
          <Fragment>
            <h6>Destinataire :</h6>
            <select
              className="form-control w-25"
              id="enseignant"
              value={élèveSelectioné}
              onChange={(e) => onChange(e)}
              name="élèveSelectioné"
            >
              {listeDesEleves.map((elem, idx) => {
                return (
                  <option
                    key={idx}
                    value={idx + 1 + "- " + elem.prénom + " " + elem.nom}
                  >
                    {idx + 1 + "- " + elem.prénom + " " + elem.nom}
                  </option>
                );
              })}
            </select>
            <div className="form-group mt-2">
              <h6>Sujet :</h6>
              <input
                type="text"
                className="form-control w-25"
                id="saisieEmail"
                aria-describedby="emailHelp"
                name="sujet"
                required
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className=" mt-2">
              <h6>Message :</h6>
              <textarea
                type="text"
                id="saisieMessage"
                aria-describedby="saisieMessage"
                rows="6"
                cols="100"
                name="message"
                required
                onChange={(e) => onChange(e)}
              ></textarea>
            </div>
            <div className="mt-2">
              <button type="submit" class="btn btn-primary">
                Envoyer
              </button>
            </div>
          </Fragment>
        )}
      </form>
    </div>
  );
};
ContacterÉlève.prototype = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { setAlert })(ContacterÉlève);
