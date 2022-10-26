import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Grid, TextField, Button, Alert, Box, MenuItem } from "@mui/material";
import UploadButton from "./UploadButton";
import { createPet } from "../../services/backend";
import { const_activity, const_sizes } from "../../helpers/constants";

const PetsNew = ({ userID, token }) => {
  let navigate = useNavigate();

  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    const photo = imageFiles.length > 0 ? imageFiles[0] : null;
    let formData = new FormData();
    formData.append("name", getValues("name"));
    formData.append("breed", getValues("breed"));
    formData.append("birthdate", getValues("birthdate"));
    formData.append("size", getValues("size"));
    formData.append("feeding", getValues("feeding"));
    formData.append("allergies", getValues("allergies"));
    formData.append("specie", getValues("specie"));
    formData.append("activity_level", getValues("activity_level"));
    if (photo) formData.append("photo", photo);
    console.log(token);
    const response = await createPet(userID, token, formData);
    const result = await response.json();
    if (!result.success) setError("Ocurrió un error.");
    else {
      setError(null);
      navigate("/pets");
    }
  };

  return (
    <>
      <Grid
        container
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "start",
          justifyContent: "space-between",
        }}
      >
        <Grid item xs={12}>
          {error && (
            <Alert
              sx={{
                mb: 3,
              }}
              severity="error"
            >
              {error}
            </Alert>
          )}
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            backgroundColor: "grey.contrast",
            color: "#545454",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              marginTop: 5,
              ml: 2,
              mr: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Nombre"
                autoComplete="name"
                {...register("name", {
                  required: "Completa Este Campo",
                })}
                error={!!errors?.name}
                helperText={errors.name?.message}
              />
              <TextField
                margin="normal"
                fullWidth
                label="Especie"
                autoComplete="Especie"
                {...register("specie")}
                error={!!errors?.allergies}
                helperText={errors.allergies?.message}
              />
              <TextField
                margin="normal"
                fullWidth
                label="Raza"
                autoComplete="breed"
                {...register("breed")}
                error={!!errors?.breed}
                helperText={errors.breed?.message}
              />
              <TextField
                InputLabelProps={{ shrink: true }}
                margin="normal"
                fullWidth
                type="date"
                label="Fecha de nacimiento"
                {...register("birthdate", {
                  required: "Completa Este Campo",
                })}
                error={!!errors?.date}
                helperText={errors.date?.message}
              />
              <TextField
                margin="normal"
                fullWidth
                select
                label="Tamaño"
                autoComplete="current-password"
                {...register("size", {
                  required: "Completa Este Campo",
                })}
                error={!!errors?.size}
                helperText={errors.size?.message}
              >
                {const_sizes.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                margin="normal"
                fullWidth
                label="Alimento"
                autoComplete="feeding"
                {...register("feeding")}
                error={!!errors?.feeding}
                helperText={errors.feeding?.message}
              />
              <TextField
                margin="normal"
                fullWidth
                label="Alergias"
                autoComplete="allergies"
                {...register("allergies")}
                error={!!errors?.allergies}
                helperText={errors.allergies?.message}
              />
              <TextField
                margin="normal"
                fullWidth
                select
                label="Actividad Fisica"
                autoComplete=""
                {...register("activity_level")}
                error={!!errors?.allergies}
                helperText={errors.activity_level?.message}
              >
                {const_activity.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <Grid
                container
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    width: 170,
                    height: 43,
                    backgroundColor: "grey.main",
                    mt: 3,
                    mb: 2,
                  }}
                >
                  Guardar
                </Button>
              </Grid>
            </form>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <UploadButton
            images={images}
            setImages={setImages}
            imageFiles={imageFiles}
            setImageFiles={setImageFiles}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default PetsNew;
