import { Grid, Container} from "@mui/material";
import React from "react";
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
        <Container maxwidth="xl">
        <Grid item>
        <MyAccountHeader/>
        </Grid>
        </Container>
      </main>
    </Grid>
  );
};

export default MyAccount;