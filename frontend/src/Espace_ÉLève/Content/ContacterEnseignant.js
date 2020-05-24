import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import Spinner from "../../Components/Spinner";
import { setAlert } from "../../actions/alert";
import Alert from "../../Components/alert";
const ContacterEnseignant = ({ setAlert, auth: { user } }) => {
  const [formData, setFormData] = useState({
    ListeEnseignant: [],
    count: 0,
    EnseignantSélectionné: "",
    sujet: "",
    message: "",
  });
  const [loadingState, setloadingState] = useState(false);
  const {
    ListeEnseignant,
    EnseignantSélectionné,
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
    const MonClasse = user.profileEleve.classe;
    const body = JSON.stringify({ MonClasse });
    axios.post("/Contacter", body, config).then((res) => {
      if (typeof res.data === "object") {
        setFormData({
          ...formData,
          ListeEnseignant: res.data,
          EnseignantSélectionné:
            "1- " + res.data[0].prénom + " " + res.data[0].nom,
        });
        setloadingState({ loadingState: true });
      } else {
        if (typeof res.data === "string") {
          setFormData({
            ...formData,
            ListeEnseignant: res.data,
            EnseignantSélectionné:
              "1- " + res.data[0].prénom + " " + res.data[0].nom,
          });
          setloadingState({ loadingState: true });
        }
      }
    });
  }, []);

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
    const lastcount = Number(EnseignantSélectionné.charAt(0)) - 1;

    const Message = {};
    Message.prenomEmetteur = user.prénom;
    Message.nomEmetteur = user.nom;
    Message.identifiantEmetteur = user.identifiant;
    Message.classeEmetteur = user.profileEleve.classe;
    Message.prenomDestinataire = ListeEnseignant[lastcount].prénom;
    Message.nomDestinataire = ListeEnseignant[lastcount].nom;
    Message.identifiantDestinataire = ListeEnseignant[lastcount].identifiant;
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
      <h1 className="pb-3">Contacter Enseignant</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <h6>Destinataire :</h6>
        <select
          className="form-control w-25"
          id="enseignant"
          value={EnseignantSélectionné}
          onChange={(e) => onChange(e)}
          name="EnseignantSélectionné"
        >
          {ListeEnseignant.map((Ens, idx) => {
            return (
              <option
                key={idx}
                value={idx + 1 + "- " + Ens.prénom + " " + Ens.nom}
              >
                {idx + 1 + "- " + Ens.prénom + " " + Ens.nom}
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
      </form>
    </div>
  );
};
ContacterEnseignant.prototype = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { setAlert })(ContacterEnseignant);
