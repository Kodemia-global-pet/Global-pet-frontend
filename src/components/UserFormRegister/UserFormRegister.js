import React from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Grid,
  TextField,
} from "@mui/material";

const UserFormRegister = () => {
  
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

    return (
      <>
      <form onSubmit={handleSubmit(onSubmit)}>
          <h3>¡Bienvenido a Global Pet!</h3>
          <Grid item sx={{pb:2}} >
          <TextField
             label="Nombre"
             size="small"/>
          </Grid>
          <Grid item sx={{pb:2}} >
          <TextField 
             label="Correo"
             size="small"/>
          </Grid>
          <Grid item>
          <TextField 
            helperText="Entre 5 y 8 carácteres"
             label="Contraseña"
             size="small"/>
          </Grid>
          <Grid item sx={{pb:2}}>
          <TextField 
            helperText="Entre 5 y 8 carácteres "
             label="Confirma tu contraseña"
             size="small"/>
          </Grid>
          <Grid item display="flex" justifyContent="center" alignItems="center">
          <Button variant="contained">Continuar</Button>
          </Grid>
          <p>¿Ya tienes cuenta? | Inicia sesión</p>   
          </form>
    </>
       );
  };
  
  export default UserFormRegister;

