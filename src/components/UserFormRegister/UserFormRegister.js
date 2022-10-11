import React from "react";
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
             size="small"/>
          </Grid>
          <Grid item>
          <TextField 
             id="margin-normal" margin="normal"
             label="Correo"
             size="small"/>
          </Grid>
          <Grid item>
          <TextField 
            id="margin-normal" margin="normal"
            helperText="Entre 5 y 8 carácteres"
             label="Contraseña"
             size="small"/>
          </Grid>
          <Grid item>
          <TextField 
            helperText="Entre 5 y 8 carácteres "
             label="Confirma tu contraseña"
             size="small"/>
          </Grid>
          <Grid item display="flex" justifyContent="center" alignItems="center">
          <Button variant="contained">Continuar</Button>
          </Grid>
          <p>¿Ya tienes cuenta?|Inicia sesión</p>   
          </section>
    </>
       );
  };
  
  export default UserFormRegister;

/*
  <>
        <section>
            <h3>¡Bienvenido a Global Pet!</h3>
            <Grid item onSubmit={handleSubmit(onSubmit)}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
            </Grid>
            <Grid item display="flex" justifyContent="center" alignItems="center">
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </Grid>
            <Grid item display="flex" justifyContent="center" alignItems="center">
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </Grid>
            <Grid itemID="" display="flex" justifyContent="center" alignItems="center">
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </Grid>
            <Button variant="contained">Contained</Button>
        </section>
      </>
   */