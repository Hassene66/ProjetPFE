import React from "react";
import ListeAbsence from "../Content/ListeAbsence";
import ContenuPageParameterEcole from "../Content/ContenuPageParameterEcole";
import GalerieImage from "../Content/UploadImages";
import SupprimerImage from "../Content/DeleteImage";
import ContacterNous from "../Content/AfficherContacterNous";
import MoyenneÉlève from "../Content/Moyenne";
import CreerCompte from "../Content/CreerCompte";
import WelcomeAdmin from "../Content/WelcomeAdmin";
import EnvoyerMessage from "../Content/ContacterParent";
import BoiteDeReception from "../Content/BoiteDeReception";
import VoirPlus from "../Content/VoirPlus";
import { Route, Switch } from "react-router-dom";
import PrivateRoutesAdmin from "../../PrivateRoutes/PrivateRoutesAdmin";

const Content = () => {
  return (
    <Switch>
      <PrivateRoutesAdmin
        exact
        path="/AccueilAdministration"
        component={WelcomeAdmin}
      />
      <PrivateRoutesAdmin
        exact
        path="/AccueilAdministration/ListeAbsence"
        component={ListeAbsence}
      />
      <PrivateRoutesAdmin
        exact
        path="/AccueilAdministration/creerCompte"
        component={CreerCompte}
      />
      <PrivateRoutesAdmin
        exact
        path="/AccueilAdministration/ParameterEcole"
        component={ContenuPageParameterEcole}
      />
      <PrivateRoutesAdmin
        exact
        path="/AccueilAdministration/AjouterImage"
        component={GalerieImage}
      />
      <PrivateRoutesAdmin
        exact
        path="/AccueilAdministration/SupprimerImage"
        component={SupprimerImage}
      />
      <PrivateRoutesAdmin
        exact
        path="/AccueilAdministration/listeContacterNous"
        component={ContacterNous}
      />
      <PrivateRoutesAdmin
        exact
        path="/AccueilAdministration/AttribuerMoyenne"
        component={MoyenneÉlève}
      />
      <PrivateRoutesAdmin
        exact
        path="/AccueilAdministration/EnvoyerMessage"
        component={EnvoyerMessage}
      />
      <PrivateRoutesAdmin
        exact
        path="/AccueilAdministration/BoiteDeReception"
        component={BoiteDeReception}
      />
      <PrivateRoutesAdmin
        exact
        path="/AccueilAdministration/VoirPlus"
        component={VoirPlus}
      />
    </Switch>
  );
};
export default Content;
