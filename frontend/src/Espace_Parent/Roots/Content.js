import React from "react";

import WelcomeParent from "../Content/WelcomeParent";
import Moyenne from "../Content/Moyenne";
import Notes from "../Content/Notes";
import Absence from "../Content/Absence";
import { Route, Switch } from "react-router-dom";
import PrivateRouteParent from "../../PrivateRoutes/PrivateRoutesParent";

const Content = () => {
  return (
    <Switch>
      <PrivateRouteParent
        exact
        path="/PageAcceuilParent"
        component={WelcomeParent}
      />
      <PrivateRouteParent
        exact
        path="/PageAcceuilParent/Moyenne"
        component={Moyenne}
      />
      <PrivateRouteParent
        exact
        path="/PageAcceuilParent/Notes"
        component={Notes}
      />
      <PrivateRouteParent
        exact
        path="/PageAcceuilParent/Absence"
        component={Absence}
      />
    </Switch>
  );
};
export default Content;
