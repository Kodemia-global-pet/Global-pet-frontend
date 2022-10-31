import { Container, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Template from "../components/Template/Template";

const NotFound = () => {
  return (
    <Template>
      <Container>
        <h1>Oops! La página que estás buscando no existe.</h1>
        <p>Te dejamos unos links que podrían ser de ayuda:</p>
        <Link to="/">Home</Link>
        <Link to="/pets">Mis Mascotas</Link>
      </Container>
    </Template>
  );
};

export default NotFound;
