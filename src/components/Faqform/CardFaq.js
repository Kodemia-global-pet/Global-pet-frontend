import React from "react";
import { Grid } from "@mui/material";

const CardFaq = ({ ...props }) => {
  return (
    <Grid
      item
      container
      xs={12}
      sx={{
        borderRadius: "10px",
        backgroundColor: "grey.light",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
      {...props}
    />
  );
};

export default CardFaq;
