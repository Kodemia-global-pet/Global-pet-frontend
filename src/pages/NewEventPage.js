import React from "react";
import { Link, Typography, Box, Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import NewEvent from "../components/NewEvent/NewEvent";
import Template from "../components/Template/Template";
import { useParams } from "react-router-dom";
import { useLogedUser } from "../context/UserContext";

const NewEventPage = ({ event }) => {
  const params = useParams();
  let { user } = useLogedUser();
  return (
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
          Agregar Cita
        </Typography>
      </Box>
      <Grid
        item
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {user && <NewEvent petID={params.petID} token={user.token} />}
      </Grid>
    </Template>
  );
};

export default NewEventPage;
