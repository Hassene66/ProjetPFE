import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import axios from "axios";
import Spinner from "../../Components/Spinner";
import Alert from "../../Components/alert";
import { usePromiseTracker } from "react-promise-tracker";
import { trackPromise } from "react-promise-tracker";
import PropTypes from "prop-types";

const MesCours = ({ setAlert, auth: { user } }) => {
  const [formData, setFormData] = useState({ Cours: [] });
  const [loadingState, setloadingState] = useState(false);
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
        .then(setloadingState(!loadingState))
    );
  }, []);

  console.log(loadingState);
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
                    <th scope="col">Nom du cours</th>
                    <th scope="col">Taille</th>
                  </tr>
                </thead>
                <tbody>
                  {Cours.map((elem) => {
                    return (
                      <tr>
                        <td>{elem.filename}</td>
                        <td>{elem.length}</td>
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
MesCours.prototype = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { setAlert })(MesCours);
