import React from "react";
import "./nom_ecole.css";

class histo extends React.Component {
  state = { valeur_Historique: "" };
  handleChange = event => {
    this.setState({ valeur_Historique: event.target.value });
  };
  render() {
    return (
      <div className="col-sm-6">
        <div className="row p-5 ">
          <div className="col-sm-12  col-lg-10 ">
            <form>
              <div className="form-group">
                <label>
                  <h5>Historique</h5>
                </label>
                <textarea
                  onChange={this.handleChange}
                  className="form-control aa"
                  rows="6"
                  value={this.state.valeur_Historique}
                ></textarea>
                <div className="d-flex justify-content-center pt-4">
                  <button type="submit" className="btn btn-success  btn-md ">
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
export default histo;
