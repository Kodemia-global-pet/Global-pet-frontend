import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomImage from "../CustomImage/CustomImage";
import { CardMedia } from "@mui/material";
import GetAppIcon from "@mui/icons-material/GetApp";
import DialogImage from "./Dialogs/DialogImage";
import DialogPDF from "./Dialogs/DialogPDF";

const AttachmentsView = ({ event }) => {
  const [openImage, setOpenImage] = useState(false);
  const [image, setImage] = useState(null);
  const [pdf, setPDF] = useState(null);
  const [openPDF, setOpenPDF] = useState(false);

  const handleClickOpenImage = (image) => {
    setImage(image);
    setOpenImage(true);
  };

  const handleClickOpenPDF = (pdf) => {
    setPDF(pdf);
    setOpenPDF(true);
  };

  const handleClose = () => {
    setOpenImage(false);
    setOpenPDF(false);
  };

  return (
    <Grid container>
      <h2>Documentos: {event.title}</h2>
      <Grid container item xs={12} rowSpacing={3} py={3}>
        {event?.attachments?.map((attachment, index) => {
          return (
            <Grid
              item
              xs={12}
              md={4}
              lg={3}
              xl={3}
              key={index}
              justifyContent="center"
              alignItems="center"
              px={3}
            >
              <Box sx={{ borderRadius: 3, overflow: "hidden" }}>
                {attachment.type?.split("/")[0] === "image" && (
                  <CustomImage
                    src={attachment.url}
                    alt={attachment.title}
                    maxHeight="180px"
                    onClick={() => handleClickOpenImage(attachment.url)}
                  />
                )}
                {attachment.type?.split("/")[0] === "video" && (
                  <CardMedia
                    component="video"
                    controls
                    src={attachment.url}
                    height="180"
                  />
                )}
                {attachment.type === "application/pdf" && (
                  <CustomImage
                    src={`${process.env.PUBLIC_URL}/images/pdf.png`}
                    alt={attachment.title}
                    maxHeight="180px"
                    onClick={() => handleClickOpenPDF(attachment.url)}
                  />
                )}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <a aria-label="download" href={attachment.url} download>
                  <GetAppIcon color="primary" />
                </a>
                <Typography mt={1}>{attachment.title}</Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <DialogImage
        image={image}
        openImage={openImage}
        handleClose={handleClose}
      />
      <DialogPDF pdf={pdf} openPDF={openPDF} handleClose={handleClose} />
    </Grid>
  );
};

export default AttachmentsView;
