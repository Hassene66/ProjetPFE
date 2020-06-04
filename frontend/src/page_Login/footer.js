import React from "react";
import "./footer.css";

class footer extends React.Component {
  render() {
    return (
      <footer className="footerLogin">
        <p className="nom_ecole">
          <span
            className="iconify copyright"
            data-inline="false"
            data-icon="ant-design:copyright-outlined"
          ></span>
          ~ NOM DE L'ECOLE
        </p>
      </footer>
    );
  }
}
export default footer;
