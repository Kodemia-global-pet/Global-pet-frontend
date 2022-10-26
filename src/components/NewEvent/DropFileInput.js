import React, { useState } from "react";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import PropTypes from "prop-types";
import CustomImage from "../CustomImage/CustomImage";
import DeleteIcon from "@mui/icons-material/Delete";

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
      <Grid container>
        {images.length > 0 ? (
          <Grid
            item
            xl={12}
            sx={{
              width: "1",
              height: "1",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {images.map((image, index) => (
              <Box
                key={index}
                sx={{
                  width: "200px",
                  height: "80px",
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
                  <Typography>{image.size / 1000}B</Typography>

                  <IconButton
                    aria-label="delete"
                    onClick={() => fileRemove(image)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Box>
            ))}
          </Grid>
        ) : null}
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
    </>
  );
};

DropFileInput.propTypes = {
  onFileChange: PropTypes.func,
};
export default DropFileInput;
