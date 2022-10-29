import React from "react";
import { Box, Alert } from "@mui/material";
import Template from "../components/Template/Template";
import ViewCardPet from "../components/ViewCardQr/ViewCardpet";
import ViewCardContact from "../components/ViewCardQr/ViewCardContact";
import ViewCardHistory from "../components/ViewCardQr/ViewCardHistory";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
// import { useLogedUser } from "../../context/UserContext";

const ViewCardQrPage = () => {
  const params = useParams();
  // let { user } = useLogedUser();
  const { data, error } = useFetch(
    `${process.env.REACT_APP_BACKEND}pets/6341b9a6c26127facc869410/records`
  );

  if (error)
    return <Alert severity="error">Ocurrio un error, intente de nuevo</Alert>;

  return (
    <>
      <Template>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <ViewCardPet pet={data} />
          <ViewCardContact />
          <ViewCardHistory />
        </Box>
      </Template>
    </>
  );
};

export default ViewCardQrPage;
