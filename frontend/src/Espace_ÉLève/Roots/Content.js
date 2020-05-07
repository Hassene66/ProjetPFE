import React from "react";
import DownloadCours from "../Content/DownloadCours";
import DownloadActivité from "../Content/DownloadActivité";
import MesNotes from "../Content/MesNotes";
import EnvoyerActivité from "../Content/EnvoyerActivité";
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
      <PrivateRoutesÉlève
        exact
        path="/PageAcceuilEleve/MesNotes"
        component={MesNotes}
      />
      <PrivateRoutesÉlève
        exact
        path="/PageAcceuilEleve/EnvoyerActivite"
        component={EnvoyerActivité}
      />
    </Switch>
  );
};
export default Content;
