import React from "react";
import image1 from "./Images/2.png";
import image2 from "./Images/3.png";
import "./article.css";

class Article extends React.Component {
  render() {
    return (
      <section className="posts ">
        <div className="fluid-container">
          <div className="row">
            <div className="col-md-6">
              <article>
                <div className="pic">
                  <img className="my-3" width={121} src={image1} alt="" />
                </div>
                <div className="info">
                  <h3>La meilleur méthode d'apprentissage</h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis quasi
                    architecto beatae vitae dicta sunt explicabo.{" "}
                  </p>
                </div>
              </article>
            </div>
            <div className="col-md-6">
              <article>
                <div className="pic">
                  <img className="my-3" width={121} src={image2} alt="" />
                </div>
                <div className="info">
                  <h3>Resultat impressionnants de nos élèves</h3>
                  <p>
                    Vero eos et accusamus et iusto odio dignissimos ducimus
                    blanditiis praesentium voluptatum deleniti atque corrupti
                    quos dolores et quas molestias excepturi sint occaecati
                    cupiditate non provident, similique sunt in culpa.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
        {/* / container */}
      </section>
    );
  }
}
export default Article;
