import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
const PrivateRoutesÉlève = ({
  component: Component,
  auth: { isAuthenticated, loading, user },
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated && user.typeUtilisateur === "élève" && !loading ? (
        <Component {...props} />
      ) : (
        <Redirect to="/api/auth" />
      )
    }
  />
);

PrivateRoutesÉlève.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({ auth: state.auth });
export default connect(mapStateToProps)(PrivateRoutesÉlève);
