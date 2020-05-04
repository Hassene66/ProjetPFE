import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import Alert from "../../Components/alert";
import { usePromiseTracker } from "react-promise-tracker";
import { trackPromise } from "react-promise-tracker";
import PropTypes from "prop-types";
import bsCustomFileInput from "bs-custom-file-input";
const Cours = ({ setAlert, auth: { user } }) => {
  const onChange = (e) => {
    setFormData1({ ...formData1, [e.target.name]: e.target.value });
  };
  const [formData1, setFormData1] = useState({
    classe: user.profileEnseignant.classeEnseigné[0],
  });
  const { classe } = formData1;
  const Post = (e) => {
    e.preventDefault();
    const file = document.getElementById("inputGroupFile01").files;
    const formData = new FormData();
    formData.append("classe_ciblée", classe);
    formData.append("Enseignant_id", user.identifiant);
    formData.append("img", file[0]);

    trackPromise(
      fetch("/UploadCours/", {
        method: "POST",
        body: formData,
      }).then((res) =>
        setAlert(
          typeof file[0] === "undefined"
            ? "Veuillez insérer un fichier"
            : "Cours publié avec succès",
          typeof file[0] === "undefined" ? "danger" : "success"
        )
      )
    );
  };

  useEffect(() => {
    bsCustomFileInput.init();
  }, []);

  const { promiseInProgress } = usePromiseTracker();
  return (
    <div className="col p-3  ">
      <div classname="container">
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
          <h5>Choisir la classe</h5>
          <select
            className="form-control w-25"
            id="exampleFormControlSelect1"
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
Cours.prototype = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { setAlert })(Cours);
