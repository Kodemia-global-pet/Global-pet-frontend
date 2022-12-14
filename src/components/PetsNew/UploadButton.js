import { Avatar, Button, Grid } from "@mui/material";
import { useEffect } from "react";

const imageTypeRegex = /image\/(png|jpg|jpeg)/gm;

function UploadButton({
  images,
  setImages,
  imageFiles,
  setImageFiles,
  maxImages = 100,
}) {
  const changeHandler = (e) => {
    const { files } = e.target;
    const validImageFiles = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.match(imageTypeRegex)) {
        validImageFiles.push(file);
      }
    }
    if (validImageFiles.length) {
      setImageFiles(validImageFiles);
      return;
    }
    alert("Selected images are not of valid type!");
  };

  useEffect(() => {
    const images = [],
      fileReaders = [];
    let isCancel = false;
    if (imageFiles.length) {
      imageFiles.forEach((file) => {
        const fileReader = new FileReader();
        fileReaders.push(fileReader);
        fileReader.onload = (e) => {
          const { result } = e.target;
          if (result) {
            images.push(result);
          }
          if (images.length === imageFiles.length && !isCancel) {
            setImages(images);
          }
        };
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
  }, [imageFiles]);
  return (
    <Grid
      container
      item
      xs={12}
      sx={{
        mb: { xs: 3 },
        justifyContent: "center",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {images.length > 0 ? (
        <>
          {images.map((image, idx) => {
            return (
              <Avatar
                key={idx}
                src={image}
                sx={{
                  width: { xs: "100px", md: "160px", lg: "180px" },
                  height: { xs: "100px", md: "160px", lg: "180px" },
                }}
              />
            );
          })}
        </>
      ) : null}
      {images.length < maxImages && (
        <form>
          <p>
            <Button
              htmlFor="file"
              component="label"
              variant="contained"
              sx={{ m: 2 }}
            >
              Subir Foto
              <input
                hidden
                type="file"
                id="file"
                onChange={changeHandler}
                accept="image/png, image/jpg, image/jpeg"
              />
            </Button>
          </p>
        </form>
      )}
    </Grid>
  );
}

export default UploadButton;
