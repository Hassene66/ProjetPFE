import React from "react";
import DownloadCours from "../Content/DownloadCours";
import DownloadActivité from "../Content/DownloadActivité";
import { Route, Switch } from "react-router-dom";
import PrivateRoutesÉlève from "../../PrivateRoutes/PrivateRoutesÉlève";

const Content = () => {
  return (
    <Switch>
      <PrivateRoutesÉlève
        exact
        path="/PageAcceuilEleve/MesCours"
        component={DownloadCours}
      />
      <PrivateRoutesÉlève
        exact
        path="/PageAcceuilEleve/MesActivites"
        component={DownloadActivité}
      />
    </Switch>
  );
};
export default Content;
