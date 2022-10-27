import { Grid } from "@mui/material";
import React from "react";
import { const_activity, const_sizes } from "../../helpers/constants";
import CustomReadField from "../CustomReadField/CustomReadField";

const PetData = ({ pet }) => {
  let activity_level = const_activity.find(
    (item) => item.value === pet.activity_level
  );
  let size = const_sizes.find((item) => item.value === pet.size);
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
          value={new Date(pet.birthdate).toLocaleDateString("en-us", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
          id="fecha"
          label="Fecha de Nacimiento"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomReadField
          value={size?.label || " "}
          id="tamaño"
          label="Tamaño"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomReadField value={pet.feeding} id="alimento" label="Alimento" />
      </Grid>
      <Grid item xs={12} md={6}>
        <CustomReadField
          value={activity_level?.label || " "}
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
