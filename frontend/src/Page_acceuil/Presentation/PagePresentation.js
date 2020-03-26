import React, { Component } from "react";
import Vision from "./vision";
import Navbar from "../../Components/navbarAcceuil";
import Footer from "../../Components/footerAcceuil";
import MotDirecteur from "./Mot_Directeur";
import Info_données from "./info_données";
class PagePresentation extends Component {
  render() {
    return (
      <div>
        <div className="Site">
          <div className="Site-content">
            <div className="fluid-container  ">
              <Navbar />
              <MotDirecteur />
              <Vision />
              <Info_données />
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

export default PagePresentation;
