import React, { Component } from "react";
import "./EmplacementActuelle.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
class EmplacementActuelle extends Component {
  render() {
    return (
      <div>
        <div className="emplacementActuellePGE">
          <Link className="ml-3 mb-2" to="/">
            Acceuil
          </Link>
          ->
          <Link className="mb-2" to="/AccueilAdministration">
            Espace Administration
          </Link>
          ->
          <Link className="mb-2" to="/GererLesEleves">
            gérer les eleves
          </Link>
        </div>
      </div>
    );
  }
}

export default EmplacementActuelle;
