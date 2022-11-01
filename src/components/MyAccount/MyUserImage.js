import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import UploadButton from "../PetsNew/UploadButton";
import { Grid } from "@mui/material";

const MyUserImage = (user) => {
  let navigate = useNavigate();
  const [imageFiles, setImageFiles] = useState([]);
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);
  const userID = user?._id;

  useEffect(() => {
    if (user?.photo) {
      setImages([user.photo]);
    }
  }, []);

  const onSubmit = async () => {
    //    const photo = imageFiles.length > 0 ? imageFiles[0] : null;
    //     let formData = new FormData();
    //     if (photo) formData.append("photo", photo);
    //     if (petID)
    //   formData.append("visibility_status", getValues("visibility_status"));
    // if (petID) {
    //   const response = await updatePet(petID, token, formData);
    //   const result = await response.json();
    //   if (!result.success) setError("Ocurrió un error.");
    //   else {
    //     setError(null);
    //     navigate("/pets");
    //   }
    // } else {
    //   const response = await createPet(userID, token, formData);
    //   const result = await response.json();
    //   if (!result.success) setError("Ocurrió un error.");
    //   else {
    //     setError(null);
    //     navigate("/pets");
    //   }
    // }
  };

  return (
    <Grid item xs={12} md={3} order={{ xs: 1, md: 2 }}>
      <UploadButton
        images={images}
        setImages={setImages}
        imageFiles={imageFiles}
        setImageFiles={setImageFiles}
        maxImages={1}
      />
    </Grid>
  );
};

export default MyUserImage;
