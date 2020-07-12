import React, { Fragment } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

function ImageJumbotron() {
  return (
    <Fragment>
      <div className="container">
        <div
          className="jumbotron"
          style={{ color: "#2c3e50", backgroundColor: "#ecf0f1" }}
        >
          <h1>
            <i className="fas fa-camera-retro"></i> Notre Galerie d'images
          </h1>
          <p className="lead ">
            Découvrir la galerie d'images de nos activités et nos événements
          </p>
        </div>
      </div>
    </Fragment>
  );
}
export default ImageJumbotron;
