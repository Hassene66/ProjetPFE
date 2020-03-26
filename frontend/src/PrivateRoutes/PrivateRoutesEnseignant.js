import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
const PrivateRoutesEnseignant = ({
  component: Component,
  auth: { isAuthenticated, loading, user },
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated && user.typeUtilisateur === "enseignant" && !loading ? (
        <Component {...props} />
      ) : (
        <Redirect to="/api/auth" />
      )
    }
  />
);

PrivateRoutesEnseignant.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({ auth: state.auth });
export default connect(mapStateToProps)(PrivateRoutesEnseignant);
