import React from "react";
import MesÉlèves from "../Content/MesÉlèves";
import AttribuerNote from "../Content/AttribuerNote";
import { Route, Switch } from "react-router-dom";

const Content = () => {
  return (
    <Switch>
      <Route exact path="/GererLesEleves/MesÉlèves" component={MesÉlèves} />
      <Route
        exact
        path="/GererLesEleves/AttribuerNote"
        component={AttribuerNote}
      />
    </Switch>
  );
};
export default Content;
