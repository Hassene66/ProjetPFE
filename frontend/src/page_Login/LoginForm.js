import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./LoginForm.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../actions/auth";

const LoginForm = ({
  login,
  isAuthenticated,
  Role,
  Loading,
  auth: { token },
}) => {
  const [formData, setFormData] = useState({
    identifiant: "",
    MotDePasse: "",
  });

  const { identifiant, MotDePasse } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    login(identifiant, MotDePasse);
  };
  //Redirect if loged in
  if (Role !== null)
    if (
      isAuthenticated &&
      Role.typeUtilisateur === "admin" &&
      !Loading &&
      token
    ) {
      return <Redirect to="/AccueilAdministration" />;
    } else {
      if (
        isAuthenticated &&
        Role.typeUtilisateur === "élève" &&
        !Loading &&
        token
      ) {
        return <Redirect to="/Contact" />;
      } else {
        if (
          isAuthenticated &&
          Role.typeUtilisateur === "enseignant" &&
          !Loading
        )
          return <Redirect to="/NosFormation" />;
      }
    }

  return (
    <div className="container   Font-type ">
      <div className="row my-row">
        <div className="col my-col  mt-5">
          <form onSubmit={(e) => onSubmit(e)}>
            <div className=" col-xl-4 col-lg-5 col-md-7 col-sm-9 mx-auto   form p-5 my-form mb-5">
              <h1 className="couleur-identifier mt-3 mb-3 text-center">
                S'identifier
              </h1>
              <div className="form-group">
                <label htmlFor="identifiant" className="text1   ">
                  Identifiant :
                </label>

                <div className="add-icon">
                  <span
                    className="iconify "
                    data-inline="false"
                    data-icon="ic:round-person"
                  ></span>
                  <input
                    type="text"
                    className=" my-input "
                    id="identifiant"
                    name="identifiant"
                    placeholder="Votre identifiant"
                    value={identifiant}
                    onChange={(e) => onChange(e)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="mdp" className="text1">
                  Mot de passe :
                </label>

                <div className="add-icon">
                  <span
                    className="iconify"
                    data-inline="false"
                    data-icon="bx:bxs-lock-alt"
                    style={{ fontSize: "20px" }}
                  ></span>
                  <input
                    type="password"
                    name="MotDePasse"
                    className="border-edit my-input"
                    id="mdp"
                    placeholder=" Votre mot de passe "
                    value={MotDePasse}
                    onChange={(e) => onChange(e)}
                  />
                </div>
              </div>

              <div className="text-center">
                <button type="submit" className="button mb-3 mt-3 ">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  Role: PropTypes.object.isRequired,
  Loading: PropTypes.bool,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  Role: state.auth.user,
  Loading: state.auth.loading,
  auth: state.auth,
});

export default connect(mapStateToProps, { login })(LoginForm);
