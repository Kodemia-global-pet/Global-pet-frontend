import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Footer = () => {
  return (
    <Grid
      sx={{ py: 3, backgroundColor: "grey.main", px: 5, position: "relative" }}
      container
      spacing={2}
      justifyContent="space-around"
      alignItems="flex-start"
    >
      <Grid item xs={6} md={3}>
        <Typography sx={{ fontWeight: "bold", color: "black.main" }}>
          Servicios adicionales
        </Typography>
        <Typography>Próximamente...</Typography>
      </Grid>
      <Grid item xs={6} md={3}>
        <Typography sx={{ fontWeight: "bold", color: "black.main" }}>
          Información útil
        </Typography>
        <Typography>
          <Link href="/faq" sx={{ color: "black.main" }}>
            Centro de ayuda
          </Link>
        </Typography>
        <Typography>
          <Link href="/faq" sx={{ color: "black.main" }}>
            Preguntas frecuentes
          </Link>
        </Typography>
      </Grid>

      <Grid
        container
        item
        xs={6}
        md={3}
        direction="row"
        justifyContent="space-around"
      >
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
        <Typography sx={{ color: "black.main" }}>
          Aviso de privacidad | Todos los derechos reservados
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
