import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import PageAccueilAdministration from "./Espace_Administration/PageAccueilAdministration";
import PageAcceuilEnseignant from "./Espace_Enseignant/PageAcceuilEnseignant";
import PageAcceuilEleve from "./Espace_ÉLève/PageAcceuilEleve";
import PageLogin from "./page_Login/PageLogin";
import PageAcceuil from "./Page_acceuil/Acceuil/pageAcceuil";
import PagePresentation from "./Page_acceuil/Presentation/PagePresentation";
import PageFormation from "./Page_acceuil/Nos_formation/PageFormation";
import PageContact from "./Page_acceuil/Contact/PageContact";
import PageActivité from "./Page_acceuil/Activité/PageActivité";
import PageGalerie from "./Page_acceuil/Galerie/PageGalerie";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import { Provider } from "react-redux";
import PrivateRouteAdmin from "./PrivateRoutes/PrivateRoutesAdmin";
import PrivateRouteEnseignant from "./PrivateRoutes/PrivateRoutesEnseignant";
import PrivateRouteÉlève from "./PrivateRoutes/PrivateRoutesÉlève";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
//redux
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <div className="overflow-hidden">
        <Switch>
          <Route exact path="/" component={PageAcceuil} />
          <Route exact path="/Presentation" component={PagePresentation} />
          <Route exact path="/NosFormation" component={PageFormation} />
          <Route exact path="/Contact" component={PageContact} />
          <Route exact path="/Activité" component={PageActivité} />
          <Route exact path="/Galerie" component={PageGalerie} />

          <Route exact path="/api/auth" component={PageLogin} />

          <PrivateRouteEnseignant
            path="/PageAcceuilEnseignant"
            component={PageAcceuilEnseignant}
          />
          <PrivateRouteÉlève
            path="/PageAcceuilEleve"
            component={PageAcceuilEleve}
          />
          <PrivateRouteAdmin
            path="/AccueilAdministration"
            component={PageAccueilAdministration}
          />
        </Switch>
      </div>
    </Provider>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
