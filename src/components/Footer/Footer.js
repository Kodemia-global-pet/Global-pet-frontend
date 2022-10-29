import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Footer = () => {
  return (
    <Grid
      sx={{
        mt: 7,
        py: 3,
        backgroundColor: "grey.light",
        px: 5,
        position: "relative",
      }}
      container
      spacing={2}
      justifyContent="space-around"
      alignItems="flex-start"
    >
      <Grid item xs={6} md={3}>
        <Typography sx={{ fontWeight: "bold", color: "black.main" }}>
          Servicios adicionales
        </Typography>
        <Typography>Proximamente...</Typography>
      </Grid>
      <Grid item xs={6} md={3}>
        <Typography sx={{ fontWeight: "bold", color: "black.main" }}>
          Informacion util
        </Typography>
        <Typography>Centro de ayuda</Typography>
        <Typography>Preguntas frecuentes</Typography>
      </Grid>

      <Grid item xs={6} md={3} direction="row" justifyContent="space-around">
        <FacebookIcon />
        <YouTubeIcon />
        <InstagramIcon />
      </Grid>

      <Grid item xs={0} md={3}>
        <Box
          sx={{
            position: "absolute",
            bottom: "100px",
            display: {
              xs: "none",
              md: "block",
            },
          }}
          component="img"
          alt="Haky"
          src={process.env.PUBLIC_URL + "/images/footerPets.png"}
        />
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <Typography sx={{ fontWeight: "bold", color: "black.main" }}>
          Aviso de privacidad | Todos los derechos reservados
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
