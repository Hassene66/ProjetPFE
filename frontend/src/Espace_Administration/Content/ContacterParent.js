import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import Spinner from "../../Components/Spinner";
import { setAlert } from "../../actions/alert";
import Alert from "../../Components/alert";
const ContacterParent = ({ setAlert, auth: { user } }) => {
  const [formData, setFormData] = useState({
    classe: [],
    classeSelectioné: "",
    submitted: false,
    count: 0,
  });
  const [formData1, setFormData1] = useState({
    listeDesEleves: [],
    élèveSelectioné: "",
    Destinataire: "",
    sujet: "",
    message: "",
  });

  const { classe, classeSelectioné, submitted, count } = formData;
  const {
    élèveSelectioné,
    listeDesEleves,
    sujet,
    message,
    Destinataire,
  } = formData1;
  useEffect(() => {
    async function anyNameFunction() {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.get("/ListeClasses");
      setFormData({
        ...formData,
        classe: response.data,
        classeSelectioné: response.data[0],
      });
      let classe = response.data[0];
      const body = JSON.stringify({ classe });
      await axios.post("/Admin/mesEleves", body, config).then((res) => {
        if (typeof res.data === "object") {
          setFormData1({
            ...formData1,
            listeDesEleves: res.data,
            élèveSelectioné: "1- " + res.data[0].prénom + " " + res.data[0].nom,
            Destinataire:
              res.data[0].profileEleve.PrénomParent +
              " " +
              res.data[0].profileEleve.NomParent,
          });
        } else {
          if (typeof res.data === "string") {
            setFormData1({
              ...formData1,
              listeDesEleves: res.data,
              submitted: true,
            });
          }
        }
      });
    }
    anyNameFunction();
  }, []);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      submitted: false,
      count: 0,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const classe = e.target.value;
    const body = JSON.stringify({ classe });
    axios.post("/Admin/mesEleves", body, config).then((res) => {
      if (typeof res.data === "object") {
        setFormData1({
          ...formData1,
          listeDesEleves: res.data,
          élèveSelectioné: "1- " + res.data[0].prénom + " " + res.data[0].nom,
          Destinataire:
            res.data[0].profileEleve.PrénomParent +
            " " +
            res.data[0].profileEleve.NomParent,
        });
      } else {
        if (typeof res.data === "string") {
          setFormData1({
            ...formData1,
            listeDesEleves: res.data,
            submitted: true,
          });
        }
      }
    });
  };
  const onChange1 = (e) => {
    setFormData1({
      ...formData1,
      [e.target.name]: e.target.value,
    });
  };
  const onChange2 = (e) => {
    const numb = Number(e.target.value.charAt(0)) - 1;
    setFormData1({
      ...formData1,
      [e.target.name]: e.target.value,
      Destinataire:
        listeDesEleves[numb].profileEleve.PrénomParent +
        " " +
        listeDesEleves[numb].profileEleve.NomParent,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const lastcount = Number(élèveSelectioné.charAt(0)) - 1;
    const Message = {};
    Message.prenomEmetteur = user.prénom;
    Message.nomEmetteur = user.nom;
    Message.identifiantEmetteur = user.identifiant;
    Message.classeEmetteur = "";
    Message.prenomDestinataire =
      listeDesEleves[lastcount].profileEleve.PrénomParent;
    Message.nomDestinataire = listeDesEleves[lastcount].profileEleve.NomParent;
    Message.identifiantDestinataire =
      listeDesEleves[lastcount].profileEleve.identifiantParent;
    Message.Sujet = sujet;
    Message.Message = message;
    const body = {};
    body.ListeDesMesages = Message;

    axios
      .post("/Contacter/Enseignant", body, config)
      .then((res) => setAlert(res.data.message, "success"));
  };

  return typeof listeDesEleves[0] === "undefined" ||
    classe[0] === "undefined" ? (
    <Spinner />
  ) : (
    <div className="col p-3">
      <Alert />
      <h1>Contacter Parent</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <h6>Classe :</h6>
          <select
            className="form-control w-25"
            value={classeSelectioné}
            onChange={(e) => onChange(e)}
            name="classeSelectioné"
          >
            {classe.map((classe) => {
              return (
                <option key={classe} value={classe}>
                  {classe}
                </option>
              );
            })}
          </select>
        </div>
        {typeof listeDesEleves === "string" ? (
          <h3 className="text-center mt-5">aucun élève dans cette classe</h3>
        ) : (
          typeof listeDesEleves === "object" && (
            <Fragment>
              <div className="form-group">
                <h6>Sélectionner un élève :</h6>
                <select
                  className="form-control w-25"
                  value={élèveSelectioné}
                  onChange={(e) => onChange2(e)}
                  name="élèveSelectioné"
                >
                  {listeDesEleves.map((élève, index) => {
                    return (
                      <option
                        key={élève._id}
                        value={`${index + 1}- ${élève.prénom}  ${élève.nom}`}
                        onChange={(e) => onChange1(e)}
                        name="élèveSelectioné"
                      >
                        {`${index + 1}- ${élève.prénom}  ${élève.nom}`}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-2">
                <p>
                  <strong>Destinataire : </strong>
                  {Destinataire}
                </p>
              </div>
              <div className="form-group mt-2">
                <h6>Sujet :</h6>
                <input
                  type="text"
                  className="form-control w-25"
                  id="saisieEmail"
                  aria-describedby="emailHelp"
                  name="sujet"
                  required
                  onChange={(e) => onChange1(e)}
                />
              </div>

              <div className=" mt-2">
                <h6>Message :</h6>
                <textarea
                  type="text"
                  id="saisieMessage"
                  aria-describedby="saisieMessage"
                  rows="6"
                  cols="100"
                  name="message"
                  required
                  onChange={(e) => onChange1(e)}
                ></textarea>
              </div>
              <div className="mt-2">
                <button type="submit" className="btn btn-primary">
                  Envoyer
                </button>
              </div>
            </Fragment>
          )
        )}
      </form>
    </div>
  );
};
ContacterParent.prototype = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { setAlert })(ContacterParent);
