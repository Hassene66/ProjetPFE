import React from "react";
import MesÉlèves from "../Content/MesÉlèves";
import AttribuerNote from "../Content/AttribuerNote";
import RegistreAppel from "../Content/RegistreAppel";
import UploadCours from "../Content/UploadCours";
import UploadActivité from "../Content/UploadActivité";
import MesCours from "../Content/MesCours";
import MesActivité from "../Content/MesActivité";
import DeleteCours from "../Content/DeleteCours";
import DeleteActivité from "../Content/DeleteActivité";
import DownloadCours from "../Content/DownloadCours";
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
      <PrivateRouteEnseignant
        exact
        path="/PageAcceuilEnseignant/SupprimerCours"
        component={DeleteCours}
      />
      <PrivateRouteEnseignant
        exact
        path="/PageAcceuilEnseignant/AjouterQuiz"
        component={DownloadCours}
      />
      <PrivateRouteEnseignant
        exact
        path="/PageAcceuilEnseignant/UploadActivite"
        component={UploadActivité}
      />
      <PrivateRouteEnseignant
        exact
        path="/PageAcceuilEnseignant/Activite"
        component={MesActivité}
      />
      <PrivateRouteEnseignant
        exact
        path="/PageAcceuilEnseignant/SupprimerActivite"
        component={DeleteActivité}
      />
    </Switch>
  );
};
export default Content;
