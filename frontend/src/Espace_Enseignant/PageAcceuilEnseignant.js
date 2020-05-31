import React, { useState } from "react";
import Content from "./Roots/Content";
import Navbar from "./Navbar";
import "./PageAcceuilEnseignant.css";
import { NavLink } from "react-router-dom";
const PageAcceuilEnseignant = () => {
  const [showSubCours, setShowSubCours] = useState(false);
  const [showSubActivité, setShowSubActivité] = useState(false);
  const [showSubMessages, setShowSubMessages] = useState(false);

  return (
    <div style={{ paddingTop: "69px" }} className="EspaceEnseignant">
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
                    exact
                    activeClassName="activenav"
                    className="nav-link active nav-links-color"
                    to="/"
                  >
                    Retour a l'acceuil
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    activeClassName="activenav"
                    className="nav-link active nav-links-color"
                    to="/PageAcceuilEnseignant/MesÉlèves"
                  >
                    Mes élèves
                  </NavLink>
                </li>
                <li className="nav-item  flex-row ">
                  <NavLink
                    exact
                    className="nav-link nav-links-color dropdown-toggle "
                    to="#"
                    disabled
                    onClick={() => setShowSubCours(!showSubCours)}
                  >
                    Cours
                  </NavLink>
                </li>
                <div className={showSubCours ? "show" : "hide"}>
                  <li className="nav-item sub-menu">
                    <NavLink
                      exact
                      activeClassName="activenav"
                      className="nav-link nav-links-color"
                      to="/PageAcceuilEnseignant/Cours"
                    >
                      Affichier mes cours
                    </NavLink>
                  </li>
                  <li className="nav-item sub-menu">
                    <NavLink
                      exact
                      activeClassName="activenav"
                      className="nav-link nav-links-color"
                      to="/PageAcceuilEnseignant/UploadCours"
                    >
                      Ajouter un cours
                    </NavLink>
                  </li>
                  <li className="nav-item sub-menu">
                    <NavLink
                      exact
                      activeClassName="activenav"
                      className="nav-link nav-links-color"
                      to="/PageAcceuilEnseignant/SupprimerCours"
                    >
                      Supprimer un cours
                    </NavLink>
                  </li>
                </div>
                <li className="nav-item  flex-row ">
                  <NavLink
                    exact
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
                      exact
                      activeClassName="activenav"
                      className="nav-link nav-links-color"
                      to="/PageAcceuilEnseignant/Activite"
                    >
                      Affichier mes activités
                    </NavLink>
                  </li>
                  <li className="nav-item sub-menu">
                    <NavLink
                      exact
                      activeClassName="activenav"
                      className="nav-link nav-links-color"
                      to="/PageAcceuilEnseignant/UploadActivite"
                    >
                      Ajouter un activité
                    </NavLink>
                  </li>
                  <li className="nav-item sub-menu">
                    <NavLink
                      exact
                      activeClassName="activenav"
                      className="nav-link nav-links-color"
                      to="/PageAcceuilEnseignant/SupprimerActivite"
                    >
                      Supprimer un activité
                    </NavLink>
                  </li>
                  <li className="nav-item sub-menu">
                    <NavLink
                      exact
                      activeClassName="activenav"
                      className="nav-link nav-links-color"
                      to="/PageAcceuilEnseignant/ActivitesRecues"
                    >
                      Activités Reçues
                    </NavLink>
                  </li>
                </div>
                <li className="nav-item">
                  <NavLink
                    exact
                    activeClassName="activenav"
                    className="nav-link nav-links-color"
                    to="/PageAcceuilEnseignant/RegistreAppel"
                  >
                    Registre d'appel
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    activeClassName="activenav"
                    className="nav-link nav-links-color"
                    to="/PageAcceuilEnseignant/AttribuerNote"
                  >
                    Attribuer note
                  </NavLink>
                </li>
                <li className="nav-item  flex-row ">
                  <NavLink
                    exact
                    className="nav-link nav-links-color dropdown-toggle "
                    to="#"
                    disabled
                    onClick={() => setShowSubMessages(!showSubMessages)}
                  >
                    Contacter Élève
                  </NavLink>
                </li>
                <div className={showSubMessages ? "show" : "hide"}>
                  <li className="nav-item sub-menu">
                    <NavLink
                      exact
                      activeClassName="activenav"
                      className="nav-link active nav-links-color"
                      to="/PageAcceuilEnseignant/ContacterEleve"
                    >
                      Envoyer Message
                    </NavLink>
                  </li>
                  <li className="nav-item sub-menu">
                    <NavLink
                      exact
                      activeClassName="activenav"
                      className="nav-link nav-links-color"
                      to="/PageAcceuilEnseignant/BoiteDeReception"
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
export default PageAcceuilEnseignant;
