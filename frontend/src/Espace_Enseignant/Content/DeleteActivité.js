import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import axios from "axios";
import Spinner from "../../Components/Spinner";
import { usePromiseTracker } from "react-promise-tracker";
import { trackPromise } from "react-promise-tracker";
import PropTypes from "prop-types";

const DeleteActivité = ({ setAlert, auth: { user } }) => {
  const [formData, setFormData] = useState({ Activité: [] });
  const [loadingState, setloadingState] = useState(false);
  const [ResState, setResState] = useState(false);
  const { Activité } = formData;
  const { promiseInProgress } = usePromiseTracker();
  useEffect(() => {
    trackPromise(
      axios
        .get("/UploadActivite/files")
        .then((res) => {
          setFormData({
            ...formData,
            Activité: res.data,
          });
        })
        .then(setloadingState({ loadingState: true }))
    );
  }, [ResState]);
  const deleteActivité = async (elem) => {
    await axios.delete("/UploadActivite/files/" + elem._id);

    await setFormData({ ...formData, Activité: [] });

    await setResState({ ...formData, ResState: true });
  };

  return promiseInProgress ? (
    <Spinner />
  ) : (
    <div className="col p-3  ">
      <div classname="container">
        {loadingState &&
          (Activité.length === 0 ? (
            <h1>Vous n'avez publié aucun Activité</h1>
          ) : (
            <Fragment>
              <h1>Table des Activité</h1>
              <table className="table  mt-5">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Num</th>
                    <th scope="col">Nom de l'activité</th>
                    <th scope="col">Taille [Bytes]</th>
                    <th scope="col">Supprimer Activité</th>
                  </tr>
                </thead>
                <tbody>
                  {Activité.map((elem, idx) => {
                    return (
                      <tr>
                        <td>{idx + 1}</td>
                        <td>{elem.filename}</td>
                        <td>{elem.length}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => deleteActivité(elem)}
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
DeleteActivité.prototype = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { setAlert })(DeleteActivité);
