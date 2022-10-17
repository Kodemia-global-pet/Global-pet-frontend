import { useForm } from "react-hook-form";
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

//let navigate = useNavigate();

const LoginForm = () => {
  const [error, setError] = useState(null);
  const { login } = useLogedUser();
  const {
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = getValues("Email");
    const password = getValues("password");
    const result = await login(email, password);
    if (!result) setError("No ingresaste Correctamente los Datos");
    else {
      setError(null);
      //navigate("/");
    }
  };
  console.log();

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
          item
          xs={12}
          sm={3}
          md={4}
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
              Inicia Sesion ó Registrate
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                type="email"
                label="Correo Electronico"
                name="email"
                autoComplete="email"
                {...register("Email", {
                  required: "Completa Este Campo",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Correo Invalido",
                  },
                })}
                error={!!errors?.email}
              />
              <TextField
                margin="normal"
                fullWidth
                name="password"
                id="password"
                type="password"
                label="Contraseña"
                autoComplete="current-password"
                {...register("password", {
                  required: "Completa Este Campo",
                  minLength: { value: 4, message: "Minimo 4 caracteres" },
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
                  type="submit"
                  width="170px"
                  height="43px"
                  variant="contained"
                  sx={{ backgroundColor: "grey.main", mt: 3, mb: 2 }}
                >
                  Continuar
                </Button>

                <Grid item sx={{ color: "black.main", marginTop: 5 }}>
                  <Link href="#" underline="hover" sx={{ color: "black.main" }}>
                    Olvide Mi Contraseña
                  </Link>
                </Grid>
                <Grid item sx={{ marginTop: 5 }}>
                  <Link href="#" underline="hover" sx={{ color: "black.main" }}>
                    {"Aun no tienes cuenta? Crear Cuenta"}
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
