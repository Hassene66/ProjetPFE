import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import Spinner from "../../Components/Spinner";
import { setAlert } from "../../actions/alert";
import Alert from "../../Components/alert";
const MaMoyenne = ({ auth: { user } }) => {
  const [formData, setFormData] = useState({
    MesMoyennes: {},
  });
  const [loadingState, setloadingState] = useState(false);
  const { MesMoyennes } = formData;

  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const identifiant = user.identifiant;
    const body = JSON.stringify({ identifiant });
    axios.post("/Admin/MoyenneEleve", body, config).then((res) => {
      if (typeof res.data === "object") {
        setFormData({
          ...formData,
          MesMoyennes: res.data,
        });
        setloadingState({ loadingState: true });
      } else {
        if (typeof res.data === "string") {
          setFormData({
            ...formData,
            MesMoyennes: {},
          });
          setloadingState({ loadingState: true });
        }
      }
    });
  }, []);

  return typeof MesMoyennes[0] === "undefined" && loadingState === false ? (
    <Spinner />
  ) : (
    <div className="col p-3  ">
      <div classname="container">
        {loadingState && (
          <Fragment>
            <h1>Table des moyennes</h1>
            <table className="table table-responsive container mt-5  w-100 d-block d-md-table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Prénom Et Nom</th>
                  <th scope="col">Moyenne Semestre 1</th>
                  <th scope="col">Moyenne Semestre 2</th>
                  <th scope="col">Moyenne Semestre 3</th>
                </tr>
              </thead>
              {
                <tbody>
                  <tr>
                    <td>{user.prénom + " " + user.nom}</td>
                    <td>
                      {MesMoyennes.MoyenneS1 === "" ||
                      MesMoyennes.MoyenneS1 === undefined ? (
                        <strong>-</strong>
                      ) : (
                        MesMoyennes.MoyenneS1
                      )}
                    </td>
                    <td>
                      {MesMoyennes.MoyenneS2 === "" ||
                      MesMoyennes.MoyenneS2 === undefined ? (
                        <strong>-</strong>
                      ) : (
                        MesMoyennes.MoyenneS2
                      )}
                    </td>
                    <td>
                      {MesMoyennes.MoyenneS3 === "" ||
                      MesMoyennes.MoyenneS3 === undefined ? (
                        <strong>-</strong>
                      ) : (
                        MesMoyennes.MoyenneS3
                      )}
                    </td>
                  </tr>
                </tbody>
              }
            </table>
          </Fragment>
        )}
      </div>
    </div>
  );
};
MaMoyenne.prototype = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { setAlert })(MaMoyenne);
