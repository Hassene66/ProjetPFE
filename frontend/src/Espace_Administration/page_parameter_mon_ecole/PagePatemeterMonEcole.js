import React from "react";
import Footer from "../../Components/footer";
import Navbar from "../../Components/navbar";
import EmplacementActuelle from "./EmplacementActuelle";
import ContenuPageParameterEcole from "./ContenuPageParameterEcole";
import "./PagePatemeterMonEcole.css";
class pageParameterMonEcole extends React.Component {
  render() {
    return (
      <div>
        <div className="Site">
          <div className="Site-content">
            <div className="fluid-container  ">
              <Navbar />
              <EmplacementActuelle />
              <ContenuPageParameterEcole />
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
export default pageParameterMonEcole;
