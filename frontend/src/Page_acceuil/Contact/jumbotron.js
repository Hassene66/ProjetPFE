import React, { Component } from "react";
import "./jumbotron1.css";
export class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbo">
        <div className="container">
          <div className="jumbotron img-fluid text-center ">
            <div className="row"></div>
            <div className="col px-0">
              <h1 id="txt" className="pl-5">
                Contactez-nous
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
