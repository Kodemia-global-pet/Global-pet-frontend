import { Alert, CircularProgress, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import EventList from "../components/EventList/EventList";
import useFetch from "../hooks/useFetch";

const PetDetailPage = () => {
  const params = useParams();
  const { data, error } = useFetch(
    `${process.env.REACT_APP_BACKEND}pets/${params.petID}/records`
  );

  if (error)
    return <Alert severity="error">Ocurrio un error, intente de nuevo</Alert>;
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          {/* Header */}
        </Grid>
        <Container maxwidth="xl">
          <Grid item container xs={12}>
            <Grid item xs={12} md={8}>
              Pet Data
            </Grid>
            <Grid item xs={12} md={4}>
              <h2>Registros</h2>
              {!data && <CircularProgress />}
              {data && <EventList records={data.records} showPet={false} />}
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default PetDetailPage;
