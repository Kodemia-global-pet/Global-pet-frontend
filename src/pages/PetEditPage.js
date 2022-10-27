import { Alert, CircularProgress, Container, Grid } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Paper from "@mui/material/Paper";
import Template from "../components/Template/Template";
import PetsNew from "../components/PetsNew/PetsNew";
import { useLogedUser } from "../context/UserContext";

const PetEditPage = () => {
  const params = useParams();
  let { user } = useLogedUser();
  const { data, error } = useFetch(
    `${process.env.REACT_APP_BACKEND}pets/${params.petID}/records`
  );

  if (error)
    return <Alert severity="error">Ocurrio un error, intente de nuevo</Alert>;
  return (
    <Template>
      <Grid container>
        <Grid item xs={12}></Grid>
        <Container maxwidth="xl">
          <Grid
            item
            container
            xs={12}
            padding={{ xs: 0, md: 5 }}
            component={Paper}
            sx={{
              backgroundColor: "grey.light",
              borderRadius: "10px",
            }}
          >
            <h2>Editar Mascota</h2>
            {!data && !user && <CircularProgress />}
            {data && user && (
              <PetsNew userID={user._id} token={user.token} pet={data} />
            )}
          </Grid>
        </Container>
      </Grid>
    </Template>
  );
};

export default PetEditPage;
