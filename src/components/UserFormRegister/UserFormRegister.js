import React from "react";
import { useForm } from "react-hook-form";
import { Grid, TextField, Button } from "@mui/material";
import ContinueButton from "../ContinueButton/ContinueButton";
import { useLogedUser } from "../../context/UserContext";
const UserFormRegister = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  /*
  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = getValues('Email')
    const password = getValues('password')
    const name = getValues('name')
    //const result = await login(name, email, password)
  }
*/
  return (
    <section>
      <h3>¡Bienvenido a Global Pet!</h3>
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
          <Button variant="contained" type="submit">
            Continuar
          </Button>
        </Grid>
        <p>¿Ya tienes cuenta? | Inicia sesión</p>
      </form>
    </section>
  );
};
export default UserFormRegister;
