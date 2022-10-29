import { Grid } from "@mui/material";
import React from "react";
import { useLogedUser } from "../../context/UserContext";
import ViewCardContactSchema from "./ViewCardContactSchema";

const ViewCardContact = () => {
  let { user } = useLogedUser();
  return (
    <>
      <Grid
        item
        container
        xs={12}
        padding={{ xs: 0, md: 5 }}
        sx={{
          backgroundColor: "grey.light",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        {user && (
          <Grid>
            <ViewCardContactSchema user={user} />
          </Grid>
        )}
      </Grid>
    </>
  );
};
export default ViewCardContact;
