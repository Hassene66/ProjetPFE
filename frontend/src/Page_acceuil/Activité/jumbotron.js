import React, { Component } from "react";
import img4 from "./images_Page_activité/backgroundImg.jpg";
export class Jumbotron extends Component {
  render() {
    return (
      <div
        className="jumbotron "
        style={{
          backgroundImage: `url( ${img4} )`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="text-white text-center py-5 px-4">
          <div>
            <h1
              className="card-title h1-responsive pt-3 mb-5 font-bold "
              style={{ color: "#fead38", textShadow: "2px 2px #ff0000" }}
            >
              <strong>Découvrir nos activités </strong>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
