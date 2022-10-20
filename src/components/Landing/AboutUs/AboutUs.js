import { Box } from "@mui/material";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <h2>¿Quiénes somos?</h2>
      <Box
        sx={{
          backgroundColor: "grey.light",
          p: 4,
          borderRadius: "16px",
          color: "black.main",
          fontSize: "1.2em",
          fontWeight: "bold",
        }}
      >
        <p>
          El proyecto Global Pet nace de la necesidad de contar con una cartilla
          veterinaria digital que facilite la organizacion de las mascotas para
          que nunca se pierdan una cita, y en cualquier momento tener el
          historial de visitas con las observaciones de los veterinarios y poder
          realizar segundas opiniciones o en el caso de salir de viaje poder
          dejar toda la informacion para que algun familiar pueda llevar a tu
          mascota sin preocupación.
        </p>
      </Box>
    </>
  );
};

export default AboutUs;
