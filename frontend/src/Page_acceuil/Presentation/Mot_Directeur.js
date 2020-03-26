import React, { Component } from "react";
import image1 from "./Images/directeur.jpg";

class Mot_Directeur extends Component {
  render() {
    return (
      <div className="fluid-container  ">
        <div className="card my-5  ">
          <div className="row no-gutters ">
            <div className="col-lg-4 ">
              <img
                src={image1}
                className="card-img w-100 h-100 "
                alt="Directeur"
              />
            </div>
            <div className="col-lg-8 ">
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    "border-bottom": "3px solid #51be78",
                    display: "inline-block"
                  }}
                >
                  Mot de directeur
                </h5>
                <p className="card-text ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                  at veniam quibusdam cupiditate dignissimos dolorem rerum odio
                  enim sint explicabo eligendi voluptate perspiciatis omnis,
                  quos fugiat quasi cumque nesciunt temporibus voluptatum
                  reprehenderit modi. Et qui iusto corporis labore deleniti
                  libero dignissimos eos quaerat quibusdam odio cum assumenda,
                  exercitationem aliquid porro, veniam omnis odit laboriosam
                  facere. Ipsum, quaerat placeat veniam eveniet ullam ab
                  distinctio consequuntur dolores aspernatur quisquam.
                  Repudiandae nisi natus excepturi consequatur veniam distinctio
                  incidunt, neque, at veritatis eaque est.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mot_Directeur;
