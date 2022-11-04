import React from "react";
import { useForm } from "react-hook-form";
import { Grid, TextField, Button, Box, Link } from "@mui/material";
import { createUser } from "../../services/backend";
import { useLogedUser } from "../../context/UserContext";
import { useNavigate } from "react-router";

const UserFormRegister = () => {
  const { login } = useLogedUser();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm();

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", { message: "Las contraseñas no coinciden" });
      return false;
    }
    try {
      const responseData = await createUser(
        data.name,
        data.email,
        data.password
      );
      const jsonData = await responseData.json();

      if (jsonData.success) {
        const result = await login(data.email, data.password);
        if (result) {
          return navigate("/pets");
        }
      }
    } catch (error) {
      alert("Ingresaste tus datos de forma errónea");
      console.log("error", error);
    }
  };

  return (
    <Grid
      item
      sx={{
        backgroundColor: "grey.light",
        color: "#545454",
        p: 5,
        borderRadius: "4px",
      }}
      xs={12}
      md={6}
    >
      <Grid
        item
        container
        sx={{ pb: 2, justifyContent: "center", alignItems: "center" }}
      >
        <h3>¡Bienvenido a Global Pet!</h3>
      </Grid>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid item sx={{ pb: 2 }}>
          <TextField
            {...register("name", {
              required: "Ingresa tu nombre",
              minLength: {
                value: 10,
                message: "El nombre debe contener al menos 10 caracteres",
              },
            })}
            fullWidth
            label="Nombre"
            size="small"
            required
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        </Grid>
        <Grid item sx={{ pb: 2 }}>
          <TextField
            {...register("email", {
              required: "true",
            })}
            fullWidth
            label="Correo"
            type="email"
            size="small"
            required
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </Grid>
        <Grid item sx={{ pb: 2 }}>
          <TextField
            {...register("password", {
              required: "Ingresa tu contraseña",
              minLength: {
                value: 8,
                message: "La contraseña debe contener al menos 8 caracteres",
              },
            })}
            fullWidth
            label="Contraseña"
            size="small"
            required
            error={!!errors.password}
            helperText={errors.password?.message}
            type="password"
          />
        </Grid>
        <Grid item sx={{ pb: 2 }}>
          <TextField
            {...register("confirmPassword", {
              required: "Confirma tu contraseña",
              minLength: {
                value: 8,
                message: "La contraseña debe contener al menos 8 caracteres",
              },
            })}
            fullWidth
            label="Confirma tu contraseña"
            size="small"
            required
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
            type="password"
          />
        </Grid>
        <Grid
          item
          sx={{ pb: 2 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            variant="contained"
            sx={{ backgroundColor: "primary.main" }}
            type="submit"
          >
            Continuar
          </Button>
        </Grid>
        <Grid
          item
          container
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link href="/login" underline="hover" sx={{ color: "black.main" }}>
            ¿Ya tienes cuenta? Inicia sesión
          </Link>
        </Grid>
      </form>
    </Grid>
  );
};
export default UserFormRegister;
