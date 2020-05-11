import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import Alert from "../../Components/alert";
import { usePromiseTracker } from "react-promise-tracker";
import { trackPromise } from "react-promise-tracker";
import PropTypes from "prop-types";
import bsCustomFileInput from "bs-custom-file-input";
const GalerieImage = ({ setAlert, auth: { user } }) => {
  const [formData1, setFormData1] = useState({});
  const Post = (e) => {
    e.preventDefault();
    const file = document.getElementById("inputGroupFile01").files;
    const formData = new FormData();
    formData.append("img", file[0]);
    if (typeof file[0] !== "undefined") {
      if (
        file[0].type === "image/jpeg" ||
        file[0].type === "image/png" ||
        file[0].type === "image/jpg"
      ) {
        trackPromise(
          fetch("/GalerieImages/", {
            method: "POST",
            body: formData,
          }).then((res) => setAlert("Image publié avec succès", "success"))
        );
      } else {
        setAlert("Veuillez insérer une image de type jpg ou png", "danger");
      }
    } else {
      setAlert("Veuillez insérer un fichier", "danger");
    }
  };

  useEffect(() => {
    bsCustomFileInput.init();
  }, []);

  const { promiseInProgress } = usePromiseTracker();
  return (
    <div className="col p-3  ">
      <div classname="container">
        <Alert />
        <h1 className="mb-3">Ajouter Des Images</h1>
        <form>
          <h5>Choisir une image</h5>
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
                Choisir une image
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
              className="btn btn-primary "
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
GalerieImage.prototype = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { setAlert })(GalerieImage);
