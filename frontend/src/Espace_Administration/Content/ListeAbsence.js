import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import Spinner from "../../Components/Spinner";
import moment from "moment-timezone";

import "react-datepicker/dist/react-datepicker.css";
const ListeAbsence = ({ auth: { user } }) => {
  const [formData, setFormData] = useState({
    classe: [],
    classeSelectionné: "",
    DateInput: "",
    ListeAbsence: [],
    submitted: false,
  });
  const {
    classe,
    DateInput,
    classeSelectionné,
    ListeAbsence,
    submitted,
  } = formData;
  useEffect(() => {
    var date = moment().tz("Africa/Tunis").format("L");
    var splited = date.split("/");
    var Dateinput = `${splited[2]}-${splited[0]}-${splited[1]}`;
    axios.get("/ListeClasses").then((res) => {
      setFormData({
        ...formData,
        classe: res.data,
        DateInput: Dateinput,
        classeSelectionné: res.data[0],
      });
    });
  }, []);
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      submitted: false,
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    var splited = DateInput.split("-");
    var Date1 = `${splited[1]}-${splited[2]}-${splited[0]}`;
    var newDate = Date1.replace(/-/g, "/");
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ classeSelectionné, newDate });
    await axios
      .post("/RegistreAppel/Get", body, config)
      .then((res) =>
        setFormData({ ...formData, ListeAbsence: res.data, submitted: true })
      );
  };
  return typeof classe[0] === "undefined" ? (
    <Spinner />
  ) : (
    <div className="col p-3  ">
      <form onSubmit={(e) => onSubmit(e)}>
        <h5 for="exampleFormControlSelect1">Choisir la classe</h5>
        <select
          className=" w-25 mr-5"
          id="exampleFormControlSelect1"
          value={classeSelectionné}
          onChange={(e) => onChange(e)}
          name="classeSelectionné"
        >
          {classe.map((classe, idx) => {
            return (
              <option key={idx} value={classe} name="classeSelectionné">
                {classe}
              </option>
            );
          })}
        </select>
        <h5 className="mt-3">Choisir la date</h5>
        <input
          name="DateInput"
          type="date"
          value={`${DateInput}`}
          onChange={(e) => onChange(e)}
        />

        <div>
          <button type="submit" className="button mt-4 ">
            Valider
          </button>
        </div>
      </form>
      {ListeAbsence.length !== 0 && submitted ? (
        <Fragment>
          {ListeAbsence.map((elem, idx) => {
            return (
              <table className="table container mt-5">
                <thead className="thead-dark ">
                  <tr>
                    <th scope="col">
                      Enseignant : {elem.PrénomEtNomEnseignant}{" "}
                    </th>
                    <th scope="col">Matière : {elem.matièreEnseigné} </th>
                    <th scope="col">
                      Date : {elem.Date} {"  "} Heurs : {elem.Temps}
                    </th>
                  </tr>
                </thead>
                <thead className="thead-light ">
                  <tr>
                    <th scope="col">Prénom et Nom d'élève</th>
                    <th scope="col">Classe</th>
                    <th scope="col">État</th>
                  </tr>
                </thead>
                <tbody>
                  {elem.Absent.map((el, i) => {
                    return (
                      <tr key={i}>
                        <td>{el}</td>
                        <td>{elem.Classe}</td>
                        <td>Absent</td>
                      </tr>
                    );
                  })}
                  {elem.Present.map((el, i) => {
                    return (
                      <tr key={i}>
                        <td>{el}</td>
                        <td>{elem.Classe}</td>
                        <td>Present</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            );
          })}
        </Fragment>
      ) : (
        submitted && (
          <h4 className="text-center mt-5">
            il n’y a pas des listes d’absences correspondant à cette date{" "}
          </h4>
        )
      )}
    </div>
  );
};
ListeAbsence.prototype = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, {})(ListeAbsence);
