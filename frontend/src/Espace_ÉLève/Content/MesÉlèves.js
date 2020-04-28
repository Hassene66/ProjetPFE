import React, { Fragment, useState } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";

const MesÉlèves = ({ auth: { user } }) => {
  const [formData, setFormData] = useState({
    classe: user.profileEnseignant.classeEnseigné[0],
    listeDesEleves: [],
  });
  const { classe, listeDesEleves } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
      .then((res) => setFormData({ ...formData, listeDesEleves: res.data }));
  };

  const returnTable = () => {
    if (typeof listeDesEleves === "object" && listeDesEleves.length > 0) {
      return (
        <div>
          <table className="table container mt-5">
            <thead className="thead-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Prénom</th>
                <th scope="col">Nom</th>
              </tr>
            </thead>
            {listeDesEleves.map((élève) => {
              return <Table listeDesEleves={élève} />;
            })}
          </table>
        </div>
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

  const Table = (props) => {
    return (
      <tr>
        <td>{props.listeDesEleves.identifiant}</td>
        <td>{props.listeDesEleves.prénom}</td>
        <td>{props.listeDesEleves.nom}</td>
      </tr>
    );
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
        <button type="submit" className="button ml-5 ">
          Valider
        </button>
      </form>
      {returnTable()}
    </div>
  );
};
MesÉlèves.prototype = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, {})(MesÉlèves);
