import React, { useState } from "react";
import Content from "./Roots/Content";
import Navbar from "./Navbar";
import "./PageAcceuilEleve.css";
import { Link } from "react-router-dom";
const PageAcceuilEleve = () => {
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
                    to="/PageAcceuilEleve/MesCours"
                  >
                    Mes Cours
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link active nav-links-color"
                    to="/PageAcceuilEleve/MesActivites"
                  >
                    Mes Activités
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link nav-links-color" to="#">
                    Mes notes
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link nav-links-color" to="#">
                    Contacter Enseignant
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link nav-links-color" to="#">
                    Contacter Admin
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link nav-links-color" to="#">
                    Attribuer note
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
