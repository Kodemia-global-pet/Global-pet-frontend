import React from "react";
import { Grid, ThemeProvider } from "@mui/material";
import LoginForm from "../components/LoginForm/LoginForm";
import "../main.css";
import MainNavbar from "../components/Header/MainNavbar/MainNavbar";
import Footer from "../components/Footer/Footer";

const LoginPage = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <MainNavbar />
        </Grid>
        <Grid item xs={12} sm={3} md={4}>
          <main
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/images/landingbg.png"
              })`,
              width: "100vw",
            }}
          >
            <LoginForm1 />
          </main>
         
        </Grid>
        <Grid item xs={12}>
          <Footer/>
        </Grid>
        
      </Grid>
    </>
  );
};

export default LoginPage;
