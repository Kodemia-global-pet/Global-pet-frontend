import { Box, Button, Container, Grid } from "@mui/material";
import React from "react";
import CustomImage from "../../CustomImage/CustomImage";
import { Link as RouterLink } from "react-router-dom";
import { useLogedUser } from "../../../context/UserContext";

const Banner = (props) => {
  const { user, loading } = useLogedUser();

  return (
    <Box
      {...props}
      sx={{
        backgroundColor: "grey.light",
        borderBottom: 18,
        borderColor: "header_secondary.main",
      }}
    >
      <Container maxwidth="xl">
        <Grid item container xs={12}>
          <h1>Bienvenido a Haky</h1>
        </Grid>
        <Grid item container xs={12}>
          <Grid
            item
            xs={12}
            sm={3}
            md={4}
            display={{ xs: "none", sm: "block" }}
          >
            <h3>Lleva el expediente clínico de tu mascota en linea.</h3>
            <CustomImage
              alt="Global Pet"
              src={process.env.PUBLIC_URL + "/images/banner-info.png"}
            />
          </Grid>
          <Grid
            item
            container
            xs={12}
            sm={6}
            md={4}
            order={{ xs: 3, sm: 2 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {!user && (
              <Grid
                container
                item
                xs={12}
                sm={6}
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  variant="outlined"
                  component={RouterLink}
                  to="/create-account"
                  sx={{ color: "black.main", borderColor: "black.main", mb: 2 }}
                >
                  Registrarse
                </Button>
              </Grid>
            )}
            {!user && (
              <Grid
                container
                item
                xs={12}
                sm={6}
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  variant="outlined"
                  component={RouterLink}
                  to="/login"
                  sx={{ color: "black.main", borderColor: "black.main", mb: 2 }}
                >
                  Iniciar Sesión
                </Button>
              </Grid>
            )}
            {user && (
              <Grid
                container
                item
                xs={12}
                sm={6}
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  variant="outlined"
                  component={RouterLink}
                  to="/pets"
                  sx={{ color: "primary", borderColor: "primary", mb: 2 }}
                >
                  Mis Mascotas
                </Button>
              </Grid>
            )}
          </Grid>
          <Grid
            item
            xs={12}
            order={{ xs: 2, sm: 3 }}
            sm={3}
            md={4}
            className=""
          >
            <CustomImage
              alt="Global Pet"
              src={process.env.PUBLIC_URL + "/images/banner-dog.png"}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
