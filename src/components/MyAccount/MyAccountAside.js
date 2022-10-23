import React from "react";
import { Grid, Box } from "@mui/material";
import CustomButton from "../CustomButton/CustomButton";

const MyAccountAside = () => {
  return (
    <Grid item>
    <Grid display="flex" justifyContent="start" alignItems="center" sx={{ p: 2 }}>
      <Box>
        <img
          src={process.env.PUBLIC_URL + "/images/userDefault"}
          alt="UserDefault"
        ></img>
      </Box>
      <Grid item display="flex" flexDirection="column" alignItems="baseline" sx={{ p: 2 }}>
        <h3>Nombre</h3>
        <p>Correo</p>
      </Grid>
    </Grid>
    <Box sx={{ p: 1 }}>
              <CustomButton
        label="Mi cuenta"
        color= "grey"
        />
    </Box>
    <Box sx={{ p: 1 }}>
    <CustomButton
        label= "Acceso y seguridad"
        color = "grey"
        />
    </Box>
    </Grid>
    
  );
};
export default MyAccountAside;
