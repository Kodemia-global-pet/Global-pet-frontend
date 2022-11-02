import { Grid } from "@mui/material";
import React from "react";
import CustomReadField from "../CustomReadField/CustomReadField";

const ViewCardPetInfo = ({ pet }) => {
  return (
    <Grid item container xs={12} columnSpacing={3} rowSpacing={3}>
      <Grid item xs={12}>
        <CustomReadField value={pet.name} id="name" label="Nombre" />
      </Grid>
      <Grid item xs={12}>
        <CustomReadField value={pet.specie} id="especie" label="Especie" />
      </Grid>
      <Grid item xs={12}>
        <CustomReadField value={pet.breed} id="raza" label="Raza" />
      </Grid>
      <Grid item xs={12}>
        <CustomReadField
          value={new Date(pet.birthdate).toLocaleDateString("en-us", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
          id="fecha"
          label="Fecha de Nacimiento"
        />
      </Grid>

      <Grid item xs={12}>
        <CustomReadField value={pet.allergies} id="alergias" label="Alergias" />
      </Grid>
    </Grid>
  );
};

export default ViewCardPetInfo;
