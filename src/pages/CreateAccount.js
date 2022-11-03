import { Grid, Container } from "@mui/material";
import React from "react";
import Template from "../components/Template/Template";
import UserFormRegister from "../components/UserFormRegister/UserFormRegister";

const createAccount = () => {
  return (
    <Template>
      <Grid container>
        <Container maxwidth="xl">
          <Grid
            item
            container
            display="flex"
            justifyContent="center"
            alignItems="center"
            xs={12}
          >
            <UserFormRegister />
          </Grid>
        </Container>
      </Grid>
    </Template>
  );
};

export default createAccount;
