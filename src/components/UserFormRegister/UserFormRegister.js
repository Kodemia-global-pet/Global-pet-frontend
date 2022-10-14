import React from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Grid,
  TextField,
} from "@mui/material";

const UserFormRegister = () => {
  
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }
  const click =()=>{reset();} 

    return (
      <section>
          <h3>¡Bienvenido a Global Pet!</h3>
      <form>
          <Grid item sx={{pb:2}}>
          <TextField
             {...register("nombre")}
             label="Nombre"
             size="small"/>
          </Grid>
          <Grid item sx={{pb:2}} >
          <TextField 
             {...register("correo")}
             label="Correo"
             size="small"/>
          </Grid>
          <Grid item>
          <TextField 
            {...register("contraseña")}
            helperText="Entre 5 y 8 carácteres"
            type="password"
             label="Contraseña"
             size="small"/>
          </Grid>
          <Grid item sx={{pb:2}}>
          <TextField 
            {...register("confirma tu contraseña")}
            helperText="Entre 5 y 8 carácteres "
            type="password"
             label="Confirma tu contraseña"
             size="small"/>
          </Grid>
          <Grid item display="flex" justifyContent="center" alignItems="center">
          <Button variant="contained" onClick={handleSubmit(onSubmit, click)} >Continuar</Button>
          </Grid>
          <p>¿Ya tienes cuenta? | Inicia sesión</p>   
          </form>
        </section>
       );
  };
  
  export default UserFormRegister;

