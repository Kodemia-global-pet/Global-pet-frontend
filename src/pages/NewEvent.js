import React from "react";
import { Link, Typography, Box, Grid } from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import NewEvent from "../components/NewEvent/NewEvent";
import DropFileInput from "../components/NewEvent/DropFileInput";
import Template from "../components/Template/Template";

const NewEventPage = () => {
  return (
    <>
      <Template>
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
            Agregar Evento
          </Typography>
        </Box>
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <NewEvent />
          <DropFileInput />
        </Grid>
      </Template>
    </>
  );
};

export default NewEventPage;
