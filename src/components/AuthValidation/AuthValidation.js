import React from "react";
import { getTokenLocalStorage } from "../../helpers/userHelper";

const AuthValidation = ({ children }) => {
  return getTokenLocalStorage() ? (
    <>{children}</>
  ) : (
    (window.location.href = "/")
  );
};

export default AuthValidation;
