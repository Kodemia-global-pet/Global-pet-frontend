import { Container } from "@mui/material";
import React from "react";
import AuthValidation from "../components/AuthValidation/AuthValidation";
import MyAccountContainer from "../components/MyAccount/MyAccountContainer";
import Template from "../components/Template/Template";

const MyAccount = () => {
  return (
    <AuthValidation>
      <Template>
        <Container fixed>
          <MyAccountContainer />
        </Container>
      </Template>
    </AuthValidation>
  );
};

export default MyAccount;
