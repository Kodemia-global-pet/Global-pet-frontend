import React from "react";
import { Grid } from "@mui/material";

const CardFaq = ({ ...props }) => {
  return (
    <Grid
      item
      container
      sx={{
        borderRadius: 7,
        backgroundColor: "grey.light",
        flexDirection: "row",
        justifyContent: "center",
        mt: 3,
        width: "261px",
        height: "350px",
      }}
      {...props}
    />
  );
};

export default CardFaq;
