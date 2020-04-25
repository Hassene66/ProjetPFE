import React from "react";
import MesÉlèves from "../Content/MesÉlèves";
import AttribuerNote from "../Content/AttribuerNote";
import RegistreAppel from "../Content/RegistreAppel";
import UploadCours from "../Content/UploadCours";
import MesCours from "../Content/MesCours";
import { Route, Switch } from "react-router-dom";
import PrivateRouteEnseignant from "../../PrivateRoutes/PrivateRoutesEnseignant";

const Content = () => {
  return (
    <Switch>
      <PrivateRouteEnseignant
        exact
        path="/PageAcceuilEnseignant/MesÉlèves"
        component={MesÉlèves}
      />
      <PrivateRouteEnseignant
        exact
        path="/PageAcceuilEnseignant/AttribuerNote"
        component={AttribuerNote}
      />
      <PrivateRouteEnseignant
        exact
        path="/PageAcceuilEnseignant/RegistreAppel"
        component={RegistreAppel}
      />
      <PrivateRouteEnseignant
        exact
        path="/PageAcceuilEnseignant/UploadCours"
        component={UploadCours}
      />
      <PrivateRouteEnseignant
        exact
        path="/PageAcceuilEnseignant/Cours"
        component={MesCours}
      />
    </Switch>
  );
};
export default Content;
