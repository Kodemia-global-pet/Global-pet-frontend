import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CustomImage from "../CustomImage/CustomImage";

const Questions = ({ title, src, color, description }) => {
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
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: color,
          p: "36px",
          borderRadius: "50%",
          width: 68,
          height: 65,
          m: "15px",
        }}
      >
        <CustomImage alt={title} src={src} sx={{ width: 68, height: 65 }} />
      </Box>
      <p>{title}</p>
      <Grid item xs>
        <Typography
          sx={{
            mt: 1,
            ml: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {description}
        </Typography>
      </Grid>
    </Box>
  );
};

export default Questions;
