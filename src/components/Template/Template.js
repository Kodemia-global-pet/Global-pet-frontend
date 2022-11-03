import React from "react";
import Footer from "../Footer/Footer";
import MainNavbar from "../Header/MainNavbar/MainNavbar";
import { Grid } from "@mui/material";

const Template = ({ children }) => {
  const backgroundImage = process.env.PUBLIC_URL + "/images/landingbg.png";

  return (
    <Grid container>
      <Grid item xs={12}>
        <MainNavbar />
      </Grid>
      <Grid item xs={12}>
        <main
          style={{
            backgroundImage: `url(${backgroundImage})`,
            width: "100%",
            minHeight: "calc(100vh - 322px)",
          }}
        >
          {children}
        </main>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Template;
