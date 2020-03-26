import React, { Component } from "react";
import "./EmplacementActuelle.css";
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
class EmplacementActuelle extends Component {
  render() {
    return (
      <div>
        <div className="emplacementActuelleLogin">
          <Link className="ml-3 mb-2" to="/">
            Acceuil
          </Link>
          ->
          <Link className="mb-2" to="/api/auth">
            S'identifier
          </Link>
        </div>
      </div>
    );
  }
}

export default EmplacementActuelle;
