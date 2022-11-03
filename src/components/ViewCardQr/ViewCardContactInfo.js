import React from "react";
import { Container, Box } from "@mui/material";
import CustomReadField from "../CustomReadField/CustomReadField";
import useFetch from "../../hooks/useFetch";

const ViewCardContactInfo = ({ petID }) => {
  const { data } = useFetch(
    `${process.env.REACT_APP_BACKEND}pets/${petID}/user`
  );

  return (
    <>
      <Container
        sx={{
          backgroundColor: "grey.light",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 3,
        }}
      >
        <Container>
          {data && (
            <Box>
              <h1>Contacto</h1>
              <CustomReadField value={data.name} id="name" label="Nombre" />
              <CustomReadField
                value={data.phone_number}
                id="name"
                label="Tel."
              />
              <CustomReadField
                value={data.address}
                id="name"
                label="Direccion"
              />
            </Box>
          )}
        </Container>
      </Container>
    </>
  );
};

export default ViewCardContactInfo;
