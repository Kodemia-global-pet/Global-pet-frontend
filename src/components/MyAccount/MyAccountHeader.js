import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import { Grid, Box} from "@mui/material";

const MyAccountHeader = (users) => {

  return (
    <>
      <h1>Mi cuenta</h1>
      <h3>Foto de perfil</h3>
      <Grid display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <img src="" alt=""></img>
        </Box>
        <Box display="flex" flexDirection="row">
          <Box sx={{ pr: 2 }}>
            <CustomButton label="Eliminar foto" color="danger" icon="delete" />
          </Box>
          <Box>
            <CustomButton label="Cambiar imagen" color="secondary" />
          </Box>
        </Box>
      </Grid>
      <Grid item display="flex" flexDirection="colum">
      <Grid><h3> Nombre</h3></Grid>
      <Grid><p>nombre del usuario{users.name}</p></Grid>
      </Grid>
    </>
  );
};

export default MyAccountHeader;
