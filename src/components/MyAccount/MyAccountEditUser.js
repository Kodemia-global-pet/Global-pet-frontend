import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useForm } from "react-hook-form";
import { Grid, TextField } from "@mui/material";

export default function EditUserDialog() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async (data) => {
    console.log(data)
    }

    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Este es el primer boton
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Edita tu información de Usuario"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>


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
          </form>
       

           
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
          onClick={handleClose}
            variant="contained"
            sx={{ backgroundColor: "grey.main" }}
            type="submit"
          >
            Continuar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}