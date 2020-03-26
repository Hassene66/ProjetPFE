import React, { Component } from "react";
import Navbar from "../../Components/navbarAcceuil";
import Jumbotron from "./jumbotron";
import Content from "./Content";
import Footer from "../../Components/footerAcceuil";
export class PageActivité extends Component {
  render() {
    return (
      <div>
        <div className="Site">
          <div className="Site-content">
            <div className="fluid-container  ">
              <Navbar />
              <Jumbotron />
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

export default PageActivité;
