import React, { Component } from "react";
import "./EmplacementActuelle.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
class EmplacementActuelle extends Component {
  render() {
    return (
      <div>
        <div className="emplacementActuellePGE">
          <Link className="ml-3 mb-2" to="#">
            Acceuil
          </Link>
          ->
          <Link className="mb-2" to="/Accueil_administration">
            Espace Administration
          </Link>
          ->
          <Link className="mb-2" to="/Gerer_les_eleves">
            gérer les eleves
          </Link>
        </div>
      </div>
    );
  }
}

export default EmplacementActuelle;
