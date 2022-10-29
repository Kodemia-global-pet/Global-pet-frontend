import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import CustomButton from "../CustomButton/CustomButton";
import { Link as RouterLink } from "react-router-dom";
import QrDialog from "../Qr/QrDialog";

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
        <CustomButton
          component={RouterLink}
          to="/pets/new"
          label="Agregar Mascota"
          color="secondary"
          icon="add"
        />
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
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    gap: { xs: 2, md: 0 },
                    flexDirection: { xs: "column", md: "row" },
                  }}
                >
                  <QrDialog petId= {pet._id}/>
                  <CustomButton
                    component={RouterLink}
                    to={`/pets/${pet._id}/edit`}
                    label="Editar"
                    color="primary"
                    icon="edit"
                  />
                  <CustomButton
                    component={RouterLink}
                    to={`/pets/${pet._id}/new-event`}
                    label="Agregar Cita"
                    color="primary"
                    icon="add"
                  />
                  <CustomButton
                    component={RouterLink}
                    to={`/pets/${pet._id}/new-record`}
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
