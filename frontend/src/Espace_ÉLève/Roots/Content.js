import React from "react";
import DownloadCours from "../Content/DownloadCours";
import DownloadActivité from "../Content/DownloadActivité";
import MesNotes from "../Content/MesNotes";
import EnvoyerActivité from "../Content/EnvoyerActivité";
import Moyenne from "../Content/Moyenne";
import ContacterEnseignant from "../Content/ContacterEnseignant";
import BoiteDeReception from "../Content/BoiteDeRéception";
import VoirPlus from "../Content/VoirPlus";
import WelcomeEleve from "../Content/WelcomeEleve";
import { Route, Switch } from "react-router-dom";
import PrivateRoutesÉlève from "../../PrivateRoutes/PrivateRoutesÉlève";

const Content = () => {
  return (
    <Switch>
      <PrivateRoutesÉlève
        exact
        path="/PageAcceuilEleve"
        component={WelcomeEleve}
      />
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
      <PrivateRoutesÉlève
        exact
        path="/PageAcceuilEleve/Moyennes"
        component={Moyenne}
      />
      <PrivateRoutesÉlève
        exact
        path="/PageAcceuilEleve/ContacterEnseignant"
        component={ContacterEnseignant}
      />
      <PrivateRoutesÉlève
        exact
        path="/PageAcceuilEleve/BoiteDeReception"
        component={BoiteDeReception}
      />
      <PrivateRoutesÉlève
        exact
        path="/PageAcceuilEleve/VoirPlus"
        component={VoirPlus}
      />
    </Switch>
  );
};
export default Content;
