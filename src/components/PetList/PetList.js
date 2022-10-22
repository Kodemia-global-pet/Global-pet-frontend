import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import CustomButton from "../CustomButton/CustomButton";
import { Link as RouterLink } from "react-router-dom";

const PetList = ({ pets }) => {
  return (
    <div>
      <h1>Mis mascotas</h1>
      <Box
        my={3}
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <CustomButton label="Agregar Mascota" color="secondary" icon="add" />
      </Box>

      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead sx={{ backgroundColor: "grey.light" }}>
            <TableRow sx={{ color: "grey.main" }}>
              <TableCell>Nombre</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ color: "black.light" }}>
            {pets.map((pet) => (
              <TableRow key={pet._id}>
                <TableCell>
                  <Button
                    variant="text"
                    component={RouterLink}
                    to={"/pets/" + pet._id}
                    sx={{
                      color: "black.main",
                    }}
                  >
                    {pet.name}
                  </Button>
                </TableCell>
                <TableCell
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <CustomButton label="Codigo QR" color="secondary" icon="qr" />
                  <CustomButton label="Editar" color="primary" icon="edit" />
                  <CustomButton
                    label="Agregar Evento"
                    color="primary"
                    icon="add"
                  />
                  <CustomButton
                    label="Agregar Registro"
                    color="primary"
                    icon="add"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PetList;
