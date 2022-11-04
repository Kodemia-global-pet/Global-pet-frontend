import React from "react";
import { Alert, CircularProgress } from "@mui/material";
import Template from "../components/Template/Template";
import { useParams } from "react-router-dom";
import { useLogedUser } from "../context/UserContext";
import useFetch from "../hooks/useFetch";
import { Container } from "@mui/system";
import AttachmentsView from "../components/AttachmentsView/AttachmentsView";
import AuthValidation from "../components/AuthValidation/AuthValidation";

const AttachmentsPage = () => {
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
          {!data && <CircularProgress />}
          {user && data && <AttachmentsView event={data.record} />}
        </Container>
      </Template>
    </AuthValidation>
  );
};

export default AttachmentsPage;
