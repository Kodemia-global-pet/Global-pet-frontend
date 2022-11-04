import { Grid } from "@mui/material";
import React from "react";
import EventItem from "../EventList/EventItem/EventItem";
const ViewCardHistory = ({
  records,
  showPet = false,
  showDescription = false,
  showActions = false,
}) => {
  return (
    <>
      <Grid
        container
        sx={{
          // backgroundColor: "grey.light",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pt: 2,
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            backgroundColor: "grey.light",
            py: 2,
            px: 2,
            borderRadius: "10px",
          }}
          columnSpacing={3}
          display={{ xs: "none", md: "flex" }}
        >
          <Grid item xs={12} md>
            Fecha
          </Grid>
          <Grid item xs={6} md>
            Evento
          </Grid>
          {showDescription && (
            <Grid item xs={6} md>
              Descripción
            </Grid>
          )}
          <Grid item xs={12} md={4}>
            Acciones
          </Grid>
        </Grid>
        <Grid container>
          {records.map((record) => (
            <EventItem
              key={record._id}
              record={record}
              showPet={showPet}
              showDescription={showDescription}
              showActions={showActions}
              isPublic={true}
            />
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default ViewCardHistory;
