import React, { Component } from "react";
import "./Content.css";
import img1 from "./images_Page_activité/robotic.jpg";
import img3 from "./images_Page_activité/alyssa-ledesma-nMOrt4yVxL4-unsplash.jpg";
import img2 from "./images_Page_activité/adult-boys-children-city-618116.jpg";
export class Content extends Component {
  render() {
    return (
      <div className="container px-0">
        <div id="premierColonne" className="row align-items-center  ">
          <div
            id="premierLigne"
            className="col-lg-6 text-center order-1 order-lg-2 "
          >
            <div className="row justify-content-center">
              <div className="col-9">
                <h2 className="display-4 pb-3">
                  Des clubs dans plusieurs domaine
                </h2>
                <p id="premierParagraphe">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  distinctio voluptates exercitationem assumenda et qui autem,
                  perferendis vero, recusandae reprehenderit fuga aut rem sit
                  veritatis tenetur excepturi non ratione libero quasi,
                  blanditiis enim laboriosam eius nihil! Rem dolores ullam,
                  reiciendis deserunt repellendus nisi, tempore expedita omnis,
                  maiores non vero aspernatur.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-2 order-lg-1">
            <img className="img-fluid imgs" src={img1} alt="" />
          </div>
        </div>
        <div className="row align-items-center ">
          <div className="col-lg-6 order-2   ">
            <img className="img-fluid imgs " src={img2} alt="" />
          </div>
          <div id="dexiemeLigne" className="col-lg-6 text-center order-1 ">
            <div className="row justify-content-center">
              <div className="col-10">
                <h2 className="display-4 pb-3">Plusieurs sorties scolaire</h2>
                <p id="dexiemeParagraphe">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  distinctio voluptates exercitationem assumenda et qui autem,
                  perferendis vero, recusandae reprehenderit fuga aut rem sit
                  veritatis tenetur excepturi non ratione libero quasi,
                  blanditiis enim laboriosam eius nihil! Rem dolores ullam,
                  reiciendis deserunt repellendus nisi, tempore expedita omnis,
                  maiores non vero aspernatur.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center mb-5 ">
          <div
            id="troisiemeligne"
            className="col-lg-6 text-center order-1 order-lg-2 "
          >
            <div className="row justify-content-center">
              <div className="col-9">
                <h2 className="display-4 pb-3">Plusieurs activité sportive</h2>
                <p id="premierParagraphe">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  distinctio voluptates exercitationem assumenda et qui autem,
                  perferendis vero, recusandae reprehenderit fuga aut rem sit
                  veritatis tenetur excepturi non ratione libero quasi,
                  blanditiis enim laboriosam eius nihil! Rem dolores ullam,
                  reiciendis deserunt repellendus nisi, tempore expedita omnis,
                  maiores non vero aspernatur.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-2 order-lg-1">
            <img className="img-fluid imgs" src={img3} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
