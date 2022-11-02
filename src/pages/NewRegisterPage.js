import React from "react";
import { Link, Typography, Box, Grid, Container } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import NewEvent from "../components/NewEvent/NewEvent";
import Template from "../components/Template/Template";
import { useParams } from "react-router-dom";
import { useLogedUser } from "../context/UserContext";
import AuthValidation from "../components/AuthValidation/AuthValidation";
import useFetch from "../hooks/useFetch";

const NewRegisterPage = () => {
  const params = useParams();
  let { user } = useLogedUser();
  const { data } = useFetch(
    `${process.env.REACT_APP_BACKEND}pets/${params.petID}`
  );
  return (
    <AuthValidation>
      <Template>
        <Container>
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
              Agregar Registro
            </Typography>
          </Box>
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {user && data && (
              <NewEvent
                petID={params.petID}
                token={user.token}
                record={true}
                petName={data.name}
              />
            )}
          </Grid>
        </Container>
      </Template>
    </AuthValidation>
  );
};

export default NewRegisterPage;
