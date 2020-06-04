import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import image1 from "./Images/bg_1.jpg";
import image2 from "./Images/bg_2.jpg";
import image3 from "./Images/bg_3.jpg";
class Slider extends React.Component {
  render() {
    return (
      <div id="myCarousel" className="carousel slide " data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to={0} className="active" />
          <li data-target="#myCarousel" data-slide-to={1} />
          <li data-target="#myCarousel" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="first-slide img-fluid "
              src={image1}
              alt="First slide"
              width="100%"
              style={{ filter: "brightness(40%)", "max-height": "680px" }}
            />
            <div className="container">
              <div className="carousel-caption text-center">
                <h1
                  className="mb-5 "
                  style={{
                    fontSize: "2.375em",
                    fontWeight: "700",
                    textShadow: "rgba(0,0,0,.5) 0 0 20px",
                    textTransform: "uppercase",
                  }}
                >
                  la meilleur métodologie d'apprentisage
                </h1>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="second-slide img-fluid "
              src={image2}
              alt="Second slide"
              width="100%"
              style={{ filter: "brightness(40%)", "max-height": "680px" }}
            />
            <div className="container">
              <div className="carousel-caption">
                <h1
                  style={{
                    fontSize: "2.375em",
                    fontWeight: "700",
                    textShadow: "rgba(0,0,0,.5) 0 0 20px",
                    textTransform: "uppercase",
                  }}
                >
                  Découvrir nos gallerie d'images
                </h1>

                <p>
                  <Link
                    className="btn btn-lg btn-primary"
                    to="/Galerie"
                    role="button"
                  >
                    Nos Galerie
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="third-slide img-fluid"
              src={image3}
              alt="Third slide"
              width="100%"
              style={{ filter: "brightness(40%)", "max-height": "680px" }}
            />
            <div className="container">
              <div className="carousel-caption text-center">
                <h1
                  style={{
                    fontSize: "2.375em",
                    fontWeight: "700",
                    textShadow: "rgba(0,0,0,.5) 0 0 20px",
                    textTransform: "uppercase",
                  }}
                >
                  Découvrir Nos Activités
                </h1>

                <p>
                  <Link
                    className="btn btn-lg btn-primary"
                    to="/Activité"
                    role="button"
                  >
                    Nos activités
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#myCarousel"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#myCarousel"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
export default Slider;
