import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Grid, TextField, Button, Alert, Box, MenuItem } from "@mui/material";
import { useLogedUser } from "../../context/UserContext";

const NewEvent = () => {
  let navigate = useNavigate();
  const const_sizes = [
    { value: "xs", label: "Extra Chico" },
    { value: "s", label: "Chico" },
    { value: "m", label: "Mediana" },
    { value: "lg", label: "Grande" },
    { value: "xl", label: "Extra grande" },
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
    const vet = getValues("vet");
    const type = getValues("type");
    const other_info = getValues("other_info");
    const description = getValues("description");

    const result = await login(
      name,
      breed,
      date,
      size,
      vet,
      type,
      other_info,
      description
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
        item
        container
        sx={{
          backgroundColor: "grey.contrast",
          color: "#545454",
          borderRadius: "10px",
          width: "100%",
          ml: 2,
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
              {...register("title", {
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
              {...register("vet", {
                required: "Completa Este Campo",
              })}
              error={!!errors?.feeding}
              helperText={errors.feeding?.message}
            />

            <TextField
              margin="normal"
              fullWidth
              select
              label="Tipo"
              autoComplete="Tipo"
              {...register("type", {
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
              label="Otra informacion"
              autoComplete="otherInformation"
              {...register("other_info", {
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
            </Grid>
          </form>
        </Box>
      </Grid>
    </>
  );
};

export default NewEvent;
