import React from "react";
import Footer from "../../Components/footer";
import Sidebar from "./sidebar";
import Main_content from "./main_content";
import Nav from "../../Components/navbar";
import Emplacement_Actuelle from "./EmplacementActuelle";
class App extends React.Component {
  render() {
    return (
      <div>
        <div className="Site">
          <div className="Site-content">
            <div className="fluid-container  ">
              <Nav />
              <Emplacement_Actuelle />

              <Main_content />
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
export default App;
