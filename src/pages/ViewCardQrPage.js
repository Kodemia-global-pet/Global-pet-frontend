import React from "react";
import { Box, Grid } from "@mui/material";
import Template from "../components/Template/Template";
import ViewCardPet from "../components/ViewCardQr/ViewCardQr";

const ViewCardQrPage = () => {
  return (
    <>
      <Template>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            ml: 2,
            mt: 5,
          }}
        ></Box>
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <ViewCardPet />
        </Grid>
      </Template>
    </>
  );
};

export default ViewCardQrPage;
