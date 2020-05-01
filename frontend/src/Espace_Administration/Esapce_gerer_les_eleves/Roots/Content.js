import React from "react";
import ListeAbsence from "../Content/ListeAbsence";
import { Route, Switch } from "react-router-dom";
import PrivateRoutesAdmin from "../../../PrivateRoutes/PrivateRoutesAdmin";

const Content = () => {
  return (
    <Switch>
      <PrivateRoutesAdmin
        exact
        path="/GererLesEleves/ListeAbsence"
        component={ListeAbsence}
      />
    </Switch>
  );
};
export default Content;
