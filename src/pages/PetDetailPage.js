import { Alert, CircularProgress, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import EventList from "../components/EventList/EventList";
import useFetch from "../hooks/useFetch";
import Paper from "@mui/material/Paper";
import PetData from "../components/PetData/PetData";

const PetDetailPage = () => {
  const params = useParams();
  const { data, error } = useFetch(
    `${process.env.REACT_APP_BACKEND}pets/${params.petID}/records`
  );
  console.log(data);
  if (error)
    return <Alert severity="error">Ocurrio un error, intente de nuevo</Alert>;
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          {/* Header */}
        </Grid>
        <Container
          maxwidth="xl"
          component={Paper}
          sx={{ backgroundColor: "grey.light" }}
        >
          <Grid item container xs={12}>
            <Grid item xs={12}>
              {data && <h1>{data.name}</h1>}
            </Grid>
            <Grid item container xs={12}>
              <Grid item xs={12} md={8}>
                {!data && <CircularProgress />}
                {data && <PetData pet={data} />}
              </Grid>
              <Grid item xs={12} md={4}>
                <h2>Registros</h2>
                {!data && <CircularProgress />}
                {data && <EventList records={data.records} showPet={false} />}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default PetDetailPage;
