import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import axios from "axios";
import Spinner from "../../Components/Spinner";
import { usePromiseTracker } from "react-promise-tracker";
import { trackPromise } from "react-promise-tracker";
import PropTypes from "prop-types";
import fileDownload from "js-file-download";

const DownloadCours = ({ setAlert, auth: { user } }) => {
  const [formData, setFormData] = useState({ Cours: [] });
  const [loadingState, setloadingState] = useState(false);
  const [TéléchargementState, setTéléchargementState] = useState({
    index: null,
  });
  const { index } = TéléchargementState;
  const { Cours } = formData;
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
        .post("/UploadCours/getFiles", body, config)
        .then((res) => {
          setFormData({
            ...formData,
            Cours: res.data,
          });
        })
        .then(setloadingState({ loadingState: true }))
    );
  }, []);
  const downloadCours = (elem) => {
    trackPromise(
      axios
        .get("/UploadCours/download/" + elem._id, {
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
  return promiseInProgress && Cours.length === 0 ? (
    <Spinner />
  ) : (
    <div className="col p-3  ">
      <div classname="container">
        {loadingState &&
          (Cours.length === 0 ? (
            <h1>Il n’y a pas encore des cours publiés</h1>
          ) : (
            <Fragment>
              <h1>Table des Cours</h1>
              <table className="table  mt-5">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Num</th>
                    <th scope="col">Nom du cours</th>
                    <th scope="col">Taille [Bytes]</th>
                    <th scope="col">Télécharger Cours</th>
                  </tr>
                </thead>
                <tbody>
                  {Cours.map((elem, idx) => {
                    return (
                      <tr>
                        <td>{idx + 1}</td>
                        <td>{elem.filename}</td>
                        <td>{elem.length}</td>
                        {promiseInProgress && index === idx ? (
                          <button
                            className="btn btn-success ml-3 my-2"
                            onClick={() => downloadCours(elem)}
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
                              downloadCours(elem);
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
DownloadCours.prototype = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { setAlert })(DownloadCours);
