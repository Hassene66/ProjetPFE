import React, { useState } from "react";
import Content from "./Roots/Content";
import Navbar from "./Navbar";
import "./PageAccueilAdministration.css";
import { Link } from "react-router-dom";
const PageAcceuilEleve = () => {
  const [showSubÉlève, setShowSubÉlève] = useState(false);
  const [showSubEnseignant, setShowSubEnseignant] = useState(false);
  const [showSubGalerie, setShowSubGalerie] = useState(false);
  return (
    <div style={{ paddingTop: "69px" }}>
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
                  <Link className="nav-link active nav-links-color" to="/">
                    Retour a l'acceuil
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active nav-links-color"
                    to="/AccueilAdministration/creerCompte"
                  >
                    Créer compte
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link active nav-links-color"
                    to="/AccueilAdministration/ParameterEcole"
                  >
                    Paramétrer ecole
                  </Link>
                </li>

                <li className="nav-item  flex-row ">
                  <Link
                    className="nav-link nav-links-color dropdown-toggle "
                    to="#"
                    disabled
                    onClick={() => setShowSubÉlève(!showSubÉlève)}
                  >
                    Gèrer élève
                  </Link>
                </li>
                <div className={showSubÉlève ? "show" : "hide"}>
                  <li className="nav-item sub-menu">
                    <Link
                      className="nav-link nav-links-color"
                      to="/AccueilAdministration/ListeAbsence"
                    >
                      Liste d'absence
                    </Link>
                  </li>
                </div>
                <li className="nav-item  flex-row ">
                  <Link
                    className="nav-link nav-links-color dropdown-toggle "
                    to="#"
                    disabled
                    onClick={() => setShowSubEnseignant(!showSubEnseignant)}
                  >
                    Gèrer enseignant
                  </Link>
                </li>
                <div className={showSubEnseignant ? "show" : "hide"}>
                  <li className="nav-item sub-menu">
                    <Link
                      className="nav-link nav-links-color"
                      to="/AccueilAdministration/ListeAbsence"
                    >
                      Liste d'absence
                    </Link>
                  </li>
                </div>

                <li className="nav-item  flex-row ">
                  <Link
                    className="nav-link nav-links-color dropdown-toggle "
                    to="#"
                    disabled
                    onClick={() => setShowSubGalerie(!showSubGalerie)}
                  >
                    Gèrer galerie
                  </Link>
                </li>
                <div className={showSubGalerie ? "show" : "hide"}>
                  <li className="nav-item sub-menu">
                    <Link
                      className="nav-link nav-links-color"
                      to="/AccueilAdministration/AjouterImage"
                    >
                      Ajouter images
                    </Link>
                  </li>
                  <li className="nav-item sub-menu">
                    <Link
                      className="nav-link nav-links-color"
                      to="/AccueilAdministration/SupprimerImage"
                    >
                      Supprimer images
                    </Link>
                  </li>
                </div>
                <li className="nav-item">
                  <Link
                    className="nav-link active nav-links-color"
                    to="/AccueilAdministration/listeContacterNous"
                  >
                    Liste Des Messages
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active nav-links-color"
                    to="/AccueilAdministration/AttribuerMoyenne"
                  >
                    Attribuer Moyenne
                  </Link>
                </li>
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
