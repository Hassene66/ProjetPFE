import React, { Component } from "react";
import Navbar from "../../Components/navbarAcceuil";
import Content from "./Content";
import Sigle from "./sigle";
import Footer from "../../Components/footerAcceuil";
export class PageFormation extends Component {
  render() {
    return (
      <div>
        <div className="Site">
          <div className="Site-content">
            <div className="fluid-container  ">
              <Navbar />
              <Sigle />
              <Content />
            </div>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default PageFormation;
