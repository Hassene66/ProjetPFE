import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import Spinner from "../../Components/Spinner";
import { setAlert } from "../../actions/alert";
import Alert from "../../Components/alert";
const BoiteDeReception = ({ auth: { user } }) => {
  const [formData, setFormData] = useState({
    MessagesRecu: [],
  });
  const [loadingState, setloadingState] = useState(false);
  const { MessagesRecu } = formData;

  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const identifiant = user.identifiant;
    const body = JSON.stringify({ identifiant });
    axios.post("/Contacter/Get", body, config).then((res) => {
      if (typeof res.data === "object") {
        setFormData({
          ...formData,
          MessagesRecu: res.data,
        });
        setloadingState({ loadingState: true });
      } else {
        if (typeof res.data === "string") {
          setFormData({
            ...formData,
            MessagesRecu: [],
          });
          setloadingState({ loadingState: true });
        }
      }
    });
  }, []);
  console.log(MessagesRecu);
  return typeof MessagesRecu[0] === "undefined" && loadingState === false ? (
    <Spinner />
  ) : (
    <div className="col p-3  ">
      <div classname="container">
        {loadingState &&
          (MessagesRecu.length === 0 ? (
            <h1>Il n'y a pas des nouveaux messages reçu</h1>
          ) : (
            <Fragment>
              <h1>Table des messages</h1>
              <table className="table container mt-5">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Num</th>
                    <th scope="col">Expéditeur</th>
                    <th scope="col">Sujet</th>
                    <th scope="col">Message</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                {MessagesRecu.map((elem, idx) => {
                  return (
                    <tbody>
                      <tr>
                        <td>{idx + 1}</td>
                        <td>{elem.PrénomEtNomEnseignant}</td>
                        <td>{elem.matièreEnseigné}</td>
                        <td>
                          {elem.noteContrôle1 === undefined
                            ? "N/A"
                            : elem.noteContrôle1}
                        </td>
                        <td>
                          {elem.noteSynthèse1 === undefined
                            ? "N/A"
                            : elem.noteSynthèse1}
                        </td>
                        <td>
                          {elem.noteContrôle2 === undefined
                            ? "N/A"
                            : elem.noteContrôle2}
                        </td>
                        <td>
                          {elem.noteSynthèse2 === undefined
                            ? "N/A"
                            : elem.noteSynthèse2}
                        </td>
                        <td>
                          {elem.noteContrôle3 === undefined
                            ? "N/A"
                            : elem.noteContrôle3}
                        </td>
                        <td>
                          {elem.noteSynthèse3 === undefined
                            ? "N/A"
                            : elem.noteSynthèse3}
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </Fragment>
          ))}
      </div>
    </div>
  );
};
BoiteDeReception.prototype = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { setAlert })(BoiteDeReception);
