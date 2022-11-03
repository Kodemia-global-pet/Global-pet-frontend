import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CustomImage from "../CustomImage/CustomImage";

const Questions = ({ title, src, color, description }) => {
  return (
    <Grid
      item
      container
      xs={12}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        xs={12}
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
            borderRadius: "50%",
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
    </Grid>
  );
};

export default Questions;
