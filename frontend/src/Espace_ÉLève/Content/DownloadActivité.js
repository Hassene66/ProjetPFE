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
      <div classname="container">
        {loadingState &&
          (Activité.length === 0 ? (
            <h1>Vous n'avez publié aucun cours</h1>
          ) : (
            <Fragment>
              <h1>Table des Activité</h1>
              <table className="table  mt-5">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Num</th>
                    <th scope="col">Nom de l'activité</th>
                    <th scope="col">Taille [Bytes]</th>
                    <th scope="col">Télécharger Activité</th>
                  </tr>
                </thead>
                <tbody>
                  {Activité.map((elem, idx) => {
                    return (
                      <tr>
                        <td>{idx + 1}</td>
                        <td>{elem.filename}</td>
                        <td>{elem.length}</td>
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
