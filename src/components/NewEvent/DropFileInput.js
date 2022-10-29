import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import CustomImage from "../CustomImage/CustomImage";
import DeleteIcon from "@mui/icons-material/Delete";
import "./DropFielInput.css";

const DropFileInput = ({
  files,
  setFiles,
  previewFiles,
  setPreviewFiles,
  attachments,
  setAttachments,
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

  useEffect(() => {
    const images = [],
      fileReaders = [];
    let isCancel = false;
    if (files.length) {
      files.forEach((file) => {
        const fileReader = new FileReader();
        fileReaders.push(fileReader);
        fileReader.onload = (e) => {
          console.log("ee", e);
          const { result } = e.target;
          console.log("result", result);
          if (result) {
            images.push(result);
          }
          if (images.length === files.length && !isCancel) {
            console.log("result", images);
            setPreviewFiles(images);
          }
        };
        //console.log(file);
        fileReader.readAsDataURL(file);
      });
    }
    return () => {
      isCancel = true;
      fileReaders.forEach((fileReader) => {
        if (fileReader.readyState === 1) {
          fileReader.abort();
        }
      });
    };
  }, [files]);

  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "Column",
          justifyContent: "center",
        }}
      >
        <Box className="uploader">
          {files.length > 0 || attachments.length > 0 ? (
            <Grid
              container
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {attachments
                .filter((a) => !deleted.includes(a._id))
                .map((attachment, index) => {
                  console.log(attachment);
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
                        <CustomImage src={attachment.url} alt="" />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <IconButton
                          aria-label="delete"
                          onClick={() =>
                            setDeleted([...deleted, attachment._id])
                          }
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Box>
                    </Grid>
                  );
                })}
              {previewFiles?.map((image, index) => (
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
                    <CustomImage src={image} alt="" />
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
            Subir Foto
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
      </Container>
    </>
  );
};

DropFileInput.propTypes = {
  onFileChange: PropTypes.func,
};
export default DropFileInput;
