import React from "react";
import { Grid, Alert, Container } from "@mui/material";
import Template from "../components/Template/Template";
import ViewCardPet from "../components/ViewCardQr/ViewCardpet";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import ViewCardHistory from "../components/ViewCardQr/ViewCardHistory";
import ViewCardContactInfo from "../components/ViewCardQr/ViewCardContactInfo";

const ViewCardQrPage = () => {
  const params = useParams();
  const { data, error } = useFetch(
    `${process.env.REACT_APP_BACKEND}pets/${params.petID}/records`
  );

  if (error)
    return <Alert severity="error">Ocurrio un error, intente de nuevo</Alert>;

  return (
    <Template>
      <Container>
        <Grid container rowSpacing={{ xs: 3, md: 2 }}>
          <Grid
            item
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            {data && <ViewCardPet pet={data} />}
          </Grid>
          <Grid item md={8}>
            <Grid item md={12}>
              {data && data.visibility_status !== "disabled" && (
                <ViewCardContactInfo petID={params.petID} />
              )}

              {data && data.visibility_status === "record" && (
                <ViewCardHistory
                  records={data.records}
                  showPet={false}
                  showDescription={true}
                  showActions={false}
                />
              )}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Template>
  );
};

export default ViewCardQrPage;
