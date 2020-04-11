import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import Spinner from "../../../Components/Spinner";

const AttribuerNote = ({ auth: { user } }) => {
  const [formData, setFormData] = useState({
    classe: user.profileEnseignant.classeEnseigné[0],
    listeDesEleves: [],
    contrôle1: "",
    synthèse1: "",
    contrôle2: "",
    synthèse2: "",
    contrôle3: "",
    synthèse3: "",
    élèveSelectioné: "",
    submitted: false,
    count: 0,
  });

  const {
    classe,
    listeDesEleves,
    contrôle1,
    contrôle2,
    contrôle3,
    synthèse1,
    synthèse2,
    synthèse3,
    submitted,
    élèveSelectioné,
    count,
  } = formData;

  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ classe });
    axios.post("/Enseignant/mesEleves", body, config).then((res) =>
      setFormData({
        ...formData,
        listeDesEleves: res.data,
        élèveSelectioné: "",
      })
    );
  }, [classe]);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      submitted: false,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (élèveSelectioné.length === 0) {
      setFormData({
        ...formData,
        submitted: true,
        élèveSelectioné:
          "1 ) " + listeDesEleves[0].prénom + " " + listeDesEleves[0].nom,
        count: Number(élèveSelectioné.charAt(0)),
      });
    } else {
      setFormData({
        ...formData,
        submitted: true,
        count: Number(élèveSelectioné.charAt(0)) - 1,
      });
    }
  };

  const onChangeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    const NoteÉlève = {};
    NoteÉlève.identifiant = listeDesEleves[count].identifiant;
    NoteÉlève.PrénomEtNomEnseignant = user.prénom + " " + user.nom;
    NoteÉlève.matièreEnseigné = user.profileEnseignant.matièreEnseigné;
    NoteÉlève.PrénomEtNomÉlève =
      listeDesEleves[count].prénom + " " + listeDesEleves[count].nom;
    NoteÉlève.noteContrôle1 = contrôle1;
    NoteÉlève.noteContrôle2 = contrôle2;
    NoteÉlève.noteContrôle3 = contrôle3;
    NoteÉlève.noteSynthèse1 = synthèse1;
    NoteÉlève.noteSynthèse2 = synthèse2;
    NoteÉlève.noteSynthèse3 = synthèse3;

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios.post("/Enseignant/EnregistrerNote", NoteÉlève, config);

    setFormData({
      ...formData,
      contrôle1: "",
      synthèse1: "",
      contrôle2: "",
      synthèse2: "",
      contrôle3: "",
      synthèse3: "",
    });
  };

  const returnTable = () => {
    if (
      typeof listeDesEleves === "object" &&
      listeDesEleves.length > 0 &&
      submitted === true
    ) {
      return (
        <form onSubmit={(e) => onFormSubmit(e)}>
          <table className="table container mt-5">
            <thead className="thead-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nom et Prénom</th>
                <th scope="col">Contrôle n°1</th>
                <th scope="col">Synthèse n°1</th>
                <th scope="col">Contrôle n°2</th>
                <th scope="col">Synthèse n°2</th>
                <th scope="col">Contrôle n°3</th>
                <th scope="col">Synthèse n°3</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{listeDesEleves[count].identifiant}</td>
                <td>
                  {listeDesEleves[count].prénom +
                    " " +
                    listeDesEleves[count].nom}
                </td>

                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="contrôle1"
                    placeholder="contrôle n°1"
                    value={contrôle1}
                    onChange={(e) => onChangeInput(e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="synthèse1"
                    placeholder="synthèse n°1"
                    value={synthèse1}
                    onChange={(e) => onChangeInput(e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="contrôle2"
                    placeholder="contrôle n°2"
                    value={contrôle2}
                    onChange={(e) => onChangeInput(e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="synthèse2"
                    placeholder="synthèse n°2"
                    value={synthèse2}
                    onChange={(e) => onChangeInput(e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="contrôle3"
                    placeholder="contrôle n°3"
                    value={contrôle3}
                    onChange={(e) => onChangeInput(e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="synthèse3"
                    placeholder="synthèse n°3"
                    value={synthèse3}
                    onChange={(e) => onChangeInput(e)}
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <div className="text-center">
            <button type="submit " className="button  ">
              Enregistrer
            </button>
          </div>
        </form>
      );
    } else {
      if (typeof listeDesEleves === "string") {
        return (
          <h3 className="text-center mt-5">
            il n'y a pas des élèves dans cette classe
          </h3>
        );
      }
    }
  };

  return typeof listeDesEleves[0] === "undefined" ? (
    <Spinner />
  ) : (
    <div className="col p-3  ">
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <h4>Choisir la classe</h4>
          <select
            className="form-control w-25"
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
        <div className="form-group">
          <h4>Prénom et nom de l'élève</h4>
          <select
            className="form-control w-25"
            value={élèveSelectioné}
            onChange={(e) => onChange(e)}
            name="élèveSelectioné"
          >
            {listeDesEleves.map((élève, index) => {
              return (
                <option
                  key={élève._id}
                  value={`${index + 1} ) ${élève.prénom}  ${élève.nom}`}
                  onChange={(e) => onChange(e)}
                  name="élèveSelectioné"
                >
                  {`${index + 1} ) ${élève.prénom}  ${élève.nom}`}
                </option>
              );
            })}
          </select>
        </div>
        <button type="submit" className="button ml-5 ">
          Valider
        </button>
      </form>
      {returnTable()}
    </div>
  );
};
AttribuerNote.prototype = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, {})(AttribuerNote);