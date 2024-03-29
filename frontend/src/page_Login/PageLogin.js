import React, { Component } from "react";
import LoginForm from "./LoginForm";
import EmplacementActuelle from "./EmplacementActuelle";
import Footer from "../Components/footer";
import Alert from "../Components/alert";

const PageLogin = () => {
  return (
    <div>
      <div className="Site">
        <div className="Site-content">
          <div className="fluid-container ">
            <Alert />
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLogin;
