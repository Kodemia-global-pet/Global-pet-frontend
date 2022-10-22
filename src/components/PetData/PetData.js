import { Grid, TextField } from "@mui/material";
import React from "react";

const PetData = ({ pet }) => {
  return (
    <Grid item container xs={12}>
      <Grid item xs={12} md={6} sx={{ borderBottom: 1 }}>
        <TextField
          id="specie"
          label="Especie"
          variant="standard"
          defaultValue={pet.specie}
          color="black"
          InputProps={{
            readOnly: true,
            disableUnderline: true,
          }}
          sx={{
            w: 1,
            color: "black.main",
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        {pet.breed}
      </Grid>
      <Grid item xs={12} md={6}>
        {pet.birthdate}
      </Grid>
      <Grid item xs={12} md={6}>
        {pet.size}
      </Grid>
      <Grid item xs={12} md={6}>
        {pet.feeding}
      </Grid>
      <Grid item xs={12} md={6}>
        {pet.activity_level}
      </Grid>
      <Grid item xs={12} md={6}>
        {pet.allergies}
      </Grid>
      <Grid item xs={12} md={6}>
        {pet.other_info}
      </Grid>
    </Grid>
  );
};

export default PetData;
