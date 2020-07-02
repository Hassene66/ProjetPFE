import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import { setAlert } from "../../actions/alert";
import Alert from "../../Components/alert";
import { Link } from "react-router-dom";
const VoirPlus = (props) => {
  const [formData, setFormData] = useState({
    message: "",
  });
  const { message } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const Message = {};
    Message.prenomEmetteur = props.auth.user.prénom;
    Message.nomEmetteur = props.auth.user.nom;
    Message.identifiantEmetteur = props.auth.user.identifiant;
    Message.classeEmetteur = "";
    Message.prenomDestinataire = props.location.state.detail.prenomEmetteur;
    Message.nomDestinataire = props.location.state.detail.nomEmetteur;
    Message.identifiantDestinataire =
      props.location.state.detail.identifiantEmetteur;
    Message.Sujet = "RE:" + props.location.state.detail.Sujet;
    Message.Message = message;
    const body = {};
    body.ListeDesMesages = Message;

    axios
      .post("/Contacter/Enseignant", body, config)
      .then((res) => props.setAlert(res.data.message, "success"));
  };

  return (
    <div className="col p-3">
      <Alert />
      <form onSubmit={(e) => onSubmit(e)}>
        <h1>Message En details</h1>
        <div className="mb-3">
          <p>
            <strong>De : </strong>
            {props.location.state.detail.prenomEmetteur +
              " " +
              props.location.state.detail.nomEmetteur}
          </p>
        </div>
        <div className="mb-3">
          <p>
            <strong>Sujet : </strong>
            {props.location.state.detail.Sujet}
          </p>
        </div>
        <div className="mb-3">
          <p>
            <strong>Message : </strong>
            {props.location.state.detail.Message}
          </p>
        </div>
        <div className="mt-5 ">
          <Link to="/AccueilAdministration/BoiteDeReception">
            <button type="button" className="btn btn-primary ml-1  ">
              Retour
            </button>
          </Link>

          <button
            // style={{ marginLeft: "30em" }}
            type="button"
            // style={{ marginRight: "150px" }}
            className="btn btn-primary ml-5 "
            data-toggle="collapse"
            data-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Répondre
          </button>
        </div>
        <div className="collapse" id="collapseExample">
          <div className="form-group mt-5 ">
            <label for="exampleFormControlTextarea1">Résponse :</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              required
              name="message"
              onChange={(e) => onChange(e)}
            ></textarea>
            <div className="text-center">
              <button type="submit" class="btn btn-primary mt-3">
                Envoyer
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
VoirPlus.prototype = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { setAlert })(VoirPlus);
