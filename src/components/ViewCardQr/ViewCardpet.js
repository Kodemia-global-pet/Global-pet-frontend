import { Grid, Container, CircularProgress, Avatar } from "@mui/material";
import React from "react";
import ViewCardPetSchema from "./ViewCardPetInfo";

const ViewCardPet = ({ pet }) => {
  return (
    <>
      <Container>
        <Grid
          item
          container
          xs={12}
          padding={{ xs: 3, md: 5 }}
          sx={{
            backgroundColor: "grey.light",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {!pet && <CircularProgress />}
          {pet && (
            <Avatar
              src={pet.photo}
              sx={{
                width: { xs: "100px", md: "160px", lg: "180px" },
                height: { xs: "100px", md: "160px", lg: "180px" },
              }}
            />
          )}
          {pet && <ViewCardPetSchema pet={pet} />}
        </Grid>
      </Container>
    </>
  );
};
export default ViewCardPet;
