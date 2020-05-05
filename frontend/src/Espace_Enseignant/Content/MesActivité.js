import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import axios from "axios";
import Spinner from "../../Components/Spinner";
import Alert from "../../Components/alert";
import { usePromiseTracker } from "react-promise-tracker";
import { trackPromise } from "react-promise-tracker";
import PropTypes from "prop-types";

const MesActivité = ({ setAlert, auth: { user } }) => {
  const [formData, setFormData] = useState({ Activité: [] });
  const [loadingState, setloadingState] = useState(false);
  const { Activité } = formData;
  const { promiseInProgress } = usePromiseTracker();
  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const identifiant = user.identifiant;
    const body = JSON.stringify({ identifiant });
    trackPromise(
      axios
        .post("/UploadActivite/files", body, config)
        .then((res) => {
          setFormData({
            ...formData,
            Activité: res.data,
          });
        })
        .then(setloadingState(!loadingState))
    );
  }, []);

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
                    <th scope="col">Nom de Activité</th>
                    <th scope="col">Classe concerné</th>
                    <th scope="col">Taille du fichier</th>
                  </tr>
                </thead>
                <tbody>
                  {Activité.map((elem, idx) => {
                    return (
                      <tr>
                        <td>{idx + 1}</td>
                        <td>{elem.filename}</td>
                        <td>{elem.metadata.classe_ciblée}</td>
                        <td>{(elem.length / 1048576).toFixed(2)} MB</td>
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
MesActivité.prototype = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { setAlert })(MesActivité);
