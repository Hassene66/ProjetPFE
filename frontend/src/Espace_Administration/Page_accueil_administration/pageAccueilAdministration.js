import React, { Component } from "react";
import Navbar from "../../Components/navbar";
import InfoEtablissement from "./InfoEtablisement";
import Gerer from "./Gerer";
import Footer from "../../Components/footer";
import EmplacementActuelle from "./EmplacementActuelle";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class PageAccueilAdministration extends Component {
  render() {
    return (
      <div>
        <div className="Site">
          <div className="Site-content">
            <div className="fluid-container  ">
              <Navbar />
              <EmplacementActuelle />
              <InfoEtablissement />
              <Gerer />
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

export default PageAccueilAdministration;
