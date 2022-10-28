import React from "react";
import { Grid, Box, Avatar } from "@mui/material";
import MyAccountEditUser from "./MyAccountEditUser";

const MyAccountHeader = ({ user }) => {
  return (
    <>
      <Box sx={{ p: 2 }}>
        <h1>Mi cuenta</h1>
        <h3>Foto de perfil</h3>
      </Box>

      <Grid
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ p: 2 }}
      >
        <Box>
          <Avatar src={user.photo} alt="UserDefault" />
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
        <p>{user.name}</p>
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
        <p>{user.email}</p>
      </Grid>
      <hr></hr>
      <Grid
        item
        display="flex"
        flexDirection="column"
        alignItems="baseline"
        sx={{ p: 2 }}
      >
        <h3>Contraseña</h3>
        <p>********</p>
      </Grid>
      <hr></hr>
      <Grid
        item
        display="flex"
        flexDirection="column"
        alignItems="baseline"
        sx={{ p: 2 }}
      >
        <h3>Teléfono</h3>
        <p>{user.phone_number}</p>
      </Grid>
      <hr></hr>
      <Grid
        item
        display="flex"
        flexDirection="column"
        alignItems="baseline"
        sx={{ p: 2 }}
      >
        <h3>Dirección</h3>
        <p>{user.address}</p>
      </Grid>
      <hr></hr>
      <Grid item xs={12} lg={9}>
        {user && <MyAccountEditUser user={user} />}
      </Grid>
    </>
  );
};

export default MyAccountHeader;
