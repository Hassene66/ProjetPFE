import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import Alert from "../../Components/alert";
import { usePromiseTracker } from "react-promise-tracker";
import { trackPromise } from "react-promise-tracker";
import PropTypes from "prop-types";
import bsCustomFileInput from "bs-custom-file-input";
import axios from "axios";
import Spinner from "../../Components/Spinner";
import moment from "moment-timezone";

const EnvoyerActivité = ({ setAlert, auth: { user } }) => {
  const [formData1, setFormData1] = useState({
    ListeDesEnseignant: [],
    EnseignantSelectionné: "",
    count: 0,
  });

  const { ListeDesEnseignant, EnseignantSelectionné, count } = formData1;
  const Post = (e) => {
    e.preventDefault();
    const file = document.getElementById("inputGroupFile01").files;
    const formData = new FormData();
    formData.append(
      "Prénom_Nom_Enseignant",
      EnseignantSelectionné.substring(4)
    );
    formData.append("Publié_Le", moment().tz("Africa/Tunis").format("L"));
    formData.append("Enseignant_id", ListeDesEnseignant[count].identifiant);
    formData.append("Prénom_Nom_ÉLève", user.prénom + " " + user.nom);
    formData.append("Classe", user.profileEleve.classe);
    formData.append("img", file[0]);

    trackPromise(
      fetch("/EnvoyerActivite", {
        method: "POST",
        body: formData,
      }).then((res) =>
        setAlert(
          typeof file[0] === "undefined"
            ? "Veuillez insérer un fichier"
            : "Activité été envoyé avec succès",
          typeof file[0] === "undefined" ? "danger" : "success"
        )
      )
    );
  };
  const onChange = (e) => {
    setFormData1({
      ...formData1,
      [e.target.name]: e.target.value,
      count: Number(e.target.value.charAt(0)) - 1,
    });
  };
  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const MonClasse = user.profileEleve.classe;
    const body = JSON.stringify({ MonClasse });

    axios.post("/ListeEnseignant/", body, config).then((res) => {
      setFormData1({
        ...formData1,
        ListeDesEnseignant: res.data,
        EnseignantSelectionné:
          "1 ) " + res.data[0].prénom + " " + res.data[0].nom,
      });
    });
    bsCustomFileInput.init();
  }, []);

  const { promiseInProgress } = usePromiseTracker();

  return EnseignantSelectionné === "" ? (
    <Spinner />
  ) : (
    <div className="col p-3  ">
      <div className="fluid-container">
        <Alert />
        <h1 className="mb-3">Publier Cours </h1>
        <form>
          <h5>Choisir un fichier</h5>
          <div className="input-group mb-3 w-75">
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input "
                id="inputGroupFile01"
                aria-describedby="inputGroupFileAddon01"
                required
              />
              <label className="custom-file-label" htmlFor="inputGroupFile01">
                Choisir fichier
              </label>
            </div>
          </div>
          <h5>Choisir Enseignant</h5>
          <select
            className="form-control w-25"
            id="exampleFormControlSelect1"
            value={EnseignantSelectionné}
            onChange={(e) => onChange(e)}
            name="EnseignantSelectionné"
          >
            {ListeDesEnseignant.map((Ens, idx) => {
              return (
                <option
                  key={idx}
                  value={idx + 1 + " ) " + Ens.prénom + " " + Ens.nom}
                >
                  {idx + 1 + " ) " + Ens.prénom + " " + Ens.nom}
                </option>
              );
            })}
          </select>

          {promiseInProgress ? (
            <button type="button" className="btn btn-primary mt-4">
              <i
                className="fa fa-refresh fa-spin"
                style={{ marginRight: "5px" }}
              />
              Uploading ...
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-primary mt-4"
              onClick={(e) => Post(e)}
            >
              Upload
            </button>
          )}
        </form>
      </div>
    </div>
  );
};
EnvoyerActivité.prototype = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { setAlert })(EnvoyerActivité);
