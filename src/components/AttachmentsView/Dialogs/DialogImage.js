import { Close } from "@mui/icons-material";
import { Box, Dialog, IconButton } from "@mui/material";
import React from "react";
import CustomImage from "../../CustomImage/CustomImage";

const DialogImage = ({ image, openImage, handleClose }) => {
  return (
    <Dialog open={openImage} onClose={handleClose}>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <Close />
      </IconButton>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <CustomImage src={image} />
      </Box>
    </Dialog>
  );
};

export default DialogImage;
