import React from "react";
import MyAccountHeader from "./MyAccountHeader";
import { useLogedUser } from "../../context/UserContext";
import { CircularProgress } from "@mui/material";
import MyAccountAside from "./MyAccountAside";
import Grid from "@mui/material/Grid";

const MyAccountContainer = () => {
  let { user } = useLogedUser();
  return (
    <>
      {!user && <CircularProgress />}
      {user && (
        <Grid container sx={{ backgroundColor: "grey.light", padding: "40px" }}>
          <Grid item xs={12} lg={3}>
            <MyAccountAside user={user} />
          </Grid>
          <Grid item xs={12} lg={9}>
            <MyAccountHeader user={user} />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default MyAccountContainer;
