import React from "react";
import "./nom_ecole.css";

class mot extends React.Component {
  state = { valeur_mot_directeur: "" };
  handleChange = event => {
    this.setState({ valeur_mot_directeur: event.target.value });
  };
  render() {
    return (
      <div className="   p-5">
        <div className="row ">
          <div className="col-sm-8 col-md-7 col-lg-5 col-xl-4  ">
            <form>
              <div className="form-group">
                <label>
                  <h5>Mot de directeur</h5>
                </label>
                <textarea
                  onChange={this.handleChange}
                  className="form-control aa"
                  rows="6"
                  value={this.state.valeur_mot_directeur}
                ></textarea>
                <div className="d-flex justify-content-center pt-4">
                  <button type="submit" className="btn btn-success btn-md ">
                    Valider
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
export default mot;
