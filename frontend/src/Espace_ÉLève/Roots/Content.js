import React from "react";
import DownloadCours from "../Content/DownloadCours";
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
    </Switch>
  );
};
export default Content;
