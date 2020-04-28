import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import axios from "axios";
import Spinner from "../../Components/Spinner";
import Alert from "../../Components/alert";
import { usePromiseTracker } from "react-promise-tracker";
import { trackPromise } from "react-promise-tracker";
import PropTypes from "prop-types";

const DeleteCours = ({ setAlert, auth: { user } }) => {
  const [formData, setFormData] = useState({ Cours: [] });
  const [loadingState, setloadingState] = useState(false);
  const [ResState, setResState] = useState(false);
  const { Cours } = formData;
  const { promiseInProgress } = usePromiseTracker();
  useEffect(() => {
    trackPromise(
      axios
        .get("/UploadCours/files")
        .then((res) => {
          setFormData({
            ...formData,
            Cours: res.data,
          });
        })
        .then(setloadingState({ loadingState: true }))
    );
  }, [ResState]);
  const deleteCours = async (elem) => {
    await axios.delete("/UploadCours/files/" + elem._id);

    await setFormData({ ...formData, Cours: [] });

    await setResState({ ...formData, ResState: true });
  };

  return promiseInProgress ? (
    <Spinner />
  ) : (
    <div className="col p-3  ">
      <div classname="container">
        {loadingState &&
          (Cours.length === 0 ? (
            <h1>Vous n'avez publié aucun cours</h1>
          ) : (
            <Fragment>
              <h1>Table des Cours</h1>
              <table className="table  mt-5">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Num</th>
                    <th scope="col">Nom du cours</th>
                    <th scope="col">Taille [Bytes]</th>
                    <th scope="col">Supprimer Cours</th>
                  </tr>
                </thead>
                <tbody>
                  {Cours.map((elem, idx) => {
                    return (
                      <tr>
                        <td>{idx + 1}</td>
                        <td>{elem.filename}</td>
                        <td>{elem.length}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => deleteCours(elem)}
                          >
                            Supprimer
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </Fragment>
          ))}
      </div>
    </div>
  );
};
DeleteCours.prototype = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { setAlert })(DeleteCours);
