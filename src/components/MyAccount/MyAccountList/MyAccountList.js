import React from "react";
import CustomButton from "../../CustomButton/CustomButton";
import { Grid, Box} from "@mui/material";

const MyAccountList = () => {
  return (
    <>
      <h1>Mi cuenta</h1>
      <h3>Foto de perfil</h3>
      <Grid display="flex" justifyContent="space-between" alignItems="center">
      <Box>
          <img src="" alt="" ></img>
        </Box>
        <Box display="flex" flexDirection="row" >
          <Box sx={{pr:2}}>
          <CustomButton label="Eliminar foto" color="danger" icon="delete"/>
          </Box>
          <Box>
          <CustomButton label="Cambiar imagen" color="secondary" />
          </Box>
        </Box>
      </Grid>
      
    </>
  );
};

export default MyAccountList;
