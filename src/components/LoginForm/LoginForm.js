import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import {
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
  Alert,
  Typography,
  Container,
  Box,
} from "@mui/material";
import { useLogedUser } from "../../context/UserContext";

const LoginForm = () => {
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
    const email = getValues("email");
    const password = getValues("password");
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
            backgroundColor: "grey.contrastText",
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
              Inicia Sesion ó Registrate
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                margin="normal"
                required
                fullWidth
                type="email"
                label="Correo Electronico"
                autoComplete="email"
                {...register("email", {
                  required: "Completa Este Campo",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Correo Invalido",
                  },
                })}
                error={!!errors?.email}
                helperText={errors.email?.message}
              />
              <TextField
                margin="normal"
                fullWidth
                type="password"
                label="Contraseña"
                autoComplete="current-password"
                {...register("password", {
                  required: "Completa Este Campo",
                  minLength: { value: 3, message: "Minimo 3 caracteres" },
                })}
                error={!!errors?.password}
                helperText={errors.password?.message}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Recuerdame"
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

export default LoginForm;
