import React from "react";
import { Grid, ThemeProvider } from "@mui/material";
import LoginForm1 from "../components/LoginForm/LoginForm1";
import theme from "../theme/theme";
import "../main.css";

const LoginPage = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}></Grid>
        <Grid item xs={12} sm={3} md={4}>
          <main
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/images/landingbg.png"
              })`,
              width: "100vw",
            }}
          >
            <ThemeProvider theme={theme}>
              <LoginForm1 />
            </ThemeProvider>
          </main>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginPage;
