import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
const PrivateRoutesParent = ({
  component: Component,
  auth: { isAuthenticated, loading, user },
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated && user.typeUtilisateur === "parent" && !loading ? (
        <Component {...props} />
      ) : (
        <Redirect to="/api/auth" />
      )
    }
  />
);

PrivateRoutesParent.propTypes = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({ auth: state.auth });
export default connect(mapStateToProps)(PrivateRoutesParent);
