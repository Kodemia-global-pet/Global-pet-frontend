import { Container } from "@mui/material";
import React from "react";
import MyAccountContainer from "../components/MyAccount/MyAccountContainer";
import Template from "../components/Template/Template";

const MyAccount = () => {
  return (
    <Template>
      <Container fixed>
        <MyAccountContainer />
      </Container>
    </Template>
  );
};

export default MyAccount;
