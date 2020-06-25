import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import axios from "axios";
import Spinner from "../../Components/Spinner";
import { usePromiseTracker } from "react-promise-tracker";
import { trackPromise } from "react-promise-tracker";
import PropTypes from "prop-types";
import fileDownload from "js-file-download";

const DownloadActivité = ({ setAlert, auth: { user } }) => {
  const [formData, setFormData] = useState({ Activité: [] });
  const [loadingState, setloadingState] = useState(false);
  const [TéléchargementState, setTéléchargementState] = useState({
    index: null,
  });
  const { index } = TéléchargementState;
  const { Activité } = formData;
  const { promiseInProgress } = usePromiseTracker();
  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const monClasse = user.profileEleve.classe;
    const body = JSON.stringify({ monClasse });
    trackPromise(
      axios
        .post("/UploadActivite/getFiles", body, config)
        .then((res) => {
          setFormData({
            ...formData,
            Activité: res.data,
          });
        })
        .then(setloadingState({ loadingState: true }))
    );
  }, []);
  const downloadActivité = (elem) => {
    trackPromise(
      axios
        .get("/UploadActivite/download/" + elem._id, {
          responseType: "arraybuffer",
        })
        .then((res) => {
          fileDownload(res.data, elem.filename);
        })
    );
  };

  const ChangeTéléchrgerState = (idx) => {
    setTéléchargementState({
      ...TéléchargementState,
      index: idx,
    });
  };
  return promiseInProgress && Activité.length === 0 ? (
    <Spinner />
  ) : (
    <div className="col p-3  ">
      <div className="fluid-container">
        {loadingState &&
          (Activité.length === 0 ? (
            <h1>Aucun activités publiés</h1>
          ) : (
            <Fragment>
              <h1>Table des Activité</h1>
              <table className="table  table-responsive container mt-5  w-100 d-block d-md-table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Num</th>
                    <th scope="col">Nom de l'activité</th>
                    <th scope="col">Enseignant</th>
                    <th scope="col">Taille du fichier</th>
                    <th scope="col">Télécharger Activité</th>
                  </tr>
                </thead>
                <tbody>
                  {Activité.map((elem, idx) => {
                    return (
                      <tr>
                        <td>{idx + 1}</td>
                        <td>{elem.filename}</td>
                        <td>{elem.metadata.Prénom_Nom_Enseignant}</td>
                        <td>{(elem.length / 1048576).toFixed(2)} MB</td>
                        {promiseInProgress && index === idx ? (
                          <button
                            className="btn btn-success ml-3 my-2"
                            onClick={() => downloadActivité(elem)}
                          >
                            <i
                              className="fa fa-refresh fa-spin"
                              style={{ marginRight: "5px" }}
                            />
                            Téléchargement...
                          </button>
                        ) : (
                          <button
                            className="btn btn-success ml-3 my-2"
                            onClick={() => {
                              downloadActivité(elem);
                              ChangeTéléchrgerState(idx);
                            }}
                          >
                            Télécharger
                          </button>
                        )}
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
DownloadActivité.prototype = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { setAlert })(DownloadActivité);
