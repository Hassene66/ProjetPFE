import React, { Component } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
class FormulaireContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      MotDePasse: "",
      msg: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.setState({
      email: "",
      MotDePasse: "",
      msg: ""
    });
  }
  render() {
    return (
      <div>
        <form className="container" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="saisieEmail">Email :</label>
            <input
              type="email"
              className="form-control w-25"
              id="saisieEmail"
              aria-describedby="emailHelp"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Mot de passe :</label>
            <input
              type="password"
              className="form-control w-25"
              id="exampleInputPassword1"
              name="MotDePasse"
              value={this.state.MotDePasse}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="messageASoumettre">Message :</label>
            <textarea
              className="form-control w-50 "
              id="messageASoumettre"
              rows="5"
              name="msg"
              value={this.state.msg}
              onChange={this.handleChange}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary mb-5">
            Envoyer
          </button>
        </form>
      </div>
    );
  }
}

export default FormulaireContact;
