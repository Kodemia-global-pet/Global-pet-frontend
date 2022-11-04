import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import "../main.css";
import Template from "../components/Template/Template";
import { deleteTokenLocalStorage } from "../helpers/userHelper";
import { useLogedUser } from "../context/UserContext";

const LoginPage = () => {
  const { user, loading } = useLogedUser();
  const isAuth = user?.token;

  if (loading) {
    return <h1>Loading..</h1>;
  } else {
    if (isAuth) {
      deleteTokenLocalStorage();
      window.location.reload();
    }
  }

  return (
    <Template>
      <LoginForm />
    </Template>
  );
};

export default LoginPage;
