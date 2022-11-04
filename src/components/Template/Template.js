import React from "react";
import Footer from "../Footer/Footer";
import MainNavbar from "../Header/MainNavbar/MainNavbar";
import { Grid } from "@mui/material";

const Template = ({ children }) => {
  const backgroundImage = process.env.PUBLIC_URL + "/images/landingbg.png";

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <MainNavbar />
        </Grid>
        <Grid item xs={12}>
          <main
            style={{
              backgroundImage: `url(${backgroundImage})`,
              width: "100%",
              minHeight: "calc(100vh - 220px)",
              zIndex: 0,
              padding: "32px 0",
            }}
          >
            {children}
          </main>
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
};

export default Template;
