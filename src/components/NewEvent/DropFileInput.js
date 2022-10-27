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
        xs={12}
        xl={12}
        sx={{
          display: "flex",
          flexDirection: "Column",
          justifyContent: "center",
          ml: 2,
        }}
      >
        <Grid className="uploader" item>
          {images.length > 0 ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {images.map((image, index) => (
                <Box
                  md={6}
                  key={index}
                  sx={{
                    ml: 2,
                  }}
                >
                  <CustomImage src={URL.createObjectURL(image)} alt="" />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Typography mt={1}>{image.name}</Typography>
                    <Typography>{image.size / 1000}Mb</Typography>

                    <IconButton
                      aria-label="delete"
                      onClick={() => fileRemove(image)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Box>
              ))}
            </Box>
          ) : null}
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "stretch",
            mt: 2,
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
