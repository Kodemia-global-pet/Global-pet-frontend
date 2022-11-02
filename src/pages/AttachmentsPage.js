import React from "react";
import { Link, Typography, Box, Alert, CircularProgress } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import NewEvent from "../components/NewEvent/NewEvent";
import Template from "../components/Template/Template";
import { useParams } from "react-router-dom";
import { useLogedUser } from "../context/UserContext";
import useFetch from "../hooks/useFetch";
import { Container } from "@mui/system";
import AttachmentsView from "../components/AttachmentsView/AttachmentsView";

const AttachmentsPage = () => {
  const params = useParams();
  let { user } = useLogedUser();
  const { data, error } = useFetch(
    `${process.env.REACT_APP_BACKEND}records/${params.eventID}`
  );

  if (error)
    return <Alert severity="error">Ocurrio un error, intente de nuevo</Alert>;
  return (
    <Template>
      <Container>
        {!data && <CircularProgress />}
        {user && data && <AttachmentsView event={data.record} />}
      </Container>
    </Template>
  );
};

export default AttachmentsPage;
