import { Grid } from "@mui/material";
import React from "react";
import HeaderLanding from "../components/Landing/HeaderLanding/HeaderLanding";
import Banner from "../components/Landing/Banner/Banner";
import '../main.css'; 

const HomePage = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <HeaderLanding />
      </Grid>
      <Grid item container xs={12}>
        <main style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/landingbg.png'})`, width: "100vw" }}>
          <Grid item xs={12}>
            <Banner className="landing-banner"/>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={12} md={6}>
              <div style={{ height: "49vh" }} ></div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div style={{ height: "49vh" }}>

              </div>
            </Grid>
          </Grid>
        </main>
      </Grid>
    </Grid>
  )
}
export default HomePage