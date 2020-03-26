import React, { Component } from "react";
import "./Content.css";
import img1 from "./imagesPageFormation/taylor-wilcox-4nKOEAQaTgA-unsplash.jpg";
import img2 from "./imagesPageFormation/person-writing-on-notebook-669615.jpg";
export class Content extends Component {
  render() {
    return (
      <div className="container px-0">
        <div className="row align-items-center  ">
          <div
            id="premierLigne"
            className="col-lg-6 text-center order-1 order-lg-2 "
          >
            <div className="row justify-content-center">
              <div className="col-9">
                <h2 className="display-4 pb-3">formation riche et variée</h2>
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
                <h2 className="display-4 pb-3">
                  formation basée sur les projects et le pratique
                </h2>
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
      </div>
    );
  }
}

export default Content;
