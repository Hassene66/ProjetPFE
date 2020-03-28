import React, { Component } from "react";
import image1 from "./Images/visibility.svg";
import image2 from "./Images/target.svg";
import image3 from "./Images/diamond.svg";
import "./Vision.css";
class Vision extends Component {
  render() {
    return (
      <div className="site-section bg-info">
        <div className="fluid-container mx-5 ">
          <div className="row ">
            <div className="col-lg-4 mb-4 mb-lg-0 ">
              <div className="package text-center bg-white my-5 ">
                <span className="img-wrap">
                  <img src={image1} alt="Image" className="img-fluid" />
                </span>
                <h3 className="text-teal">Notre Vision</h3>
                <p>
                  Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores
                  amet quo corporis distinctio soluta recusandae? amet quo
                  corporis distinctio soluta
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0 ">
              <div className="package text-center bg-white my-5 ">
                <span className="img-wrap">
                  <img src={image2} alt="Image" className="img-fluid" />
                </span>
                <h3 className="text-success">Notre mission</h3>
                <p>
                  Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores
                  amet quo corporis distinctio soluta recusandae? amet quo
                  corporis distinctio soluta
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="package text-center bg-white my-5 ">
                <span className="img-wrap">
                  <img src={image3} alt="Image" className="img-fluid" />
                </span>
                <h3 className="text-danger">Nos Valeurs</h3>
                <p>
                  Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores
                  amet quo corporis distinctio soluta recusandae? amet quo
                  corporis distinctio soluta
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Vision;
