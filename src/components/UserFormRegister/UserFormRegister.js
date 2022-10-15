import React from "react";
<<<<<<< HEAD
import { useForm } from "react-hook-form";
import { Grid, TextField } from "@mui/material";
import ContinueButton from "../ContinueButton/ContinueButton";

const UserFormRegister = () => {
  const { register, handleSubmit, formState: {errors}, isValid} = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

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
        <Grid item sx={{ pb: 2 }} display="flex" justifyContent="center" alignItems="center">
        <ContinueButton/>
        </Grid>
        <p>¿Ya tienes cuenta? | Inicia sesión</p>
      </form>
    </section>
  );
};

export default UserFormRegister;


=======
//import { useForm } from "react-hook-form";
import {
  Button,
  Grid,
  TextField,
} from "@mui/material";
const UserFormRegister = () => {
  /*
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
*/
  return (
    <>
      <section>
        <h3>¡Bienvenido a Global Pet!</h3>
        <Grid item >
          <TextField
            id="margin-normal" margin="normal"
            label="Nombre"
            size="small" />
        </Grid>
        <Grid item>
          <TextField
            id="margin-normal" margin="normal"
            label="Correo"
            size="small" />
        </Grid>
        <Grid item>
          <TextField
            id="margin-normal" margin="normal"
            helperText="Entre 5 y 8 carácteres"
            label="Contraseña"
            size="small" />
        </Grid>
        <Grid item>
          <TextField
            helperText="Entre 5 y 8 carácteres "
            label="Confirma tu contraseña"
            size="small" />
        </Grid>
        <Grid item display="flex" justifyContent="center" alignItems="center">
          <Button variant="contained">Continuar</Button>
        </Grid>
        <p>¿Ya tienes cuenta?|Inicia sesión</p>
      </section>

    </>
  );
};

export default UserFormRegister
>>>>>>> 44f4da1967425a9e54d8d292d5c0405d41913dae
