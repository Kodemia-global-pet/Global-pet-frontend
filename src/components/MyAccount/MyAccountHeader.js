import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import { Grid, Box } from "@mui/material";

const MyAccountHeader = (users) => {
  return (
    <>
      <h1>Mi cuenta</h1>
      <h3>Foto de perfil</h3>
      <Grid
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ p: 2 }}
      >
        <Box>
          <img
            src={process.env.PUBLIC_URL + "/images/userDefault"}
            alt="UserDefault"
          ></img>
        </Box>
        <Box display="flex" flexDirection="row">
          <Box sx={{ pr: 2 }}>
            <CustomButton label="Eliminar foto" color="danger" icon="delete" />
          </Box>
          <Box>
            <CustomButton label="Cambiar imagen" color="grey" />
          </Box>
        </Box>
      </Grid>
      <hr></hr>
      <Grid
        item
        display="flex"
        flexDirection="column"
        alignItems="baseline"
        sx={{ p: 2 }}
      >
        <h3>Nombre</h3>
        <p>nombre del usuario{users.name}</p>
      </Grid>
      <hr></hr>
      <Grid
        item
        display="flex"
        flexDirection="column"
        alignItems="baseline"
        sx={{ p: 2 }}
      >
        <h3>Correo electrónico</h3>
        <p>correo{users.email}</p>
      </Grid>
      <hr></hr>
      <Grid
        item
        display="flex"
        flexDirection="column"
        alignItems="baseline"
        sx={{ p: 2 }}
      >
        <h3>Password</h3>
        <p>Password{users.password}</p>
      </Grid>
      <hr></hr>
      <Box  sx={{ p: 2 }}>
        <CustomButton label="Editar" color="grey" icon="edit"/>
      </Box>
    </>
  );
};

export default MyAccountHeader;
