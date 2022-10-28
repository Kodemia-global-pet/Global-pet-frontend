import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Alert,
  Box,
  MenuItem,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import UploadButton from "./UploadButton";
import { createPet, updatePet } from "../../services/backend";
import { const_activity, const_sizes } from "../../helpers/constants";
import moment from "moment";

const PetsNew = ({ userID, token, pet = {} }) => {
  let navigate = useNavigate();
  const petID = pet?._id;
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);

  useEffect(() => {
    if (pet.photo) {
      setImages([pet.photo]);
    }
  }, []);

  const {
    register,
    getValues,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...pet,
      birthdate: pet.birthdate
        ? moment(pet.birthdate).format("yyyy-MM-DD")
        : undefined,
    },
  });

  const onSubmit = async () => {
    const photo = imageFiles.length > 0 ? imageFiles[0] : null;
    let formData = new FormData();
    formData.append("name", getValues("name"));
    formData.append("breed", getValues("breed"));
    formData.append("birthdate", moment(getValues("birthdate")).format());
    formData.append("size", getValues("size"));
    formData.append("feeding", getValues("feeding"));
    formData.append("allergies", getValues("allergies"));
    formData.append("specie", getValues("specie"));
    formData.append("activity_level", getValues("activity_level"));
    if (photo) formData.append("photo", photo);
    if (petID)
      formData.append("visibility_status", getValues("visibility_status"));

    if (petID) {
      const response = await updatePet(petID, token, formData);
      const result = await response.json();
      console.log("result update", result);
      if (!result.success) setError("Ocurrió un error.");
      else {
        setError(null);
        navigate("/pets");
      }
    } else {
      const response = await createPet(userID, token, formData);
      const result = await response.json();
      console.log("result create", result);
      if (!result.success) setError("Ocurrió un error.");
      else {
        setError(null);
        navigate("/pets");
      }
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
        {petID && (
          <Grid xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Mostrar los siguientes datos:
              </FormLabel>
              <Controller
                control={control}
                name="visibility_status"
                {...register("visibility_status")}
                render={({ field: { onChange, value } }) => (
                  <RadioGroup value={value} onChange={onChange} row>
                    <FormControlLabel
                      value="disabled"
                      control={<Radio />}
                      label="Información de la mascota"
                    />
                    <FormControlLabel
                      value="contact"
                      control={<Radio />}
                      label="Información de contacto"
                    />
                    <FormControlLabel
                      value="record"
                      control={<Radio />}
                      label="Cartilla"
                    />
                  </RadioGroup>
                )}
              />
            </FormControl>
          </Grid>
        )}
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            color: "#545454",
            display: "flex",
            flexDirection: "row",
            p: 3,
          }}
          order={{ xs: 2, md: 1 }}
        >
          <Box
            sx={{
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
                defaultValue={getValues("size")}
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
                defaultValue={getValues("activity_level")}
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
        <Grid item xs={12} md={3} order={{ xs: 1, md: 2 }}>
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
