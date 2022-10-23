import { Grid, Container } from "@mui/material";
import React from "react";
import MyAccountAside from "../components/MyAccount/MyAccountAside";
import MyAccountHeader from "../components/MyAccount/MyAccountHeader";

const MyAccount = () => {
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
        <Grid item maxwidth="xl" display="flex" sx={{ p: 2 }}>
          <Container maxwidth="xl">
            <Grid sx={{ backgroundColor: "grey.light" }}>
              <MyAccountHeader />
            </Grid>
          </Container>
          <Container maxwidth="xl">
            <Grid item sx={{ backgroundColor: "grey.light" }}>
              <MyAccountAside />
            </Grid>
          </Container>
        </Grid>
      </main>
    </Grid>
  );
};

export default MyAccount;
