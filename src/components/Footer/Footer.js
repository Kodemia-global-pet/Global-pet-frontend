import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Footer = () => {
  return (
    <footer sx={{ backgroundColor: "grey.main" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  backgroundColor: "primary.dark",
                  "&:hover": {
                    backgroundColor: "secondary.main",
                    opacity: [0.9, 0.8, 0.7],
                    typography: "h2.fontSize",
                  },
                }}
              >
                Servicios adicionales
              </Box>
              <Box>Proximamente...</Box>
            </Grid>

            <Grid item xs={4}>
            <Box>Informacion util</Box>
            <Box>Centro de ayuda</Box>
            <Box>Preguntas frecuentes</Box>
            </Grid>
            
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
