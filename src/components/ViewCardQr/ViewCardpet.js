import {
  Grid,
  Container,
  CircularProgress,
  Alert,
  Avatar,
} from "@mui/material";
import React from "react";
import ViewCardPetSchema from "./ViewCardPetSchema";
import { useLogedUser } from "../../context/UserContext";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const ViewCardPet = () => {
  const params = useParams();
  let { user } = useLogedUser();
  const { data, error } = useFetch(
    `${process.env.REACT_APP_BACKEND}pets/${params.petID}/records`
  );

  return (
    <>
      <Container>
        <Grid>
          <Grid
            container
            xs={12}
            padding={{ xs: 0, md: 5 }}
            sx={{
              backgroundColor: "grey.light",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {!data && !user && <CircularProgress />}
            {data && (
              <Avatar
                src={data.photo}
                sx={{
                  width: { xs: "100px", md: "160px", lg: "180px" },
                  height: { xs: "100px", md: "160px", lg: "180px" },
                }}
              />
            )}
            {data && user && <ViewCardPetSchema pet={data} />}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default ViewCardPet;
