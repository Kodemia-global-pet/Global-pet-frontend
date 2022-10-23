import { Grid, TextField } from "@mui/material";
import React from "react";
import CustomReadField from "../CustomReadField/CustomReadField";

const PetData = ({ pet }) => {
  return (
    <Grid item container xs={12} columnSpacing={3} rowSpacing={3}>
      <Grid item xs={12} md={6}>
        <CustomReadField value={pet.specie} id="especie" label="Especie" />
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomReadField value={pet.breed} id="raza" label="Raza" />
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomReadField
          value={pet.birthdate}
          id="fecha"
          label="Fecha de Nacimiento"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomReadField value={pet.size} id="tamaño" label="Tamaño" />
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomReadField value={pet.feeding} id="alimento" label="Alimento" />
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomReadField
          value={pet.activity_level}
          id="nivel_actividad"
          label="Nivel de Actividad"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomReadField value={pet.allergies} id="alergias" label="Alergias" />
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomReadField
          value={pet.other_info}
          id="otra_info"
          label="Otra Información"
        />
      </Grid>
    </Grid>
  );
};

export default PetData;
