import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import Spinner from "../../Components/Spinner";
import { setAlert } from "../../actions/alert";
import { Link } from "react-router-dom";

const BoiteDeReception = ({ auth: { user } }) => {
  const [formData, setFormData] = useState({
    MessagesRecu: [],
  });
  const [loadingState, setloadingState] = useState(false);
  const [DeleteState, setDeleteState] = useState(false);

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
  }, [DeleteState]);
  const deleteMsg = async (_id) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ _id });
    await axios.post("/Contacter/Delete", body, config);
    setDeleteState(!DeleteState);
  };
  return typeof MessagesRecu[0] === "undefined" && loadingState === false ? (
    <Spinner />
  ) : (
    <div className="col p-3  ">
      <div className="container-fluid">
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
                    <th scope="col">Classe</th>
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
                        <td>{elem.prenomEmetteur + " " + elem.nomEmetteur}</td>
                        <td>{elem.classeEmetteur}</td>
                        <td>
                          <p
                            style={{
                              textOverflow: "ellipsis",
                              overflow: "hidden",
                              width: "12rem",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {elem.Sujet}
                          </p>
                        </td>
                        <td>
                          <p
                            style={{
                              textOverflow: "ellipsis",
                              overflow: "hidden",
                              width: "17rem",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {elem.Message}
                          </p>
                        </td>
                        <td>
                          <Link
                            to={{
                              pathname: "/PageAcceuilEnseignant/VoirPlus",
                              state: { detail: elem },
                            }}
                          >
                            <button
                              className="btn btn-primary"
                              title="Voir plus"
                            >
                              <i class="fas fa-search-plus"></i>
                            </button>
                          </Link>
                          <button
                            className="btn btn-danger ml-3"
                            title="Supprimer"
                            onClick={() => deleteMsg(elem._id)}
                          >
                            <i class="fa fa-trash"></i>
                          </button>
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
