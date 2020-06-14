import React, { useState } from "react";
import Content from "./Roots/Content";
import Navbar from "./Navbar";
import "./PageAcceuilParent.css";
import { NavLink } from "react-router-dom";
const PageAcceuilParent = () => {
  return (
    <div style={{ paddingTop: "69px" }} className="EspaceEnseignant">
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
                    to="/PageAcceuilParent/Absence"
                  >
                    Absence
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    activeClassName="activenav"
                    className="nav-link active nav-links-color"
                    to="/PageAcceuilParent/Notes"
                  >
                    Notes
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    activeClassName="activenav"
                    className="nav-link active nav-links-color"
                    to="/PageAcceuilParent/Moyenne"
                  >
                    Moyenne
                  </NavLink>
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
export default PageAcceuilParent;
