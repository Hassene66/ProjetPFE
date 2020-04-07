import React, { useState } from "react";
import Content from "./Roots/Content";
import Navbar from "./Navbar";
import "./GererLesEleves.css";
const PageGererLesEleves = () => {
  const [showSub, setShowSub] = useState(false);
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
                  <a class="nav-link active nav-links-color" href="#">
                    Retour a l'acceuil
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active nav-links-color" href="/MesÉlèves">
                    Mes élèves
                  </a>
                </li>
                <li class="nav-item  flex-row ">
                  <a
                    class="nav-link nav-links-color dropdown-toggle "
                    href="#"
                    disabled
                    onClick={() => setShowSub(!showSub)}
                  >
                    Cours
                  </a>
                </li>
                <div className={showSub ? "show" : "hide"}>
                  <li class="nav-item sub-menu">
                    <a class="nav-link nav-links-color" href="#">
                      Affichier mes cours
                    </a>
                  </li>
                  <li class="nav-item sub-menu">
                    <a class="nav-link nav-links-color" href="#">
                      Mettre à jour un cours
                    </a>
                  </li>
                  <li class="nav-item sub-menu">
                    <a class="nav-link nav-links-color" href="#">
                      Supprimer un cours
                    </a>
                  </li>
                </div>
                <li class="nav-item">
                  <a class="nav-link nav-links-color" href="#">
                    Registre d'appel
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-links-color" href="#">
                    Ajouter quiz
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-links-color" href="#">
                    Ajouter activité
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-links-color" href="#">
                    Attribuer note
                  </a>
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
export default PageGererLesEleves;
