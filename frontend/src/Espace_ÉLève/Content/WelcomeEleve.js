import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const WelcomeEleve = ({ auth: { user } }) => {
  return (
    <div className="col p-3">
      <div className="alert alert-success" role="alert">
        <h4 className="alert-heading">Connexion avec succés!</h4>
        <hr />
        <h6>Bienvenue {user.prénom + " " + user.nom} </h6>
      </div>
    </div>
  );
};
WelcomeEleve.prototype = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, {})(WelcomeEleve);
