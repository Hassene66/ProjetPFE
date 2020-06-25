import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import Spinner from "../../Components/Spinner";
import { setAlert } from "../../actions/alert";
import Alert from "../../Components/alert";
const MoyenneÉlève = ({ setAlert, auth: { user } }) => {
  const [formData, setFormData] = useState({
    classe: [],
    classeSelectioné: "",
    MoyenneS1: "",
    MoyenneS2: "",
    MoyenneS3: "",
    submitted: false,
    count: 0,
  });
  const [formData1, setFormData1] = useState({
    listeDesEleves: [],
    élèveSelectioné: "",
  });

  const {
    classe,
    classeSelectioné,
    MoyenneS1,
    MoyenneS2,
    MoyenneS3,
    submitted,
    count,
  } = formData;
  const { élèveSelectioné, listeDesEleves } = formData1;
  useEffect(() => {
    async function anyNameFunction() {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.get("/ListeClasses");
      setFormData({
        ...formData,
        classe: response.data,
        classeSelectioné: response.data[0],
      });
      let classe = response.data[0];
      const body = JSON.stringify({ classe });
      await axios.post("/Admin/mesEleves", body, config).then((res) => {
        if (typeof res.data === "object") {
          setFormData1({
            ...formData1,
            listeDesEleves: res.data,
            élèveSelectioné: "1- " + res.data[0].prénom + " " + res.data[0].nom,
          });
        } else {
          if (typeof res.data === "string") {
            setFormData1({
              ...formData1,
              listeDesEleves: res.data,
              submitted: true,
            });
          }
        }
      });
    }
    anyNameFunction();
  }, []);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      submitted: false,
      count: 0,
      MoyenneS1: "",
      MoyenneS2: "",
      MoyenneS3: "",
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const classe = e.target.value;
    const body = JSON.stringify({ classe });
    axios.post("/Admin/mesEleves", body, config).then((res) => {
      if (typeof res.data === "object") {
        setFormData1({
          ...formData1,
          listeDesEleves: res.data,
          élèveSelectioné: "1- " + res.data[0].prénom + " " + res.data[0].nom,
        });
      } else {
        if (typeof res.data === "string") {
          setFormData1({
            ...formData1,
            listeDesEleves: res.data,
            submitted: true,
          });
        }
      }
    });
  };
  const onChange1 = (e) => {
    setFormData1({
      ...formData1,
      [e.target.name]: e.target.value,
    });
    setFormData({
      ...formData,
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
    const body = JSON.stringify({ identifiant });
    axios.post("/Admin/MoyenneEleve", body, config).then((res) => {
      if (typeof res.data === "object" && Object.entries(res.data).length > 0) {
        setFormData({
          ...formData,
          MoyenneS1: res.data.MoyenneS1,
          MoyenneS2: res.data.MoyenneS2,
          MoyenneS3: res.data.MoyenneS3,
          submitted: true,
          count: Number(élèveSelectioné.charAt(0)) - 1,
        });
      } else {
        if (typeof res.data === "string") {
          setFormData({
            ...formData,
            MoyenneS1: "",
            MoyenneS2: "",
            MoyenneS3: "",
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
    const MoyenneÉlève = {};
    MoyenneÉlève.identifiant = listeDesEleves[count].identifiant;
    MoyenneÉlève.PrénomEtNomÉlève =
      listeDesEleves[count].prénom + " " + listeDesEleves[count].nom;
    MoyenneÉlève.MoyenneS1 = MoyenneS1;
    MoyenneÉlève.MoyenneS2 = MoyenneS2;
    MoyenneÉlève.MoyenneS3 = MoyenneS3;

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post("/Admin/EnregistrerMoyenne", MoyenneÉlève, config)
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
          <table className="table container table-responsive mt-5  w-100 d-block d-md-table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Prénom et Nom</th>
                <th scope="col">Moyenne Semestre 1</th>
                <th scope="col">Moyenne Semestre 2</th>
                <th scope="col">Moyenne Semestre 3</th>
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
                    name="MoyenneS1"
                    value={MoyenneS1}
                    onChange={(e) => onChangeInput(e)}
                    min="0"
                    max="20"
                    step="0.01"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    name="MoyenneS2"
                    value={MoyenneS2}
                    onChange={(e) => onChangeInput(e)}
                    min="0"
                    max="20"
                    step="0.01"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    name="MoyenneS3"
                    value={MoyenneS3}
                    onChange={(e) => onChangeInput(e)}
                    min="0"
                    max="20"
                    step="0.01"
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <div className="text-center">
            <button type="submit " className="btn btn-primary  ">
              Enregistrer
            </button>
          </div>
        </form>
      );
    }
  };

  return typeof listeDesEleves[0] === "undefined" ||
    classe[0] === "undefined" ? (
    <Spinner />
  ) : (
    <div className="col p-3">
      <Alert />
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <h4>Choisir la classe</h4>
          <select
            className="form-control w-25"
            value={classeSelectioné}
            onChange={(e) => onChange(e)}
            name="classeSelectioné"
          >
            {classe.map((classe) => {
              return (
                <option key={classe} value={classe}>
                  {classe}
                </option>
              );
            })}
          </select>
        </div>
        {typeof listeDesEleves === "string" ? (
          <h3 className="text-center mt-5">aucun élève dans cette classe</h3>
        ) : (
          typeof listeDesEleves === "object" && (
            <Fragment>
              <div className="form-group">
                <h4>Prénom et nom de l'élève</h4>
                <select
                  className="form-control w-25"
                  value={élèveSelectioné}
                  onChange={(e) => onChange1(e)}
                  name="élèveSelectioné"
                >
                  {listeDesEleves.map((élève, index) => {
                    return (
                      <option
                        key={élève._id}
                        value={`${index + 1}- ${élève.prénom}  ${élève.nom}`}
                        onChange={(e) => onChange1(e)}
                        name="élèveSelectioné"
                      >
                        {`${index + 1}- ${élève.prénom}  ${élève.nom}`}
                      </option>
                    );
                  })}
                </select>
              </div>
              <button type="submit" className="btn btn-primary ml-5 ">
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
MoyenneÉlève.prototype = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { setAlert })(MoyenneÉlève);
