import { Grid } from "@mui/material";
import React from "react";
import EventItem from "./EventItem/EventItem";

const EventList = ({
  records,
  showPet = false,
  showDescription = false,
  showActions = false,
  petID = null,
}) => {
  return (
    <Grid container item sx={{ overflow: "hidden" }}>
      <Grid
        container
        item
        xs={12}
        sx={{ backgroundColor: "grey.light", py: 2, px: 2 }}
        columnSpacing={3}
        display={{ xs: "none", md: "flex" }}
      >
        <Grid item xs={12} md>
          Fecha
        </Grid>
        {showPet && (
          <Grid item xs={6} md>
            Mascota
          </Grid>
        )}
        <Grid item xs={6} md>
          Evento
        </Grid>
        {showDescription && (
          <Grid item xs={6} md>
            Descipción
          </Grid>
        )}
        {showActions && (
          <Grid item xs={12} md={4}>
            Acciones
          </Grid>
        )}
      </Grid>
      <Grid container item xs={12} columnSpacing={3} rowSpacing={3} mt={0}>
        {records.map((record) => (
          <EventItem
            key={record._id}
            record={record}
            showPet={showPet}
            showDescription={showDescription}
            showActions={showActions}
            petID={petID}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default EventList;
