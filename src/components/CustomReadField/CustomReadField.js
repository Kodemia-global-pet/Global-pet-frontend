import { Box } from "@mui/system";
import React from "react";
import CustomCaption from "../CustomCaption/CustomCaption";

const CustomReadField = ({ value, label, id }) => {
  return (
    <Box key={id} sx={{ borderBottom: 1, height: "100%" }}>
      <CustomCaption label={label} display={{ xs: "block" }} />
      {value}
    </Box>
  );
};

export default CustomReadField;
