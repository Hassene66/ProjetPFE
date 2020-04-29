import React, { useState } from "react";
import Content from "./Roots/Content";
import Navbar from "./Navbar";
import "./PageAcceuilEnseignant.css";
import { Link } from "react-router-dom";
const PageAcceuilEnseignant = () => {
  const [showSubCours, setShowSubCours] = useState(false);
  const [showSubActivité, setShowSubActivité] = useState(false);
  return (
    <div style={{ paddingTop: "62px" }}>
      <Navbar />
      <div class="container-fluid px-0">
        <div class="row collapse show no-gutters d-flex h-100 position-relative">
          <div class=" p-0 h-100 w-sidebar navbar-collapse collapse d-none d-md-flex sidebar">
            {/* fixed sidebar */}
            <div
              class="navbar-dark  text-white position-fixed h-100 align-self-start w-sidebar"
              style={{ backgroundColor: "#7566e8" }}
            >
              <ul class="nav flex-column flex-nowrap text-truncate">
                <li class="nav-item">
                  <Link class="nav-link active nav-links-color" to="/">
                    Retour a l'acceuil
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link active nav-links-color"
                    to="/PageAcceuilEnseignant/MesÉlèves"
                  >
                    Mes élèves
                  </Link>
                </li>
                <li class="nav-item  flex-row ">
                  <Link
                    class="nav-link nav-links-color dropdown-toggle "
                    to="#"
                    disabled
                    onClick={() => setShowSubCours(!showSubCours)}
                  >
                    Cours
                  </Link>
                </li>
                <div className={showSubCours ? "show" : "hide"}>
                  <li class="nav-item sub-menu">
                    <Link
                      class="nav-link nav-links-color"
                      to="/PageAcceuilEnseignant/Cours"
                    >
                      Affichier mes cours
                    </Link>
                  </li>
                  <li class="nav-item sub-menu">
                    <Link
                      class="nav-link nav-links-color"
                      to="/PageAcceuilEnseignant/UploadCours"
                    >
                      Ajouter un cours
                    </Link>
                  </li>
                  <li class="nav-item sub-menu">
                    <Link
                      class="nav-link nav-links-color"
                      to="/PageAcceuilEnseignant/SupprimerCours"
                    >
                      Supprimer un cours
                    </Link>
                  </li>
                </div>
                <li class="nav-item  flex-row ">
                  <Link
                    class="nav-link nav-links-color dropdown-toggle "
                    to="#"
                    disabled
                    onClick={() => setShowSubActivité(!showSubActivité)}
                  >
                    Activité
                  </Link>
                </li>
                <div className={showSubActivité ? "show" : "hide"}>
                  <li class="nav-item sub-menu">
                    <Link
                      class="nav-link nav-links-color"
                      to="/PageAcceuilEnseignant/Activite"
                    >
                      Affichier mes activités
                    </Link>
                  </li>
                  <li class="nav-item sub-menu">
                    <Link
                      class="nav-link nav-links-color"
                      to="/PageAcceuilEnseignant/UploadActivite"
                    >
                      Ajouter un activité
                    </Link>
                  </li>
                  <li class="nav-item sub-menu">
                    <Link
                      class="nav-link nav-links-color"
                      to="/PageAcceuilEnseignant/SupprimerActivite"
                    >
                      Supprimer un activité
                    </Link>
                  </li>
                </div>
                <li class="nav-item">
                  <Link
                    class="nav-link nav-links-color"
                    to="/PageAcceuilEnseignant/RegistreAppel"
                  >
                    Registre d'appel
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link nav-links-color"
                    to="/PageAcceuilEnseignant/AttribuerNote"
                  >
                    Attribuer note
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link nav-links-color" to="#!">
                    Ajouter quiz
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
export default PageAcceuilEnseignant;
