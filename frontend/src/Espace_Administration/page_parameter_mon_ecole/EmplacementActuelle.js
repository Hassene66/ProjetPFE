import React, { Component } from "react";
import "./EmplacementActuelle.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
class EmplacementActuelle extends Component {
  render() {
    return (
      <div>
        <div className="emplacementActuellePME ">
          <div className="align-items-center">
            <Link className="ml-3 mb-2" to="/" style={{ color: "black" }}>
              Acceuil
            </Link>
            ->
            <Link
              className="mb-2"
              to="/AccueilAdministration"
              style={{ color: "black" }}
            >
              Espace Administration
            </Link>
            ->
            <Link
              className="mb-2"
              to="/ParameterMonEcole"
              style={{ color: "black" }}
            >
              Paramétrer Mon Ecole
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default EmplacementActuelle;
