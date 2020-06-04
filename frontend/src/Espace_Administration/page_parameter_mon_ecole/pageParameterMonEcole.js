import React from "react";
import Footer from "../../Components/footer";
import Navbar from "../../Components/navbar";
import EmplacementActuelle from "./EmplacementActuelle";
import UploadFile from "./uploadFile";
import NomEcole from "./nom_ecole";
import InfoDeContact from "./info_de_contact";
import ReseauxSociaux from "./reseaux_sociaux";
import Presentation from "./presentation";
import Historique from "./historique";
import Mot from "./Mot_de_directeur";

class pageParameterMonEcole extends React.Component {
  render() {
    return (
      <div>
        <div className="Site">
          <div className="Site-content">
            <div className="fluid-container  ">
              <Navbar />
              <EmplacementActuelle />
              <UploadFile />
              <NomEcole />
              <div className="row">
                <InfoDeContact />
                <ReseauxSociaux />
              </div>

              <div className="row">
                <Presentation />
                <Historique />
              </div>
              <Mot />
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
