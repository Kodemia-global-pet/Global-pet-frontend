import React from "react";
import { Typography, Box, Grid, CircularProgress } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import PetsNew from "../components/PetsNew/PetsNew";
import Template from "../components/Template/Template";
import { Container } from "@mui/system";
import { useLogedUser } from "../context/UserContext";
import AuthValidation from "../components/AuthValidation/AuthValidation";
import { useNavigate } from "react-router";

const PetsNewPage = () => {
  let { user } = useLogedUser();
  const navigate = useNavigate();

  return (
    <AuthValidation>
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
            <IconButton
              color="black"
              component="label"
              onClick={() => navigate(-1)}
            >
              <ArrowBackIcon color="black" />
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
    </AuthValidation>
  );
};

export default PetsNewPage;
