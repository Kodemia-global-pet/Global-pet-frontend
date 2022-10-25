import {
  Alert,
  Avatar,
  CircularProgress,
  Container,
  Divider,
  Grid,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Paper from "@mui/material/Paper";

const PetEditPage = () => {
  const params = useParams();
  const { data, error } = useFetch(
    `${process.env.REACT_APP_BACKEND}pets/${params.petID}/records`
  );

  if (error)
    return <Alert severity="error">Ocurrio un error, intente de nuevo</Alert>;
  return (
    <>
      <Grid container>
        <Grid item xs={12}></Grid>
        <Container
          maxwidth="xl"
          component={Paper}
          sx={{ backgroundColor: "grey.light" }}
        >
          <Grid item container xs={12} padding={{ xs: 0, md: 5 }}>
            <Grid item container xs={12} columnSpacing={3} rowSpacing={3}>
              <Grid item xs={12} md={8} order={{ xs: 2, md: 1 }}>
                {!data && <CircularProgress />}
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
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default PetEditPage;
