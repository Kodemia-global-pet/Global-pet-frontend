import React from "react";
import { Link, Typography, Box, Grid } from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import PetsNew from "../components/PetsNew/PetsNew";

const PetsNewPage = () => {
  return (
    <>
      <main
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/images/landingbg.png"
          })`,
          width: "100vw",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            ml: 2,
            mt: 5,
          }}
        >
          <IconButton color="black" component="label">
            <Link href="/">
              <ArrowBackIcon color="black" />
            </Link>
          </IconButton>
          <Typography
            component="h1"
            variant="h5"
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "start",
            }}
          >
            Agregar mascota
          </Typography>
        </Box>
        <Grid container>
          <PetsNew />
        </Grid>
      </main>
    </>
  );
};

export default PetsNewPage;
