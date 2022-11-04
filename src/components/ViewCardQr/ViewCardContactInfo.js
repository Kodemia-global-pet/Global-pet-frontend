import React from "react";
import { Box, Container, Grid } from "@mui/material";
import CustomReadField from "../CustomReadField/CustomReadField";
import useFetch from "../../hooks/useFetch";

const ViewCardContactInfo = ({ petID }) => {
  const { data } = useFetch(
    `${process.env.REACT_APP_BACKEND}pets/${petID}/user`
  );

  return (
    <Container>
      <Grid
        sx={{
          backgroundColor: "grey.light",
          borderRadius: "10px",

          p: 3,
        }}
      >
        {data && (
          <Box>
            <h1>Contacto</h1>
            <CustomReadField value={data.name} id="name" label="Nombre" />
            <CustomReadField value={data.phone_number} id="name" label="Tel." />
            <CustomReadField value={data.address} id="name" label="Direccion" />
          </Box>
        )}
      </Grid>
    </Container>
  );
};

export default ViewCardContactInfo;
