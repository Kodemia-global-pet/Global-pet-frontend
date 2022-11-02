import React from "react";
import { useNavigate } from "react-router";
import { useLogedUser } from "../../context/UserContext";

const AuthValidation = ({ children }) => {
  let { user, loading } = useLogedUser();
  const navigate = useNavigate();

  const isAuth = user?.token;

  if (loading) {
    return <h1>Loading..</h1>;
  } else {
    if (!isAuth) navigate("/");
  }
  return isAuth ? <>{children}</> : null;
};

export default AuthValidation;
