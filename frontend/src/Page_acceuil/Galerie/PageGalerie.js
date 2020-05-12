import React, { Component } from "react";
import Navbar from "../../Components/navbarAcceuil";
import Footer from "../../Components/footerAcceuil";
import ListeImage from "./GalerieImage";
import Jumbotron from "./ImageJumbotron";
export class PageFormation extends Component {
  render() {
    return (
      <div>
        <div className="Site">
          <div className="Site-content mb-5">
            <div className="fluid-container  ">
              <Navbar />
              <Jumbotron />
              <ListeImage />
            </div>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default PageFormation;
