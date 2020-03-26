import React, { Component } from "react";
import Navbar from "../../Components/navbarAcceuil";
import FormulaireContact from "./FormulaireContact";
import Jumbotron from "./jumbotron";
import Footer from "../../Components/footerAcceuil";
export class PageContact extends Component {
  render() {
    return (
      <div>
        <div className="Site">
          <div className="Site-content">
            <div className="fluid-container  ">
              <Navbar />
              <Jumbotron />
              <FormulaireContact />
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

export default PageContact;
