import React, { Component } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./InfoEtablisement.css";
export class InfoEtablisement extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="alert alert-success" role="alert">
            5000 eleves
          </div>
          <div className="alert alert-danger" role="alert">
            30 enseignants
          </div>
          <div className="alert alert-warning" role="alert">
            700 inscrit au concours
          </div>
        </div>
      </div>
    );
  }
}

export default InfoEtablisement;
