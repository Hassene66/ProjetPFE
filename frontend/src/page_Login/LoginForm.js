import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./LoginForm.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../actions/auth";
import iconfinder from "./image/iconfinder.png";
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
        return <Redirect to="/PageAcceuilEleve" />;
      } else {
        if (
          isAuthenticated &&
          Role.typeUtilisateur === "enseignant" &&
          !Loading
        )
          return <Redirect to="/PageAcceuilEnseignant" />;
      }
    }

  return (
    <div className="login-styling">
      <div className="auth-wrapper">
        <div className="auth-inner pt-4">
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="text-center ">
              <img src={iconfinder} width="90" height="90" className="mb-2" />
            </div>
            <div className="form-group">
              <label htmlFor="identifiant">Identifiant :</label>

              <input
                type="text"
                className="form-control"
                placeholder="Identifiant"
                name="identifiant"
                value={identifiant}
                onChange={(e) => onChange(e)}
                autofocus
              />
            </div>

            <div className="form-group">
              <label htmlFor="mdp" className="text1">
                Mot de passe :
              </label>
              <input
                type="password"
                className="form-control"
                name="MotDePasse"
                onChange={(e) => onChange(e)}
                value={MotDePasse}
                placeholder="Mot de Passe"
              />
            </div>
            <button type="submit" className="btn btn-dark btn-block mt-4">
              S'identifier
            </button>
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
