import { Grid, Container } from "@mui/material";
import React from "react";
import MyAccountList from "../../components/MyAccount/MyAccountList/MyAccountList";

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
        <Container maxwidth="xl">
        <Grid Item>
        <MyAccountList/>
        </Grid>
        </Container>
      </main>
    </Grid>
  );
};

export default MyAccount;