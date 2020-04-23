import React from "react";
import MesÉlèves from "../Content/MesÉlèves";
import AttribuerNote from "../Content/AttribuerNote";
import RegistreAppel from "../Content/RegistreAppel";
import Cours from "../Content/cours";
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
        component={Cours}
      />
    </Switch>
  );
};
export default Content;
