import React, { Component } from "react";
import "./Gerer.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
export class Gerer extends Component {
  render() {
    return (
      <div>
        <div className="container mt-3 ">
          <div className="row  justify-content-between text-center   ">
            <Link to="/GererLesEleves" className="gererCart col-lg-3">
              Gérer les Eléves
              <br />
              <span>
                <i class="cc fas fa-user-cog fa-2x "></i>
              </span>
            </Link>
            <Link to="" className="gererCart col-lg-3">
              Gérer les enseignants
              <br />
              <span className="icon-gerer-etablissement">
                <i class="cc fas fa-user-cog fa-2x "></i>
              </span>
            </Link>
            <Link to="" className="gererCart col-lg-3">
              Gérer les parents <br />
              <span>
                <i class="cc fas fa-user-cog fa-2x "></i>
              </span>
            </Link>
          </div>
        </div>
        <div className="container mt-3">
          <div className="row justify-content-center text-center   ">
            <Link to="/ParameterMonEcole" className="gererCart col-lg-3">
              Parametrer mon ecole
              <br />
              <span>
                <i class="cc fas fa-user-cog fa-2x "></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Gerer;
