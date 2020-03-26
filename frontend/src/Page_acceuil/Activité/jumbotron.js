import React, { Component } from "react";
import "./jumbotron.css";
export class Jumbotron extends Component {
  render() {
    return (
      <div>
        <div className="  jumbotron_activité mb-5  ">
          <h1 className=" jumbo-txt">
            Divers activités dans plusieurs domaine
          </h1>

          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">
              Learn more
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
