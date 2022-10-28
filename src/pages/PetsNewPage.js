import React from "react";
import { Link, Typography, Box, Grid, CircularProgress } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import PetsNew from "../components/PetsNew/PetsNew";
import Template from "../components/Template/Template";
import { Container } from "@mui/system";
import { useLogedUser } from "../context/UserContext";

const PetsNewPage = () => {
  let { user } = useLogedUser();

  return (
    <Template>
      <Container maxWidth="xl">
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
        <Grid container item xs={12}>
          {!user && <CircularProgress />}
          {user && <PetsNew userID={user._id} token={user.token} />}
        </Grid>
      </Container>
    </Template>
  );
};

export default PetsNewPage;
