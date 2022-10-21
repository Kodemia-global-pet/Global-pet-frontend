import { Container, Grid } from "@mui/material";
import React from "react";
import HeaderLanding from "../components/Landing/HeaderLanding/HeaderLanding";
import Banner from "../components/Landing/Banner/Banner";
import "../main.css";
import AboutUs from "../components/Landing/AboutUs/AboutUs";
import Service from "../components/Landing/Service/Service";
import CustomImage from "../components/CustomImage/CustomImage";
import MainNavbar from "../components/Header/MainNavbar/MainNavbar";

const HomePage = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        {/*<HeaderLanding />*/}
        <MainNavbar/>
      </Grid>
      <Grid item container xs={12}>
        <main
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/images/landingbg.png"
            })`,
            width: "100vw",
          }}
        >
          <Grid item xs={12}>
            <Banner className="landing-banner" />
          </Grid>
          <Container maxwidth="xl">
            <Grid
              item
              container
              xs={12}
              columnSpacing={{ xs: 1, sm: 2, md: 4 }}
            >
              <Grid item xs={12} sm={6}>
                <CustomImage
                  alt="Nosotros"
                  src={process.env.PUBLIC_URL + "/images/us.png"}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <AboutUs />
              </Grid>
            </Grid>
            <Grid
              item
              container
              xs={12}
              rowSpacing={3}
              columnSpacing={{ xs: 1, sm: 2, md: 4 }}
            >
              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <h2>Nuestros servicios</h2>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Service
                  src={process.env.PUBLIC_URL + "/images/services/qr.png"}
                  title="Genera código QR para cada mascota"
                  color="header_secondary.main"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Service
                  src={process.env.PUBLIC_URL + "/images/services/calendar.png"}
                  title="Organiza citas con el veterinario"
                  color="header_primary.main"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Service
                  src={process.env.PUBLIC_URL + "/images/services/document.png"}
                  title="Sube documentos clinicos de tu mascota"
                  color="header_secondary.main"
                />
              </Grid>
            </Grid>
          </Container>
        </main>
      </Grid>
    </Grid>
  );
};
export default HomePage;
