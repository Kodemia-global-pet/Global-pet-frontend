import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Alert,
  Box,
  Autocomplete,
} from "@mui/material";
import { useLogedUser } from "../../context/UserContext";
import UploadButton from "./UploadButton";

const PetsNew = () => {
  let navigate = useNavigate();
  const countries = [{ label: "Baja" }, { label: "Media" }, { label: "Alta" }];
  const [error, setError] = useState(null);

  const { login } = useLogedUser();
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    const name = getValues("name");
    const breed = getValues("breed");
    const date = getValues("date");
    const size = getValues("size");
    const feeding = getValues("feeding");
    const allergies = getValues("allergies");
    const species = getValues("specie");

    const result = await login(
      name,
      breed,
      date,
      size,
      feeding,
      allergies,
      species
    );
    if (!result) setError("No ingresaste Correctamente los Datos");
    else {
      setError(null);
      navigate("/");
    }
  };

  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "start",
          justifyContent: "space-between",
        }}
      >
        <Grid
          item
          sx={{
            backgroundColor: "grey.contrast",
            color: "#545454",
            borderRadius: "10px",
            width: 700,
            height: 750,
            display: "flex",
            flexDirection: "row",
            ml: 5,
          }}
        >
          {error && <Alert severity="error">{error} </Alert>}

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
                label="Raza"
                autoComplete="breed"
                {...register("breed", {
                  required: "Completa Este Campo",
                })}
                error={!!errors?.breed}
                helperText={errors.breed?.message}
              />
              <TextField
                InputLabelProps={{ shrink: true }}
                margin="normal"
                fullWidth
                type="date"
                label="Fecha de nacimiento"
                {...register("date", {
                  required: "Completa Este Campo",
                })}
                error={!!errors?.date}
                helperText={errors.date?.message}
              />
              <TextField
                margin="normal"
                fullWidth
                label="Tamaño"
                autoComplete="current-password"
                {...register("size", {
                  required: "Completa Este Campo",
                })}
                error={!!errors?.size}
                helperText={errors.size?.message}
              />
              <TextField
                margin="normal"
                fullWidth
                label="Alimentacion"
                autoComplete="feeding"
                {...register("feeding", {
                  required: "Completa Este Campo",
                })}
                error={!!errors?.feeding}
                helperText={errors.feeding?.message}
              />
              <TextField
                margin="normal"
                fullWidth
                label="Alergias"
                autoComplete="allergies"
                {...register("allergies", {
                  required: "Completa Este Campo",
                })}
                error={!!errors?.allergies}
                helperText={errors.allergies?.message}
              />
              <Autocomplete
                id="country-select-demo"
                options={countries}
                autoHighlight
                getOptionLabel={(option) => option.label}
                renderOption={(props, option) => (
                  <Box sx={{ flexShrink: 0 }} {...props}>
                    {option.label}
                  </Box>
                )}
                renderInput={(register) => (
                  <TextField
                    margin="normal"
                    {...register}
                    label="Actividad Fisica"
                    inputProps={{
                      ...register.inputProps,
                      required: "Completa Este Campo",
                    }}
                  />
                )}
              />
              <TextField
                margin="normal"
                fullWidth
                label="Especie"
                autoComplete="Especie"
                {...register("specie", {
                  required: "Completa Este Campo",
                })}
                error={!!errors?.allergies}
                helperText={errors.allergies?.message}
              />
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

                <br></br>
              </Grid>
            </form>
          </Box>
        </Grid>
        <UploadButton />
      </Grid>
    </>
  );
};

export default PetsNew;
