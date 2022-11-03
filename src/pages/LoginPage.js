import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import "../main.css";
import Template from "../components/Template/Template";
import { deleteTokenLocalStorage } from "../helpers/userHelper";

const LoginPage = () => {
  deleteTokenLocalStorage();
  return (
    <Template>
      <LoginForm />
    </Template>
  );
};

export default LoginPage;
