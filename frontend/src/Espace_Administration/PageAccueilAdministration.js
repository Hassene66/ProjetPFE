import React, { useState } from "react";
import Content from "./Roots/Content";
import Navbar from "./Navbar";
import "./PageAccueilAdministration.css";
import { NavLink } from "react-router-dom";
const PageAcceuilEleve = () => {
  const [showSubÉlève, setShowSubÉlève] = useState(false);
  const [showSubEnseignant, setShowSubEnseignant] = useState(false);
  const [showSubMsg, setShowSubMsg] = useState(false);
  const [showSubGalerie, setShowSubGalerie] = useState(false);
  return (
    <div style={{ paddingTop: "69px" }} className="EspaceAdmin">
      <Navbar />
      <div className="container-fluid px-0">
        <div className="row collapse show no-gutters d-flex h-100 position-relative">
          <div className=" p-0 h-100 w-sidebar navbar-collapse collapse d-none d-md-flex sidebar">
            {/* fixed sidebar */}
            <div
              className="navbar-dark  text-white position-fixed h-100 align-self-start w-sidebar"
              style={{ backgroundColor: "#404d5a" }}
            >
              <ul className="nav flex-column flex-nowrap text-truncate">
                <li className="nav-item">
                  <NavLink
                    activeClassName="activenav"
                    exact
                    className="nav-link active nav-links-color"
                    to="/"
                  >
                    Retour à l'acceuil
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="activenav"
                    exact
                    className="nav-link active nav-links-color"
                    to="/AccueilAdministration/creerCompte"
                  >
                    Créer compte
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    activeClassName="activenav"
                    exact
                    className="nav-link active nav-links-color"
                    to="/AccueilAdministration/ParameterEcole"
                  >
                    Paramétrer école
                  </NavLink>
                </li>

                <li className="nav-item  flex-row ">
                  <NavLink
                    className="nav-link nav-links-color dropdown-toggle "
                    to="#"
                    disabled
                    onClick={() => setShowSubÉlève(!showSubÉlève)}
                  >
                    Gèrer élève
                  </NavLink>
                </li>
                <div className={showSubÉlève ? "show" : "hide"}>
                  <li className="nav-item sub-menu">
                    <NavLink
                      activeClassName="activenav"
                      exact
                      className="nav-link active nav-links-color"
                      to="/AccueilAdministration/AttribuerMoyenne"
                    >
                      Attribuer Moyenne
                    </NavLink>
                  </li>
                </div>
                <li className="nav-item  flex-row ">
                  <NavLink
                    className="nav-link nav-links-color dropdown-toggle "
                    to="#"
                    disabled
                    onClick={() => setShowSubEnseignant(!showSubEnseignant)}
                  >
                    Gèrer enseignant
                  </NavLink>
                </li>
                <div className={showSubEnseignant ? "show" : "hide"}>
                  <li className="nav-item sub-menu">
                    <NavLink
                      activeClassName="activenav"
                      exact
                      className="nav-link nav-links-color"
                      to="/AccueilAdministration/ListeAbsence"
                    >
                      Liste d'absence
                    </NavLink>
                  </li>
                </div>

                <li className="nav-item  flex-row ">
                  <NavLink
                    className="nav-link nav-links-color dropdown-toggle "
                    to="#"
                    disabled
                    onClick={() => setShowSubGalerie(!showSubGalerie)}
                  >
                    Gèrer galerie
                  </NavLink>
                </li>
                <div className={showSubGalerie ? "show" : "hide"}>
                  <li className="nav-item sub-menu">
                    <NavLink
                      activeClassName="activenav"
                      exact
                      className="nav-link nav-links-color"
                      to="/AccueilAdministration/AjouterImage"
                    >
                      Ajouter images
                    </NavLink>
                  </li>
                  <li className="nav-item sub-menu">
                    <NavLink
                      activeClassName="activenav"
                      exact
                      className="nav-link nav-links-color"
                      to="/AccueilAdministration/SupprimerImage"
                    >
                      Supprimer images
                    </NavLink>
                  </li>
                </div>
                <li className="nav-item">
                  <NavLink
                    activeClassName="activenav"
                    exact
                    className="nav-link active nav-links-color"
                    to="/AccueilAdministration/listeContacterNous"
                  >
                    Liste des messages
                  </NavLink>
                </li>
                <li className="nav-item  flex-row ">
                  <NavLink
                    className="nav-link nav-links-color dropdown-toggle "
                    to="#"
                    disabled
                    onClick={() => setShowSubMsg(!showSubMsg)}
                  >
                    Contacter parent
                  </NavLink>
                </li>
                <div className={showSubMsg ? "show" : "hide"}>
                  <li className="nav-item sub-menu">
                    <NavLink
                      activeClassName="activenav"
                      exact
                      className="nav-link nav-links-color"
                      to="/AccueilAdministration/BoiteDeReception"
                    >
                      Boîte de réception
                    </NavLink>
                  </li>
                  <li className="nav-item sub-menu">
                    <NavLink
                      activeClassName="activenav"
                      exact
                      className="nav-link nav-links-color"
                      to="/AccueilAdministration/EnvoyerMessage"
                    >
                      Envoyer message
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
