import { useForm } from "react-hook-form";
import React,{useState} from "react";
import { createTheme, Grid, TextField, Alert } from "@mui/material";
import { useLogedUser } from "../../context/UserContext";

//let navigate = useNavigate();




const LoginForm = () => {
    const theme = createTheme({
        palette: {

        }
    })
    const [error, setError] = useState(null);
    const { login }= useLogedUser();
    const { register, getValues, formState: { errors } } = useForm();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const email= getValues("Email");
        const password=getValues("password"); 
        const result = await login(email,password);
        if (!result)
            setError("Tienes un error");
        else {
            setError(null);
            //navigate("/");
        }
    }

    return (
        <>
            {error && <Alert severity="error">{error} </Alert>}
            <Grid display="flex" justifyContent="center" alignItems="center">
                <div>
                    <form onSubmit={handleSubmit}>
                        
                        <TextField theme={theme} id="outlined-basic" label="Email" variant="outlined" {...register("Email", { required: "Completa Este Campo" })} />
                        <p>{errors.firstName?.message}</p>
                        <TextField id="outlined-basic" type="password" label="Contraseña" variant="outlined" {...register("password", { required: "Completa Este Campo", minLength: { value: 4, message: "Minimo 4 caracteres" } })} />
                        <p>{errors.lastName?.message}</p>
                        <input type="submit" />
                    </form>
                </div>
            </Grid>
        </>

    )

}

export default LoginForm