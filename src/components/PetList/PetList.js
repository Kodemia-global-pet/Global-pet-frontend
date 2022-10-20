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
        <Button variant="contained">Agregar Mascota</Button>
      </Box>

      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead sx={{ backgroundColor: "grey.light" }}>
            <TableRow sx={{ color: "grey.main" }}>
              <TableCell>Nombre</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ color: "#545454" }}>
            {pets.map((pet) => (
              <TableRow key={pet.name}>
                <TableCell>{pet.name}</TableCell>
                <TableCell>
                  <Button variant="contained">Codigo QR</Button>
                  <Button variant="contained">Editar</Button>
                  <Button variant="contained">Agregar Evento</Button>
                  <Button variant="contained">Agregar Registro</Button>
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
