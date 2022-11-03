import React from "react";
import { Link, Typography, Box, Alert } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import NewEvent from "../components/NewEvent/NewEvent";
import Template from "../components/Template/Template";
import { useNavigate, useParams } from "react-router-dom";
import { useLogedUser } from "../context/UserContext";
import useFetch from "../hooks/useFetch";
import { Container } from "@mui/system";
import AuthValidation from "../components/AuthValidation/AuthValidation";

const EditRegisterPage = () => {
  const params = useParams();
  const navigate = useNavigate();
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
              Editar Registro
            </Typography>
          </Box>
          {user && data && (
            <NewEvent
              petID={data.petID}
              token={user.token}
              event={data.record}
              record={true}
              petName={data.name}
            />
          )}
        </Container>
      </Template>
    </AuthValidation>
  );
};

export default EditRegisterPage;
