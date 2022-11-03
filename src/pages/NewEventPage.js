import React from "react";
import { Typography, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import NewEvent from "../components/NewEvent/NewEvent";
import Template from "../components/Template/Template";
import { useNavigate, useParams } from "react-router-dom";
import { useLogedUser } from "../context/UserContext";
import { Container } from "@mui/system";
import AuthValidation from "../components/AuthValidation/AuthValidation";
import useFetch from "../hooks/useFetch";

const NewEventPage = ({ event }) => {
  const params = useParams();
  const navigate = useNavigate();
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
              Agregar Cita
            </Typography>
          </Box>
          {user && data && (
            <NewEvent
              petID={params.petID}
              token={user.token}
              petName={data.name}
            />
          )}
        </Container>
      </Template>
    </AuthValidation>
  );
};

export default NewEventPage;
