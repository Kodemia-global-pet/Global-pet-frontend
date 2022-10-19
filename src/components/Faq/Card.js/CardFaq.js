import React from "react";
import { Grid } from "@mui/material";

const CardFaq = ({ ...props }) => {
  return (
    <Grid
      item
      container
      display={{ xs: "none", sm: "block" }}
      sx={{
        width: 261,
        height: 194,
        borderRadius: 7,
        backgroundColor: "grey.light",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      {...props}
    />
  );
};

export default CardFaq;
