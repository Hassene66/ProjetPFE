import React, { Component } from "react";
import image1 from "./Images/person-1.jpg";
import image2 from "./Images/person-2.jpg";
import image3 from "./Images/person-1.jpg";
import "./temoinage.css";
export class temoinage extends Component {
  render() {
    return (
      <div className="tempoinage-color ">
        <div className="container d-flex justify-content-center mt-0">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner  ">
              <div className="carousel-item active mx-auto">
                <img
                  className="d-block  rounded-circle mx-auto my-3 mt-5 "
                  src={image1}
                  alt="First slide"
                  width="120"
                  height="120"
                />
                <blockquote className="pb-5 mb-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
                  perspiciatis, sunt nobis harum dolore similique aliquam, hic
                  eaque sapiente sequi repellat, voluptatum eveniet nesciunt at
                  reiciendis in ad inventore maiores!
                </blockquote>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block  rounded-circle mx-auto my-3 mt-5"
                  src={image2}
                  alt="Second slide"
                  width="120"
                  height="120"
                />
                <blockquote className="pb-5 mb-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
                  perspiciatis, sunt nobis harum dolore similique aliquam, hic
                  eaque sapiente sequi repellat, voluptatum eveniet nesciunt at
                  reiciendis in ad inventore maiores!.
                </blockquote>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block  rounded-circle mx-auto my-3 mt-5"
                  src={image3}
                  alt="Third slide"
                  width="120"
                  height="120"
                />
                <blockquote className="pb-5 mb-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
                  perspiciatis, sunt nobis harum dolore similique aliquam, hic
                  eaque sapiente sequi repellat, voluptatum eveniet nesciunt at
                  reiciendis in ad inventore maiores!
                </blockquote>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default temoinage;
