import { Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import CustomImage from "../CustomImage/CustomImage";

const imageTypeRegex = /image\/(png|jpg|jpeg)/gm;

function UploadButton() {
  const [imageFiles, setImageFiles] = useState([]);
  const [images, setImages] = useState([]);

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
    <Grid className="ImagPet">
      <form>
        <p>
          <Button htmlFor="file" component="label" variant="contained">
            Subir Foto
            <input
              hidden
              type="file"
              id="file"
              onChange={changeHandler}
              accept="image/png, image/jpg, image/jpeg"
              multiple
            />
          </Button>
        </p>
      </form>
      {images.length > 0 ? (
        <Grid>
          {images.map((image, idx) => {
            return (
              <p key={idx}>
                <CustomImage src={image} alt="" />
              </p>
            );
          })}
        </Grid>
      ) : null}
    </Grid>
  );
}

export default UploadButton;
