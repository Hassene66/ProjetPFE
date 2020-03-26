import React, { Component } from "react";
import "./sigle.css";
import sigle1 from "./imagesPageFormation/idea.svg";
import sigle2 from "./imagesPageFormation/plug.svg";
import sigle3 from "./imagesPageFormation/success.svg";
export class sigle extends Component {
  render() {
    return (
      <div className="container-fluid px-0 test my-5">
        <div className="row text-center align-items-center ">
          <div className="col-sm-4 py-3">
            <img className="sizingImg" src={sigle1} alt="" />
            <h1>Créativité</h1>
          </div>
          <div className="col-sm-4 py-3">
            <img className="sizingImg" src={sigle2} alt="" />
            <h1>Autonomie</h1>
          </div>
          <div className="col-sm-4 py-3 ">
            <img className="sizingImg" src={sigle3} alt="" />
            <h1>Succès</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default sigle;
