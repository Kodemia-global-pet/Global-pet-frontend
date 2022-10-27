import React, { useState } from "react";
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

const DropFileInput = (props) => {
  const [images, setImages] = useState([]);

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      const updatedList = [...images, newFile];
      setImages(updatedList);
      props.onFileChange(updatedList);
    }
  };

  const fileRemove = (file) => {
    const updatedList = [...images];
    updatedList.splice(images.indexOf(file), 1);
    setImages(updatedList);
    props.onFileChange(updatedList);
  };
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
          {images.length > 0 ? (
            <Grid
              container
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {images.map((image, index) => (
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
                    <CustomImage src={URL.createObjectURL(image)} alt="" />
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
            Subir Foto
            <input
              hidden
              type="file"
              value=""
              onChange={onFileDrop}
              accept="image/png, image/jpg, image/jpeg"
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
