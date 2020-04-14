import React from "react";
import MesÉlèves from "../Content/MesÉlèves";
import AttribuerNote from "../Content/AttribuerNote";
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
    </Switch>
  );
};
export default Content;
