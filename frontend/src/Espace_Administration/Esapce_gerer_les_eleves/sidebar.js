import React, { Fragment } from "react";
import "./sidebar.css";

class sidebar extends React.Component {
  state = {
    isOpen: false
  };

  toggleClass = e => {
    e.preventDefault();
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    return (
      <div class="sidenav ">
        <a href="/">Retour a l'acceuil</a>
        <a href="/" onClick={this.toggleClass}>
          <span
            style={{ fontSize: "35px" }}
            class="iconify "
            data-inline="false"
            data-icon="ic:round-menu"
          />
          Liste des élèves
          <span
            style={{ fontSize: "18px", marginLeft: "20px" }}
            class="iconify "
            data-inline="false"
            data-icon="bx:bxs-down-arrow"
          />
        </a>
        <div className={this.state.isOpen ? "show" : "hide"}>
          <a href="/">
            <span
              style={{ marginLeft: "30px" }}
              class="iconify submenu"
              data-inline="false"
              data-icon="ic:baseline-keyboard-arrow-right"
            />
            élèves septième
          </a>
          <a href="/">
            <span
              style={{ marginLeft: "30px" }}
              class="iconify submenu"
              data-inline="false"
              data-icon="ic:baseline-keyboard-arrow-right"
            />
            élèves huitième
          </a>
          <a href="/">
            <span
              style={{ marginLeft: "30px" }}
              class="iconify submenu"
              data-inline="false"
              data-icon="ic:baseline-keyboard-arrow-right"
            />
            élèves neuvième
          </a>
        </div>

        <a href="/">Abscences</a>
        <a href="/">Inscription au concours</a>
        <a href="/">Résultat</a>
        <a href="/">Messagerie</a>
      </div>
    );
  }
}
export default sidebar;
