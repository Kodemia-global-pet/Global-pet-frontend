import React from "react";
import { Typography } from "@mui/material";

const CustomCaption = ({ label, display }) => {
  return (
    <Typography
      sx={{ mt: 0.5 }}
      color="text.secondary"
      display={display}
      variant="caption"
    >
      {label}
    </Typography>
  );
};

export default CustomCaption;
