import React from "react";
import ListeAbsence from "../Content/ListeAbsence";
import ContenuPageParameterEcole from "../Content/ContenuPageParameterEcole";
import GalerieImage from "../Content/UploadImages";
import SupprimerImage from "../Content/DeleteImage";
import { Route, Switch } from "react-router-dom";
import PrivateRoutesAdmin from "../../PrivateRoutes/PrivateRoutesAdmin";

const Content = () => {
  return (
    <Switch>
      <PrivateRoutesAdmin
        exact
        path="/AccueilAdministration/ListeAbsence"
        component={ListeAbsence}
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
    </Switch>
  );
};
export default Content;
