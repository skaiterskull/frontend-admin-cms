import React from "react";
import { useHistory } from "react-router-dom";
import { LoginForm } from "../../components/login-form/LoginForm";

const Login = () => {
  return (
    <div className="d-flex justify-content-center">
      <LoginForm />
    </div>
  );
};

export default Login;
