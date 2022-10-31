import React from "react";
import { Grid, Alert } from "@mui/material";
import Template from "../components/Template/Template";
import ViewCardPet from "../components/ViewCardQr/ViewCardpet";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useLogedUser } from "../context/UserContext";
import ViewCardContactSchema from "../components/ViewCardQr/ViewCardContactInfo";
import ViewCardHistory from "../components/ViewCardQr/ViewCardHistory";

const ViewCardQrPage = () => {
  const params = useParams();
  let { user } = useLogedUser();
  const { data, error } = useFetch(
    `${process.env.REACT_APP_BACKEND}pets/${params.petID}/records`
  );
  console.log(data);
  if (error)
    return <Alert severity="error">Ocurrio un error, intente de nuevo</Alert>;

  return (
    <>
      <Template>
        <Grid container>
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
            <Grid md={12}>
              {user && <ViewCardContactSchema user={user} />}

              {data && (
                <ViewCardHistory
                  records={data.records}
                  showPet={false}
                  showDescription={true}
                  showActions={true}
                />
              )}
            </Grid>
          </Grid>
        </Grid>
      </Template>
    </>
  );
};

export default ViewCardQrPage;
