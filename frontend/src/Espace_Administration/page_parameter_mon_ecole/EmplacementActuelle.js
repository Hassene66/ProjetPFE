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
            <Link className="ml-3 mb-2" to="/">
              Acceuil
            </Link>
            ->
            <Link className="mb-2" to="/Accueil_administration">
              Espace Administration
            </Link>
            ->
            <Link className="mb-2" to="/Parameter_Mon_Ecole">
              Paramétrer Mon Ecole
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default EmplacementActuelle;
