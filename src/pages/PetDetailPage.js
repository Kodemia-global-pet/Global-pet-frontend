import { Alert, Avatar, CircularProgress, Divider, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import EventList from "../components/EventList/EventList";
import useFetch from "../hooks/useFetch";
import Paper from "@mui/material/Paper";
import PetData from "../components/PetData/PetData";
import ActionButtons from "../components/PetData/ActionButtons/ActionButtons";


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
          
        </Grid>
        <Container
          maxwidth="xl"
          component={Paper}
          sx={{ backgroundColor: "grey.light" }}
        >
          <Grid item container xs={12} padding={5}>
            <Grid item xs={12}>
              {data && <h1>{data.name}</h1>}
            </Grid>
            <Grid item container xs={12} columnSpacing={3} rowSpacing={3}>
              <Grid item xs={12} md={8} order={{ xs: 2, md: 1 }}>
                {!data && <CircularProgress />}
                {data && <PetData pet={data} />}
                {data && <ActionButtons petID={data._id} />}
              </Grid>
              <Grid
                item
                xs={12}
                md={1}
                display={{ xs: "none", sm: "block" }}
                order={{ xs: 3, md: 2 }}
              >
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ height: "100%" }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={3}
                order={{ xs: 1, md: 3 }}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 5,
                }}
              >
                {!data && <CircularProgress />}
                {data && (
                  <Avatar
                    src={data.photo}
                    sx={{
                      width: { xs: "100px", md: "160px", lg: "180px" },
                      height: { xs: "100px", md: "160px", lg: "180px" },
                    }}
                  />
                )}
              </Grid>
            </Grid>
            <Grid item container xs={12} columnSpacing={3} rowSpacing={3}>
              <Grid item xs={12}>
                <Divider sx={{ my: 3 }} />
              </Grid>
              <Grid item xs={12}>
                <h2>Citas y Registros</h2>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default PetDetailPage;
