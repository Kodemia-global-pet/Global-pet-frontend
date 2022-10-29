import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { Grid, TextField, Box, Avatar } from "@mui/material";
import CustomButton from "../CustomButton/CustomButton";
import { updateUser } from "../../services/updateUser";

export default function EditUserDialog({ user }) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm({
    defaultValues: {
      name: user.name,
      email: user.email,
      phone_number: user.phone_number,
      address: user.address,
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", { message: "Las contraseñas no coinciden" });
      return false;
    }
    try {
      const body = {
        name: data.name,
        email: data.email,
        phone_number: data.phone_number,
        password: data.password,
        address: data.address,
      };
      const newUser = await updateUser(user._id, body, user.token);
      console.log("newUser", newUser);
      window.location.reload();
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <Box sx={{ p: 2 }} onClick={handleClickOpen}>
        <CustomButton label="Editar" color="grey" icon="edit" />
      </Box>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Edita tu información de usuario"}
        </DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <DialogContentText>
              <Grid item
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            
              >
                <Box sx={{ pb: 2 }}>
                  <Avatar src={user.photo} alt="UserDefault" />
                </Box>
                <Box display="flex" flexDirection="row" justifyContent="space-between">
                  <Box sx={{ pb: 2, pr: 1 }}>
                    <CustomButton
                      label="Eliminar"
                      color="danger"
                      icon="delete"
                    />
                  </Box>
                  <Box sx={{ pb: 2 }}>
                    <CustomButton label="Editar" color="grey" />
                  </Box>
                </Box>
              </Grid>

              <Grid item sx={{ pb: 2 }}>
                <TextField
                  fullWidth
                  {...register("name", {
                    required: "Ingresa tu nombre",
                    minLength: {
                      value: 5,
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
                  fullWidth
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
                  fullWidth
                  {...register("password", {
                    required: "Ingresa tu contraseña",
                    minLength: {
                      value: 3,
                      message:
                        "La contraseña debe contener al menos 8 caracteres",
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
                  fullWidth
                  {...register("confirmPassword", {
                    required: "Confirma tu contraseña",
                    minLength: {
                      value: 3,
                      message:
                        "La contraseña debe contener al menos 8 caracteres",
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

              <Grid item sx={{ pb: 2 }}>
                <TextField
                  fullWidth
                  type="number"
                  {...register("phone_number", {
                    required: "Ingresa tu telefono",
                    minLength: {
                      value: 10,
                      message: "El telefono debe contener al menos 10 números",
                    },
                  })}
                  label="Teléfono"
                  size="small"
                  required
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                />
              </Grid>

              <Grid item sx={{ pb: 2 }}>
                <TextField
                  fullWidth
                  {...register("address", {
                    required: "Ingresa tu direccion",
                    minLength: {
                      value: 10,
                      message:
                        "La direccion debe contener al menos 10 caracteres",
                    },
                  })}
                  label="Dirección"
                  size="small"
                  required
                  error={!!errors.address}
                  helperText={errors.address?.message}
                />
              </Grid>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Box display="flex" flexDirection="row">
              <Box sx={{ pr: 1 }}>
                <Button
                  onClick={handleClose}
                  variant="contained"
                  sx={{ backgroundColor: "grey.main" }}
                  type="button"
                >
                  Cancelar
                </Button>
              </Box>
              <Box>
                <CustomButton type="submit" label="Guardar" color="secondary" />
              </Box>
            </Box>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
