import React from "react";
import { Grid, Box } from "@mui/material";
import CustomButton from "../CustomButton/CustomButton";

const MyAccountAside = ({user}) => {
  return (
    <Grid item>
      <Grid
        display="flex"
        justifyContent="start"
        alignItems="center"
        sx={{ p: 2 }}
      >
        <Grid
          item
          display="flex"
          flexDirection="column"
          alignItems="baseline"
        
        >
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </Grid>
      </Grid>
      <Box sx={{ p: 1 }}>
        <CustomButton
          href="#contained-buttons"
          label="Mi cuenta"
          color="grey"
          icon="user"
        />
      </Box>
      <Box sx={{ p: 1 }}>
        <CustomButton
          href="#contained-buttons"
          label="Acceso y seguridad"
          variant="outlined"
        />
      </Box>
    </Grid>
  );
};
export default MyAccountAside;
