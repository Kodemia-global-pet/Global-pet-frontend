import { Box, Grid } from "@mui/material";
import React from "react";

const ViewCardHistory = () => {
  return (
    <>
      <Grid
        container
        item
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "grey.contrastText",
          borderRadius: 7,
          ml: 2,
          mr: 2,
        }}
      >
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "grey.contrastText",
          }}
        >
          <Box>imgen</Box>
          <Box>informacion de mascota</Box>
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "orange",
          }}
        >
          <Box>contacto</Box>
          <Box>nombre y telefono</Box>
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "blue",
          }}
        >
          card historial
        </Grid>
      </Grid>
    </>
  );
};
export default ViewCardHistory;
