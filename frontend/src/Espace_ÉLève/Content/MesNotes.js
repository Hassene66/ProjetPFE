import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import Spinner from "../../Components/Spinner";
import { setAlert } from "../../actions/alert";
import Alert from "../../Components/alert";
const MesNotes = ({ auth: { user } }) => {
  const [formData, setFormData] = useState({
    MesNotes: [],
  });
  const [loadingState, setloadingState] = useState(false);
  const { MesNotes } = formData;

  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const identifiant = user.identifiant;
    const body = JSON.stringify({ identifiant });
    axios.post("/Enseignant/MesNotes", body, config).then((res) => {
      if (typeof res.data === "object") {
        setFormData({
          ...formData,
          MesNotes: res.data,
        });
        setloadingState({ loadingState: true });
      } else {
        if (typeof res.data === "string") {
          setFormData({
            ...formData,
            MesNotes: [],
          });
          setloadingState({ loadingState: true });
        }
      }
    });
  }, []);
  return typeof MesNotes[0] === "undefined" && loadingState === false ? (
    <Spinner />
  ) : (
    <div className="col p-3  ">
      <div classname="container">
        {loadingState &&
          (MesNotes.length === 0 ? (
            <h1>Aucune note n'a encore été publiée</h1>
          ) : (
            <Fragment>
              <h1>Table des notes</h1>
              <table className="table container mt-5">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Num</th>
                    <th scope="col">Enseignant</th>
                    <th scope="col">Matière</th>
                    <th scope="col">Contrôle n°1</th>
                    <th scope="col">Synthèse n°1</th>
                    <th scope="col">Contrôle n°2</th>
                    <th scope="col">Synthèse n°2</th>
                    <th scope="col">Contrôle n°3</th>
                    <th scope="col">Synthèse n°3</th>
                  </tr>
                </thead>
                {MesNotes.map((Note, idx) => {
                  return (
                    <tbody>
                      <tr>
                        <td>{idx + 1}</td>
                        <td>{Note.PrénomEtNomEnseignant}</td>
                        <td>{Note.matièreEnseigné}</td>
                        <td>
                          {Note.noteContrôle1 === undefined
                            ? "N/A"
                            : Note.noteContrôle1}
                        </td>
                        <td>
                          {Note.noteSynthèse1 === undefined
                            ? "N/A"
                            : Note.noteSynthèse1}
                        </td>
                        <td>
                          {Note.noteContrôle2 === undefined
                            ? "N/A"
                            : Note.noteContrôle2}
                        </td>
                        <td>
                          {Note.noteSynthèse2 === undefined
                            ? "N/A"
                            : Note.noteSynthèse2}
                        </td>
                        <td>
                          {Note.noteContrôle3 === undefined
                            ? "N/A"
                            : Note.noteContrôle3}
                        </td>
                        <td>
                          {Note.noteSynthèse3 === undefined
                            ? "N/A"
                            : Note.noteSynthèse3}
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </Fragment>
          ))}
      </div>
    </div>
  );
};
MesNotes.prototype = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { setAlert })(MesNotes);
