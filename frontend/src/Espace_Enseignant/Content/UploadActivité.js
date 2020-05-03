import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import Alert from "../../Components/alert";
import { usePromiseTracker } from "react-promise-tracker";
import { trackPromise } from "react-promise-tracker";
import PropTypes from "prop-types";
import bsCustomFileInput from "bs-custom-file-input";
const Activité = ({ setAlert, auth: { user } }) => {
  const Post = (e) => {
    e.preventDefault();
    const file = document.getElementById("inputGroupFile01").files;
    const formData = new FormData();
    const tab = [user.profileEnseignant.classeEnseigné];
    for (var i = 0; i < tab.length; i++) {
      formData.append("ClasseEnseigné[]", tab[i]);
    }
    formData.append("Enseignant_id", user.identifiant);
    formData.append("img", file[0]);

    trackPromise(
      fetch("/UploadActivite/", {
        method: "POST",
        body: formData,
      }).then((res) =>
        setAlert(
          typeof file[0] === "undefined"
            ? "Veuillez insérer un fichier"
            : "Activité publié avec succès",
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
        <h1 className="mb-3">Publier Activité </h1>
        <form>
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
          {promiseInProgress ? (
            <button type="button" className="btn btn-primary">
              <i
                className="fa fa-refresh fa-spin"
                style={{ marginRight: "5px" }}
              />
              Uploading ...
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-primary"
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
Activité.prototype = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { setAlert })(Activité);
