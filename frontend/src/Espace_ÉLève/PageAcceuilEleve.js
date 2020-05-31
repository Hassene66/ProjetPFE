import React, { useState } from "react";
import Content from "./Roots/Content";
import Navbar from "./Navbar";
import "./PageAcceuilEleve.css";
import { NavLink } from "react-router-dom";
const PageAcceuilEleve = () => {
  const [showSubActivité, setShowSubActivité] = useState(false);
  const [showSubMessages, setShowSubMessages] = useState(false);

  return (
    <div style={{ paddingTop: "69px" }} className="EspaceEleve">
      <Navbar />
      <div className="container-fluid px-0">
        <div className="row collapse show no-gutters d-flex h-100 position-relative">
          <div className=" p-0 h-100 w-sidebar navbar-collapse collapse d-none d-md-flex sidebar">
            {/* fixed sidebar */}
            <div
              className="navbar-dark  text-white position-fixed h-100 align-self-start w-sidebar"
              style={{ backgroundColor: "#7566e8" }}
            >
              <ul className="nav flex-column flex-nowrap text-truncate">
                <li className="nav-item">
                  <NavLink
                    activeClassName="activenav"
                    exact
                    className="nav-link active nav-links-color"
                    to="/"
                  >
                    Retour a l'acceuil
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="activenav"
                    exact
                    className="nav-link active nav-links-color"
                    to="/PageAcceuilEleve/MesCours"
                  >
                    Mes Cours
                  </NavLink>
                </li>
                <li className="nav-item  flex-row ">
                  <NavLink
                    className="nav-link nav-links-color dropdown-toggle "
                    to="#"
                    disabled
                    onClick={() => setShowSubActivité(!showSubActivité)}
                  >
                    Activité
                  </NavLink>
                </li>
                <div className={showSubActivité ? "show" : "hide"}>
                  <li className="nav-item sub-menu">
                    <NavLink
                      activeClassName="activenav"
                      exact
                      className="nav-link active nav-links-color"
                      to="/PageAcceuilEleve/MesActivites"
                    >
                      Mes Activités
                    </NavLink>
                  </li>
                  <li className="nav-item sub-menu">
                    <NavLink
                      activeClassName="activenav"
                      exact
                      className="nav-link nav-links-color"
                      to="/PageAcceuilEleve/EnvoyerActivite"
                    >
                      Envoyer Activité
                    </NavLink>
                  </li>
                </div>
                <li className="nav-item">
                  <NavLink
                    activeClassName="activenav"
                    exact
                    className="nav-link nav-links-color"
                    to="/PageAcceuilEleve/MesNotes"
                  >
                    Mes notes
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="activenav"
                    exact
                    className="nav-link nav-links-color"
                    to="/PageAcceuilEleve/Moyennes"
                  >
                    Mes Moyennes
                  </NavLink>
                </li>
                <li className="nav-item  flex-row ">
                  <NavLink
                    className="nav-link nav-links-color dropdown-toggle "
                    to="#"
                    disabled
                    onClick={() => setShowSubMessages(!showSubMessages)}
                  >
                    Contacter Enseignant
                  </NavLink>
                </li>
                <div className={showSubMessages ? "show" : "hide"}>
                  <li className="nav-item sub-menu">
                    <NavLink
                      activeClassName="activenav"
                      exact
                      className="nav-link active nav-links-color"
                      to="/PageAcceuilEleve/ContacterEnseignant"
                    >
                      Envoyer Message
                    </NavLink>
                  </li>
                  <li className="nav-item sub-menu">
                    <NavLink
                      activeClassName="activenav"
                      exact
                      className="nav-link nav-links-color"
                      to="/PageAcceuilEleve/BoiteDeReception"
                    >
                      Boîte De Réception
                    </NavLink>
                  </li>
                </div>
              </ul>
            </div>
          </div>
          <Content />
        </div>
      </div>
    </div>
  );
};
export default PageAcceuilEleve;
