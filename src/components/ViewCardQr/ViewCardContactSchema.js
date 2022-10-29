import React from "react";
import { Grid, Box } from "@mui/material";
import CustomReadField from "../CustomReadField/CustomReadField";

const ViewCardContactSchema = ({ user }) => {
  return (
    <>
      <Grid
        item
        container
        xs={12}
        sx={{ display: "flex", flexDirection: "column", pt: 2 }}
      >
        <Grid item xs={12}>
          <h1>Contacto</h1>
        </Grid>
        <Grid item xs={12}>
          <CustomReadField value={user.name} id="name" label="Nombre" />
        </Grid>
        <Grid item xs={12}>
          <CustomReadField value={user.phone_number} id="name" label="Tel." />
        </Grid>
        <Grid item xs={12}>
          <CustomReadField value={user.address} id="name" label="Direccion" />
        </Grid>
      </Grid>
    </>
  );
};

export default ViewCardContactSchema;
