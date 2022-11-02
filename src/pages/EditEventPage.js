import React from "react";
import { Link, Typography, Box, Alert } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import NewEvent from "../components/NewEvent/NewEvent";
import Template from "../components/Template/Template";
import { useParams } from "react-router-dom";
import { useLogedUser } from "../context/UserContext";
import useFetch from "../hooks/useFetch";
import { Container } from "@mui/system";
import AuthValidation from "../components/AuthValidation/AuthValidation";

const EditEventPage = () => {
  const params = useParams();
  let { user } = useLogedUser();
  const { data, error } = useFetch(
    `${process.env.REACT_APP_BACKEND}records/${params.eventID}`
  );

  if (error)
    return <Alert severity="error">Ocurrio un error, intente de nuevo</Alert>;
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
              Editar Cita
            </Typography>
          </Box>
          {user && data && (
            <NewEvent
              petID={params.petID}
              token={user.token}
              event={data.record}
            />
          )}
        </Container>
      </Template>
    </AuthValidation>
  );
};

export default EditEventPage;
