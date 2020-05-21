import React, { useState } from "react";
import Content from "./Roots/Content";
import Navbar from "./Navbar";
import "./PageAcceuilEleve.css";
import { Link } from "react-router-dom";
const PageAcceuilEleve = () => {
  const [showSubActivité, setShowSubActivité] = useState(false);

  return (
    <div style={{ paddingTop: "62px" }}>
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
                    to="/PageAcceuilEleve/MesCours"
                  >
                    Mes Cours
                  </Link>
                </li>
                <li className="nav-item  flex-row ">
                  <Link
                    className="nav-link nav-links-color dropdown-toggle "
                    to="#"
                    disabled
                    onClick={() => setShowSubActivité(!showSubActivité)}
                  >
                    Activité
                  </Link>
                </li>
                <div className={showSubActivité ? "show" : "hide"}>
                  <li className="nav-item sub-menu">
                    <Link
                      className="nav-link active nav-links-color"
                      to="/PageAcceuilEleve/MesActivites"
                    >
                      Mes Activités
                    </Link>
                  </li>
                  <li className="nav-item sub-menu">
                    <Link
                      className="nav-link nav-links-color"
                      to="/PageAcceuilEleve/EnvoyerActivite"
                    >
                      Envoyer Activité
                    </Link>
                  </li>
                </div>
                <li className="nav-item">
                  <Link
                    className="nav-link nav-links-color"
                    to="/PageAcceuilEleve/MesNotes"
                  >
                    Mes notes
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link nav-links-color"
                    to="/PageAcceuilEleve/Moyennes"
                  >
                    Mes Moyennes
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-links-color" to="#">
                    Contacter Enseignant
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-links-color" to="#">
                    Contacter Admin
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
