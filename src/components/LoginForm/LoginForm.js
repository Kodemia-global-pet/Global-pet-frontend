import { useForm } from "react-hook-form";
import React from "react";
import { Grid, TextField } from "@mui/material";


const LoginForm = () => {
    const { register, handleSubmit, formState:{errors} } = useForm();
    return (
        <Grid display="flex" justifyContent="center" alignItems="center">
        <div>
            <form onSubmit={handleSubmit((data)=>{
                console.log(data)
            })}>
                <TextField id="outlined-basic"label="Correo Electronico" variant="outlined" {...register("firstName",{required:"Completa Este Campo"})} />
                <p>{errors.firstName?.message}</p>
                <TextField id="outlined-basic" type="password" label="Contraseña" variant="outlined" {...register("lastName",{required:"Completa Este Campo", minLength:{value:4, message:"Minimo 4 caracteres"}} )} />
                <p>{errors.lastName?.message}</p>
                <input type="submit" />

            </form>
        </div>
        </Grid>

    )

}

export default LoginForm