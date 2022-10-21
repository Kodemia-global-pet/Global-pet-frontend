import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Link,
  Alert,
  Typography,
  Container,
  Box,
} from "@mui/material";
import { useLogedUser } from "../context/UserContext";

const AddPets = () => {
  let navigate = useNavigate();
  const [error, setError] = useState(null);
  const { login } = useLogedUser();
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    const email = getValues("name");
    const password = getValues("breed");
    const result = await login(email, password);
    if (!result) setError("No ingresaste Correctamente los Datos");
    else {
      setError(null);
      navigate("/");
    }
  };

  return (
    <>
      <main
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/images/landingbg.png"
          })`,
          width: "100vw",
        }}
      >
        <Container
          component="main"
          sx={{
            backgroundColor: "grey.contrast",
            color: "#545454",
            borderRadius: "10px",
            width: 506,
            height: 531,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {error && <Alert severity="error">{error} </Alert>}

          <Box
            sx={{
              marginTop: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Agregar mascota
            </Typography>
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
              <TextField
                margin="normal"
                fullWidth
                type="text"
                label="Actividad fisica"
                autoComplete="allergies"
                {...register("allergies", {
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
                  Continuar
                </Button>

                <Grid item sx={{ color: "black.main", marginTop: 5 }}>
                  <Link href="#" underline="hover" sx={{ color: "black.main" }}>
                    Olvidé mi contraseña
                  </Link>
                </Grid>
                <Grid item sx={{ marginTop: 5 }}>
                  <Link href="#" underline="hover" sx={{ color: "black.main" }}>
                    {"¿Aún no tienes cuenta? Crear cuenta"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Container>
      </main>
    </>
  );
};

export default AddPets;
