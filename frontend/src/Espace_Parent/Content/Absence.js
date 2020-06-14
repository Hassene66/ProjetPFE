import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import Spinner from "../../Components/Spinner";
import { setAlert } from "../../actions/alert";
const Absence = ({ auth: { user } }) => {
  const [formData, setFormData] = useState({
    ListeAbsence: [],
  });
  const [loadingState, setloadingState] = useState(false);
  const { ListeAbsence } = formData;

  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const identifiant = user.profileParent.identifiantÉlève;
    const body = JSON.stringify({ identifiant });
    axios.post("/RegistreAppel/GetListe", body, config).then((res) => {
      if (typeof res.data === "object") {
        setFormData({
          ...formData,
          ListeAbsence: res.data,
        });
        setloadingState({ loadingState: true });
      } else {
        if (typeof res.data === "string") {
          setFormData({
            ...formData,
            ListeAbsence: [],
          });
          setloadingState({ loadingState: true });
        }
      }
    });
  }, []);
  console.log(ListeAbsence);
  return loadingState === false ? (
    <Spinner />
  ) : (
    <div className="col p-3  ">
      <div className="fluid-container">
        {ListeAbsence.length !== 0 ? (
          <Fragment>
            <h1>Table d'absence</h1>
            <table className="table container mt-5">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Prénom Et Nom</th>
                  <th scope="col">Enseignant</th>
                  <th scope="col">Matiere</th>
                  <th scope="col">Date</th>
                  <th scope="col">Heure</th>
                </tr>
              </thead>

              <tbody>
                {ListeAbsence.map((el, i) => {
                  return (
                    <Fragment>
                      <tr>
                        <td>
                          {user.profileParent.prénomÉlève +
                            " " +
                            user.profileParent.nomÉlève}
                        </td>
                        <td>{el.PrénomEtNomEnseignant}</td>
                        <td>{el.matièreEnseigné}</td>
                        <td>{el.Date}</td>
                        <td>{el.Temps}</td>
                      </tr>
                    </Fragment>
                  );
                })}
              </tbody>
            </table>
          </Fragment>
        ) : (
          <Fragment>
            <h3 className="mt-5 text-center">
              Aucun enregistrement absent trouvé
            </h3>
          </Fragment>
        )}
      </div>
    </div>
  );
};
Absence.prototype = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { setAlert })(Absence);
