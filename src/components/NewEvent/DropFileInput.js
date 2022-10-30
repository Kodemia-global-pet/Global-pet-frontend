import React from "react";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import PropTypes from "prop-types";
import CustomImage from "../CustomImage/CustomImage";
import DeleteIcon from "@mui/icons-material/Delete";
import "./DropFielInput.css";
import pdf from "../../assets/file-pdf-solid-240.png";

const DropFileInput = ({
  files,
  setFiles,
  attachments,
  deleted,
  setDeleted,
}) => {
  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      const updatedList = [...files, newFile];
      setFiles(updatedList);
    }
  };

  const fileRemove = (file) => {
    const updatedList = [...files];
    updatedList.splice(files.indexOf(file), 1);
    setFiles(updatedList);
  };

  return (
    <Grid
      container
      item
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      xs={12}
    >
      <Box className="uploader">
        {files.length > 0 || attachments.length > 0 ? (
          <Grid
            container
            item
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
            xs={12}
          >
            {attachments
              .filter((a) => !deleted.includes(a._id))
              .map((attachment, index) => {
                return (
                  <Grid
                    item
                    xs={12}
                    md={4}
                    lg={6}
                    xl={4}
                    key={index}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Box sx={{ borderRadius: 3, overflow: "hidden" }}>
                      {attachment.type?.split("/")[0] === "image" && (
                        <CustomImage
                          src={attachment.url}
                          alt={attachment.title}
                          maxHeight="100px"
                        />
                      )}
                      {attachment.type === "application/pdf" && (
                        <CustomImage
                          src={pdf}
                          alt={attachment.title}
                          maxHeight="100px"
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
                      <Typography mt={1}>{attachment.title}</Typography>
                      <IconButton
                        aria-label="delete"
                        onClick={() => setDeleted([...deleted, attachment._id])}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </Grid>
                );
              })}
            {files?.map((image, index) => (
              <Grid
                item
                container
                xs={12}
                md={4}
                lg={6}
                xl={4}
                key={index}
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <Box sx={{ borderRadius: 3, overflow: "hidden" }}>
                  {image.type.split("/")[0] === "image" && (
                    <CustomImage
                      src={URL.createObjectURL(image)}
                      alt={image.name}
                      maxHeight="100px"
                    />
                  )}
                  {image.type === "application/pdf" && (
                    <CustomImage src={pdf} alt={image.name} maxHeight="100px" />
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
                  <Typography mt={1}>{image.name}</Typography>
                  <Typography>{image.size / 1000}KB</Typography>
                  <IconButton
                    aria-label="delete"
                    onClick={() => fileRemove(image)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Grid>
            ))}
          </Grid>
        ) : null}
      </Box>
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "stretch",
          mt: 5,
        }}
      >
        <Button component="label" variant="contained">
          Subir Archivo
          <input
            hidden
            type="file"
            value=""
            onChange={onFileDrop}
            accept="image/png, image/jpg, image/jpeg, application/pdf, video/*"
            multiple
          />
        </Button>
      </Grid>
    </Grid>
  );
};

DropFileInput.propTypes = {
  onFileChange: PropTypes.func,
};
export default DropFileInput;
