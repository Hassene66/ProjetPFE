import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Page_parameter_mon_ecole from "./Espace_Administration/page_parameter_mon_ecole/PagePatemeterMonEcole";
import PageAccueilAdministration from "./Espace_Administration/Page_accueil_administration/pageAccueilAdministration";
import PageAcceuilEnseignant from "./Espace_Enseignant/PageAcceuilEnseignant";
import PageAcceuilEleve from "./Espace_ÉLève/PageAcceuilEleve";
import PageGererLesEleves from "./Espace_Administration/Esapce_gerer_les_eleves/PageGererLesEleves";
import PageLogin from "./page_Login/PageLogin";
import PageAcceuil from "./Page_acceuil/Acceuil/pageAcceuil";
import PagePresentation from "./Page_acceuil/Presentation/PagePresentation";
import PageFormation from "./Page_acceuil/Nos_formation/PageFormation";
import PageContact from "./Page_acceuil/Contact/PageContact";
import PageActivité from "./Page_acceuil/Activité/PageActivité";
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
      <div>
        <Switch>
          <Route exact path="/" component={PageAcceuil} />
          <Route exact path="/Presentation" component={PagePresentation} />
          <Route exact path="/NosFormation" component={PageFormation} />
          <Route exact path="/Contact" component={PageContact} />
          <Route exact path="/Activité" component={PageActivité} />

          <PrivateRouteAdmin
            exact
            path="/ParameterMonEcole"
            component={Page_parameter_mon_ecole}
          />
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
            exact
            path="/AccueilAdministration"
            component={PageAccueilAdministration}
          />
          <PrivateRouteAdmin
            path="/GererLesEleves"
            component={PageGererLesEleves}
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
