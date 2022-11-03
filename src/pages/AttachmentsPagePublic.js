import React from "react";
import { Alert, CircularProgress } from "@mui/material";
import Template from "../components/Template/Template";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import useFetch from "../hooks/useFetch";
import { Container } from "@mui/system";
import AttachmentsView from "../components/AttachmentsView/AttachmentsView";

const AttachmentsPagePublic = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { data, error } = useFetch(
    `${process.env.REACT_APP_BACKEND}records/${params.eventID}`
  );

  if (error)
    return <Alert severity="error">Ocurrio un error, intente de nuevo</Alert>;
  return (
    <Template>
      <Container>
        <IconButton
          color="black"
          component="label"
          onClick={() => navigate(-1)}
        >
          <ArrowBackIcon color="black" />
        </IconButton>
        {!data && <CircularProgress />}
        {data && <AttachmentsView event={data.record} />}
      </Container>
    </Template>
  );
};

export default AttachmentsPagePublic;
