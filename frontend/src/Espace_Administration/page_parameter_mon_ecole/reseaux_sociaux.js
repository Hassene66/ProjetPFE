import React from "react";
import "./reseaux_sociaux.css";

class réseaux_sociaux extends React.Component {
  state = { facebook_link: "", twitter_link: "", linkedIn_link: "" };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div className="col-sm-6 px-5">
        <form>
          <label className="mb-0">
            <h5 className="mb-0">Réseaux sociaux</h5>
          </label>
          <div className="infoElm">
            <div className="row ">
              <div className=" col-sm-12  col-md-10 col-lg-8  x">
                <span
                  className="iconify"
                  data-inline="false"
                  data-icon="ant-design:facebook-filled"
                ></span>
                <input
                  id="reseauSociaux"
                  className="form-control y"
                  type="text"
                  name="facebook_link"
                  value={this.state.facebook_link}
                  onChange={this.handleChange}
                  placeholder="Lien vers la page Facebook"
                ></input>
              </div>
            </div>
          </div>
          <div className="infoElm">
            <div className="row">
              <div className=" col-sm-12  col-md-10 col-lg-8  x">
                <span
                  className="iconify"
                  data-inline="false"
                  data-icon="uil:twitter"
                ></span>
                <input
                  className="form-control y"
                  type="text"
                  placeholder="Lien vers la page Twitter"
                  name="twitter_link"
                  value={this.state.twitter_link}
                  onChange={this.handleChange}
                ></input>
              </div>
            </div>
          </div>
          <div className="infoElm">
            <div className="row">
              <div className=" col-sm-12  col-md-10 col-lg-8  x">
                <span
                  className="iconify"
                  data-inline="false"
                  data-icon="ant-design:linkedin-filled"
                ></span>
                <input
                  className="form-control y"
                  type="text"
                  placeholder="Lien vers la page LinkedIn"
                  name="linkedIn_link"
                  value={this.state.linkedIn_link}
                  onChange={this.handleChange}
                ></input>
              </div>
            </div>
            <div className=" pt-4">
              <button type="submit" className="btn btn-success  btn-md ">
                Soumettre
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default réseaux_sociaux;
