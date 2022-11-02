import React from "react";
import { useNavigate } from "react-router";
import { useLogedUser } from "../../context/UserContext";

const AuthValidation = ({ children }) => {
  let { user, loading } = useLogedUser();
  const navigate = useNavigate();

  const isAuth = user?.token;

  if (loading) {
    return <h1>Loading..</h1>;
  }
  return isAuth ? <>{children}</> : navigate("/");
};

export default AuthValidation;
