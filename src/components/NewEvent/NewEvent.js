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
import DropFileInput from "./DropFileInput";

const NewEvent = () => {
  let navigate = useNavigate();
  const type = [
    { label: "Estetico" },
    { label: "Revicion" },
    { label: "Vacunas" },
  ];
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
        columns={3}
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
                InputLabelProps={{ shrink: true }}
                margin="normal"
                fullWidth
                type="date"
                label="Fecha"
                {...register("date", {
                  required: "Completa Este Campo",
                })}
                error={!!errors?.date}
                helperText={errors.date?.message}
              />
              <TextField
                InputLabelProps={{ shrink: true }}
                margin="normal"
                fullWidth
                type="time"
                label="Hora"
                {...register("time", {
                  required: "Completa Este Campo",
                })}
                error={!!errors?.date}
                helperText={errors.date?.message}
              />
              <TextField
                margin="normal"
                fullWidth
                label="Titulo"
                autoComplete="titulo"
                {...register("titulo", {
                  required: "Completa Este Campo",
                })}
                error={!!errors?.size}
                helperText={errors.size?.message}
              />
              <TextField
                margin="normal"
                fullWidth
                label="Veterinario"
                autoComplete="veterinario"
                {...register("feeding", {
                  required: "Completa Este Campo",
                })}
                error={!!errors?.feeding}
                helperText={errors.feeding?.message}
              />

              <Autocomplete
                disablePortal
                id="Register"
                options={type}
                sx={{ flexShrink: 0 }}
                renderInput={(register) => (
                  <TextField
                    margin="normal"
                    {...register}
                    label="Tipo"
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
                label="Otra informacion"
                autoComplete="otherInformation"
                {...register("otherInformation", {
                  required: "Completa Este Campo",
                })}
                error={!!errors?.allergies}
                helperText={errors.allergies?.message}
              />
              <TextField
                margin="normal"
                fullWidth
                type="text"
                label="Descripcion"
                autoComplete="description"
                {...register("description", {
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
            <DropFileInput />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default NewEvent;
