import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import Spinner from "../../Components/Spinner";
import { setAlert } from "../../actions/alert";
import Alert from "../../Components/alert";
const AttribuerNote = ({ setAlert, auth: { user } }) => {
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
    axios.post("/Enseignant/mesEleves", body, config).then((res) => {
      if (typeof res.data === "object") {
        setFormData({
          ...formData,
          listeDesEleves: res.data,
          élèveSelectioné: "1 ) " + res.data[0].prénom + " " + res.data[0].nom,
        });
      } else {
        if (typeof res.data === "string") {
          setFormData({
            ...formData,
            listeDesEleves: res.data,
            submitted: true,
          });
        }
      }
    });
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
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const lastcount = Number(élèveSelectioné.charAt(0)) - 1;
    const identifiant = listeDesEleves[lastcount].identifiant;
    const matièreEnseigné = user.profileEnseignant.matièreEnseigné;
    const body = JSON.stringify({ identifiant, matièreEnseigné });

    axios.post("/Enseignant/NoteEleve", body, config).then((res) => {
      if (typeof res.data === "object" && Object.entries(res.data).length > 0) {
        setFormData({
          ...formData,
          contrôle1: res.data.noteContrôle1,
          contrôle2: res.data.noteContrôle2,
          contrôle3: res.data.noteContrôle3,
          synthèse1: res.data.noteSynthèse1,
          synthèse2: res.data.noteSynthèse2,
          synthèse3: res.data.noteSynthèse3,
          submitted: true,
          count: Number(élèveSelectioné.charAt(0)) - 1,
        });
      } else {
        if (typeof res.data === "string") {
          setFormData({
            ...formData,
            contrôle1: "",
            synthèse1: "",
            contrôle2: "",
            synthèse2: "",
            contrôle3: "",
            synthèse3: "",
            submitted: true,
            count: Number(élèveSelectioné.charAt(0)) - 1,
          });
        }
      }
    });
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
    NoteÉlève.Niveau = listeDesEleves[count].profileEleve.niveau;
    NoteÉlève.Classe = listeDesEleves[count].profileEleve.classe;
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

    axios
      .post("/Enseignant/EnregistrerNote", NoteÉlève, config)
      .then((res) => setAlert(res.data.message, "success"));
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
                <th scope="col">Prénom et Nom</th>
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
                    type="number"
                    className="form-control"
                    name="contrôle1"
                    placeholder="contrôle n°1"
                    value={contrôle1}
                    onChange={(e) => onChangeInput(e)}
                    min="0"
                    max="20"
                    step="0.25"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    name="synthèse1"
                    placeholder="synthèse n°1"
                    value={synthèse1}
                    onChange={(e) => onChangeInput(e)}
                    min="0"
                    max="20"
                    step="0.25"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    name="contrôle2"
                    placeholder="contrôle n°2"
                    value={contrôle2}
                    onChange={(e) => onChangeInput(e)}
                    min="0"
                    max="20"
                    step="0.25"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    name="synthèse2"
                    placeholder="synthèse n°2"
                    value={synthèse2}
                    onChange={(e) => onChangeInput(e)}
                    min="0"
                    max="20"
                    step="0.25"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    name="contrôle3"
                    placeholder="contrôle n°3"
                    value={contrôle3}
                    onChange={(e) => onChangeInput(e)}
                    min="0"
                    max="20"
                    step="0.25"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    name="synthèse3"
                    placeholder="synthèse n°3"
                    value={synthèse3}
                    onChange={(e) => onChangeInput(e)}
                    min="0"
                    max="20"
                    step="0.25"
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
    }
  };

  return typeof listeDesEleves[0] === "undefined" ? (
    <Spinner />
  ) : (
    <div className="col p-3  ">
      <Alert />
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
        {typeof listeDesEleves === "string" ? (
          <h3 className="text-center mt-5">
            il n'y a pas des élèves dans cette classe
          </h3>
        ) : (
          typeof listeDesEleves === "object" && (
            <Fragment>
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
            </Fragment>
          )
        )}
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
export default connect(mapStateToProps, { setAlert })(AttribuerNote);
