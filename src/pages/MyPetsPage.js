import { Alert, CircularProgress, Container, Grid } from "@mui/material";
import React from "react";
import EventList from "../components/EventList/EventList";
import PetList from "../components/PetList/PetList";
import { getPetRecords } from "../helpers/petHelper";
import useFetch from "../hooks/useFetch";

const MyPetsPage = () => {
  const { data, error } = useFetch(
    `${process.env.REACT_APP_BACKEND}users/633e470d666617b7892f67d5`
  );

  if (error)
    return <Alert severity="error">Ocurrio un error, intente de nuevo</Alert>;
  return (
    <Grid container>
      <Grid item xs={12}>
        {/* Header */}
      </Grid>
      <main
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/images/landingbg.png"
          })`,
          width: "100vw",
        }}
      >
        <Container maxwidth="xl">
          <Grid item container xs={12} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
            <Grid item xs={12} md={8}>
              {!data && <CircularProgress />}
              {data && <PetList pets={data.pets} />}
            </Grid>
            <Grid item xs={12} md={4}>
              <h2>Próximos eventos </h2>
            </Grid>
          </Grid>
        </Container>
      </main>
    </Grid>
  );
};

export default MyPetsPage;
