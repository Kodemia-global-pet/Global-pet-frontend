import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CustomReadField = ({ value, label, id }) => {
  return (
    <Box key={id} sx={{ borderBottom: 1 }}>
      <Typography
        sx={{ mt: 0.5 }}
        color="text.secondary"
        display="block"
        variant="caption"
      >
        {label}
      </Typography>
      {value}
    </Box>
  );
};

export default CustomReadField;
