import React from "react";
import { Container, Box } from "@mui/material";
import CustomReadField from "../CustomReadField/CustomReadField";

const ViewCardContactSchema = ({ user }) => {
  return (
    <>
      <Container
        sx={{
          backgroundColor: "grey.light",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container>
          <Box>
            <h1>Contacto</h1>
            <CustomReadField value={user.name} id="name" label="Nombre" />
            <CustomReadField value={user.phone_number} id="name" label="Tel." />
            <CustomReadField value={user.address} id="name" label="Direccion" />
          </Box>
        </Container>
      </Container>
    </>
  );
};

export default ViewCardContactSchema;
