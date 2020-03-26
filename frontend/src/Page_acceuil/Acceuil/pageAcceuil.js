import React from "react";
import Navbar from "../../Components/navbarAcceuil";
import Footer from "../../Components/footerAcceuil";
import Slider from "./slider";
import Article from "./article";
import Presentation from "./presentation";
import Counter from "./counter";

import Temoinage from "./temoinage";

class PageAcceuil extends React.Component {
  render() {
    return (
      <div>
        <div className="Site">
          <div className="Site-content">
            <div className="fluid-container  ">
              <Navbar />
              <Slider />
              <Presentation />
              <Article />
              <Counter />
              <Temoinage />
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

export default PageAcceuil;
