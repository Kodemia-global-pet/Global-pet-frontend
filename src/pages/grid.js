import { Container, Grid } from "@mui/material";
import { display } from "@mui/system";
import React from "react";
import Template from "../components/Template/Template";

const Prueba1 = () => {
  return (
    <>
      <Template>
        <Container>
          <Grid container sx={{ background: "red" }}>
            container
            <Grid item xs={6} sx={{ background: "green" }}>
              general
              <Grid item xs={6} sx={{ background: "blue" }}>
                etapa1
                <Grid item xs={6} sx={{ background: "orange" }}>
                  etapa 2
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Template>
    </>
  );
};
export default Prueba1;
