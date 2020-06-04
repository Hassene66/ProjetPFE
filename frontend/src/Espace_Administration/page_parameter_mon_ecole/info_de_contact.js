import React from "react";
import "./info_de_contact.css";

class info_de_contact extends React.Component {
  state = { num_tel: "", email: "", location: "" };
  handlechange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div className="col-sm-6  px-5">
        <form>
          <label className="mb-0">
            <h5 className="mb-0">Info de contact</h5>
          </label>
          <div className="infoElm">
            <div className="row ">
              <div className="col-sm-12  col-md-10 col-lg-8  x">
                <span
                  className="iconify"
                  data-inline="false"
                  data-icon="vaadin:phone-landline"
                ></span>
                <input
                  onChange={this.handlechange}
                  className="form-control y"
                  type="text"
                  placeholder="Numéro de téléphone"
                  value={this.state.num_tel}
                  name="num_tel"
                ></input>
              </div>
            </div>
          </div>
          <div className="infoElm">
            <div className="row">
              <div className="col-sm-12 col-md-10 col-lg-8  x">
                <span
                  className="iconify"
                  data-inline="false"
                  data-icon="ic:outline-email"
                ></span>
                <input
                  onChange={this.handlechange}
                  className="form-control y"
                  type="text"
                  placeholder="Email "
                  name="email"
                  value={this.state.email}
                ></input>
              </div>
            </div>
          </div>
          <div className="infoElm">
            <div className="row">
              <div className="col-sm-12 col-md-10 col-lg-8  x ">
                <span
                  className="iconify"
                  data-inline="false"
                  data-icon="ic:sharp-location-on"
                ></span>
                <input
                  onChange={this.handlechange}
                  className="form-control y"
                  type="text"
                  placeholder="Emplacement de l'école"
                  name="location"
                  value={this.state.location}
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
export default info_de_contact;
