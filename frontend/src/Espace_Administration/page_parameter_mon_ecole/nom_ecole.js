import React from "react";
import "./nom_ecole.css";

class nom_ecole extends React.Component {
  state = { valeur_nom_ecole: "" };
  handleChange = event => {
    this.setState({ valeur_nom_ecole: event.target.value });
  };
  render() {
    return (
      <div>
        <div className="row ">
          <div className="col-sm-8 col-md-6 col-lg-4 p-5 ">
            <form>
              <div className="form-group ">
                <label>
                  <h5>Ecrire le nom de l'école</h5>
                </label>
                <div className=" xx">
                  <input
                    onChange={this.handleChange}
                    className="form-control mr-3"
                    type="text"
                    placeholder="Nom de l'ecole "
                    value={this.state.valeur_nom_ecole}
                  />

                  <button type="submit" className="btn btn-success  btn-md ">
                    Soumettre
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default nom_ecole;
