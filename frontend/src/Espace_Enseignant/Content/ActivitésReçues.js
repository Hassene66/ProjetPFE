import React, { Fragment, useState } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import { trackPromise } from "react-promise-tracker";
import { usePromiseTracker } from "react-promise-tracker";
import fileDownload from "js-file-download";

const ActivitésReçues = ({ auth: { user } }) => {
  const [formData, setFormData] = useState({
    classe: user.profileEnseignant.classeEnseigné[0],
    listeDesActivitésReçues: [],
    submitted: false,
  });
  const { classe, listeDesActivitésReçues, submitted } = formData;
  const [TéléchargementState, setTéléchargementState] = useState({
    index: null,
  });
  const { index } = TéléchargementState;
  const { promiseInProgress } = usePromiseTracker();

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      submitted: false,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const Enseignant_id = user.identifiant;

    const body = JSON.stringify({ classe, Enseignant_id });
    await axios.post("/EnvoyerActivite/getFiles", body, config).then((res) =>
      setFormData({
        ...formData,
        listeDesActivitésReçues: res.data,
        submitted: true,
      })
    );
  };

  const downloadCours = (elem) => {
    trackPromise(
      axios
        .get("/EnvoyerActivite/download/" + elem._id, {
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
  return (
    <div className="col p-3  ">
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <h4 for="exampleFormControlSelect1">Choisir la classe</h4>
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
        </div>
        <button type="submit" className="btn btn-primary ml-5 ">
          Valider
        </button>
      </form>
      {typeof listeDesActivitésReçues === "object" &&
      listeDesActivitésReçues.length > 0 &&
      submitted ? (
        <div>
          <table className="table container mt-5">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Num</th>
                <th scope="col">Prénom et nom de l'élève</th>
                <th scope="col">Nom de l'activité</th>
                <th scope="col">Date[mm,jj,aaaa]</th>
                <th scope="col">Télécharger Activité</th>
              </tr>
            </thead>
            {listeDesActivitésReçues.map((Activité, idx) => {
              return (
                <tr>
                  <td>{idx + 1}</td>
                  <td>{Activité.metadata.Prénom_Nom_ÉLève}</td>
                  <td>{Activité.filename}</td>
                  <td>{Activité.metadata.Publié_Le}</td>

                  <td>
                    {promiseInProgress && index === idx ? (
                      <button
                        className="btn btn-success "
                        onClick={() => downloadCours(Activité)}
                      >
                        <i
                          className="fa fa-refresh fa-spin"
                          style={{ marginRight: "5px" }}
                        />
                        Téléchargement...
                      </button>
                    ) : (
                      <button
                        className="btn btn-success "
                        onClick={() => {
                          downloadCours(Activité);
                          ChangeTéléchrgerState(idx);
                        }}
                      >
                        Télécharger
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      ) : (
        submitted === true && (
          <Fragment>
            <h3 className="text-center mt-5">
              il n'y a pas encore d'activités publiées dans cette classe
            </h3>
          </Fragment>
        )
      )}
    </div>
  );
};
ActivitésReçues.prototype = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, {})(ActivitésReçues);
