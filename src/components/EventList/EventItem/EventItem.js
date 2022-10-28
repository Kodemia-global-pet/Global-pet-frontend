import { Grid } from "@mui/material";
import React from "react";
import CustomButton from "../../CustomButton/CustomButton";
import CustomCaption from "../../CustomCaption/CustomCaption";

const EventItem = ({
  record,
  showPet = false,
  showDescription = false,
  showActions = false,
}) => {
  return (
    <Grid container item xs={12} sx={{ py: 2, px: 2, borderBottom: 1 }}>
      <Grid item xs={12} md sx={{ px: 2 }}>
        <CustomCaption label="Fecha" display={{ xs: "block", md: "none" }} />
        {new Date(record.date).toLocaleDateString("en-us", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </Grid>
      {showPet && (
        <Grid item xs={6} md sx={{ px: 2 }}>
          <CustomCaption label="Nombre" display={{ xs: "block", md: "none" }} />
          {record.name}
        </Grid>
      )}
      <Grid item xs={6} md sx={{ px: 2 }}>
        <CustomCaption label="Evento" display={{ xs: "block", md: "none" }} />
        {record.title}
      </Grid>
      {showDescription && (
        <Grid item xs={6} md sx={{ px: 2 }}>
          <CustomCaption
            label="Descipción"
            display={{ xs: "block", md: "none" }}
          />
          {record.description}
        </Grid>
      )}
      {showActions && (
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: { xs: "column", sm: "row" },
            mt: { xs: 3, md: 0 },
            gap: 1,
          }}
        >
          <CustomButton label="Ver Documentos" color="primary" />
          <CustomButton label="Editar" color="primary" icon="edit" />
          <CustomButton label="Eliminar" color="danger" icon="delete" />
        </Grid>
      )}
    </Grid>
  );
};

export default EventItem;
