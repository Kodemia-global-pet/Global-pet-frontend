import { Grid, Container } from "@mui/material";
import React from "react";
import UserFormRegister from "../components/UserFormRegister/UserFormRegister";

const createAccount = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        Header
      </Grid>
      <main
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/images/landingbg.png"
          })`,
          width: "100vw",
          height: "100vh",
        }}
      >
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
      </main>
    </Grid>
  );
};

export default createAccount;
