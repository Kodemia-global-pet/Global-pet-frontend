import { Box } from "@mui/material";
import React from "react";
import CustomImage from "../../CustomImage/CustomImage";

const Service = ({ title, src, color }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
        color: "black.main",
      }}
    >
      <Box
        className="service"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: color,
          p: "36px",
          borderRadius: "50%",
        }}
      >
        <CustomImage alt={title} src={src} />
      </Box>
      <p>{title}</p>
    </Box>
  );
};

export default Service;
