import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import moment from "moment-timezone";
import { setAlert } from "../../actions/alert";
import Alert from "../../Components/alert";
const RegistreAppel = ({ setAlert, auth: { user } }) => {
  const [formData, setFormData] = useState({
    classe: user.profileEnseignant.classeEnseigné[0],
    listeDesEleves: [],
    selectedOption: [],
    inputName: [],
    submitted: false,
  });
  const {
    classe,
    listeDesEleves,
    selectedOption,
    submitted,
    inputName,
  } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      submitted: false,
    });
  };

  const onStatusChange = (e, idx) => {
    const oldSelectedOption = selectedOption;
    oldSelectedOption[idx] = e.target.value;
    setFormData({
      ...formData,
      selectedOption: oldSelectedOption,
    });
  };

  useEffect(() => {
    if (typeof listeDesEleves === "object") {
      setFormData({
        ...formData,
        selectedOption: listeDesEleves.map(() => "Present"),
        inputName: listeDesEleves.map((x, i) => `Input${i}`),
      });
    }
  }, [submitted]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ classe });
    await axios
      .post("/Enseignant/mesEleves", body, config)
      .then((res) =>
        setFormData({ ...formData, listeDesEleves: res.data, submitted: true })
      );
  };
  const onFormSubmit = async (e) => {
    e.preventDefault();
    const Present = [];
    const Absent = [];
    for (let i = 0; i <= selectedOption.length; i++) {
      if (selectedOption[i] === "Present") {
        Present.push(listeDesEleves[i]);
      } else {
        if (selectedOption[i] === "Absent") {
          Absent.push(listeDesEleves[i]);
        }
      }
    }

    var date = moment().tz("Africa/Tunis").format("L");
    var time = moment().tz("Africa/Tunis").format("LTS");

    const RegistreAppel = {};
    RegistreAppel.PrénomEtNomEnseignant = user.prénom + " " + user.nom;
    RegistreAppel.matièreEnseigné = user.profileEnseignant.matièreEnseigné;
    RegistreAppel.Date = date;
    RegistreAppel.Temps = time;
    RegistreAppel.Classe = classe;
    RegistreAppel.Niveau = classe.charAt(0);
    RegistreAppel.Present = Present;
    RegistreAppel.Absent = Absent;
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios
      .post("/RegistreAppel/Enregister", RegistreAppel, config)
      .then((res) => setAlert(res.data.message, "success"));
  };

  const returnTable = () => {
    if (
      typeof listeDesEleves === "object" &&
      listeDesEleves.length > 0 &&
      submitted
    ) {
      return (
        <form onSubmit={(e) => onFormSubmit(e)}>
          <table className="table table-responsive container mt-5  w-100 d-block d-md-table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Prénom</th>
                <th scope="col">Nom</th>
                <th scope="col">État</th>
              </tr>
            </thead>
            {listeDesEleves.map((élève, idx) => {
              return (
                <tr>
                  <td>{élève.identifiant}</td>
                  <td>{élève.prénom}</td>
                  <td>{élève.nom}</td>
                  <td>
                    <label>
                      <input
                        type="radio"
                        value="Present"
                        className="mr-2"
                        checked={selectedOption[idx] === "Present"}
                        onChange={(e) => onStatusChange(e, idx)}
                        name={inputName[idx]}
                      />
                      Présent
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="Absent"
                        className="ml-3 mr-2"
                        checked={selectedOption[idx] === "Absent"}
                        onChange={(e) => onStatusChange(e, idx)}
                        name={inputName[idx]}
                      />
                      Absent
                    </label>
                  </td>
                </tr>
              );
            })}
          </table>
          <div className="text-center">
            <button type="submit " className="btn btn-primary  ">
              Enregistrer
            </button>
          </div>
        </form>
      );
    } else {
      if (typeof listeDesEleves === "string" && submitted) {
        return (
          <h3 className="text-center mt-5">
            il n'y a pas des élèves dans cette classe
          </h3>
        );
      }
    }
  };

  return (
    <div className="col p-3  ">
      <Alert />
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <h4 for="exampleFormControlSelect1">Sélectionner un classe</h4>
          <select
            className="form-control w-25"
            id="exampleFormControlSelect1"
            value={classe}
            onChange={(e) => onChange(e)}
            name="classe"
          >
            {user.profileEnseignant.classeEnseigné.map((classe, idx) => {
              return (
                <option key={idx} value={classe}>
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
      {returnTable()}
    </div>
  );
};
RegistreAppel.prototype = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { setAlert })(RegistreAppel);
