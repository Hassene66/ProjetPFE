import React, { Component } from "react";

export class info_données extends Component {
  render() {
    return (
      <div className="fluid-container my-3 ">
        <div className="text-center mb-2">
          <h4
            style={{
              fontFamily: "sans-serif",
              fontSize: "40px",
              "border-bottom": "4px solid #51be78",
              display: "inline-block"
            }}
          >
            Quelques informations et données sur le collége
          </h4>
        </div>
        <h4 className="text-center pb-2" style={{ color: "#757572" }}>
          ~ Les cycles du collége ~
        </h4>
        <div className="row d-flex justify-content-center ">
          <div className="col-12 mx-5 px-5 mb-5 ">
            <div className="card  tab-card  ">
              <div className="card-header tab-card-header ">
                <ul
                  className="nav nav-tabs card-header-tabs"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="one-tab"
                      data-toggle="tab"
                      href="#one"
                      role="tab"
                      aria-controls="One"
                      aria-selected="true"
                    >
                      Septieme
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="two-tab"
                      data-toggle="tab"
                      href="#two"
                      role="tab"
                      aria-controls="Two"
                      aria-selected="false"
                    >
                      Huitiéme
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="three-tab"
                      data-toggle="tab"
                      href="#three"
                      role="tab"
                      aria-controls="Three"
                      aria-selected="false"
                    >
                      Neuviéme
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active p-3"
                  id="one"
                  role="tabpanel"
                  aria-labelledby="one-tab"
                >
                  <h5 className="card-title">Cycle d'exploitation :</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum cum tenetur ut nisi, voluptas tempora dolore
                    perspiciatis dolor. Quas saepe ullam obcaecati provident
                    quisquam rem sequi corrupti similique praesentium! Dolore
                    nulla suscipit amet sit assumenda eaque distinctio rem optio
                    fuga saepe iusto, dolorum quo tempora impedit. Commodi,
                    assumenda. Accusantium, numquam!
                  </p>
                </div>
                <div
                  className="tab-pane fade p-3"
                  id="two"
                  role="tabpanel"
                  aria-labelledby="two-tab"
                >
                  <h5 className="card-title">Cycle d'exploitation :</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eveniet perspiciatis porro necessitatibus quas. Voluptatum
                    praesentium obcaecati quas itaque alias labore?
                  </p>
                </div>
                <div
                  className="tab-pane fade p-3"
                  id="three"
                  role="tabpanel"
                  aria-labelledby="three-tab"
                >
                  <h5 className="card-title">Cycle d'exploitation :</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Eveniet perspiciatis porro necessitatibus quas. Voluptatum
                    praesentium obcaecati quas itaque alias labore?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default info_données;
