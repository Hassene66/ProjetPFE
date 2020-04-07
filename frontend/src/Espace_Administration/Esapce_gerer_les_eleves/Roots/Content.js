import React from "react";
import MesÉlèves from "../MesÉlèves";
import { Route, BrowserRouter, Switch } from "react-router-dom";
const Content = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/MesÉlèves" component={MesÉlèves} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default Content;
