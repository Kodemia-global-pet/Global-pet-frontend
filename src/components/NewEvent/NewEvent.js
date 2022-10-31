import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Grid, TextField, Button, Alert, Box, MenuItem } from "@mui/material";
import { const_event_types } from "../../helpers/constants";
import DropFileInput from "./DropFileInput";
import { createEvent, updateEvent } from "../../services/backend";
import moment from "moment";
import { useToast } from "../../context/ToastContext";

const NewEvent = ({ petID, token, record = false, event = {} }) => {
  let navigate = useNavigate();
  const eventID = event?._id;
  const addToast = useToast();
  const [error, setError] = useState(null);
  const [files, setFiles] = useState([]);
  const [attachments, setAttachments] = useState(event?.attachments || []);
  const [deleted, setDeleted] = useState([]);

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...event,
      date: event.date ? moment(event.date).format("yyyy-MM-DD") : undefined,
    },
  });

  const onSubmit = async () => {
    let formData = new FormData();
    let typeOfRecord = "El registro fue ";

    formData.append("date", getValues("date"));
    formData.append("title", getValues("title"));
    formData.append("description", getValues("description"));
    if (!record) {
      typeOfRecord = "La cita fue ";
      formData.append("time", getValues("time"));
      formData.append("vet", getValues("vet"));
      formData.append("type", getValues("type"));
      formData.append("other_info", getValues("other_info"));
    }
    if (record) formData.append("type", "Registro");
    files.forEach((file) => {
      formData.append("file", file);
    });
    if (eventID) {
      formData.append("deleted", deleted);
      typeOfRecord += record ? "actualizado" : "actualizada";
      const response = await updateEvent(eventID, token, formData);
      const result = await response.json();
      if (!result.success) setError("Ocurrió un error.");
      else {
        setError(null);
        addToast(`${typeOfRecord} correctamente`);
        navigate(`/pets`);
      }
    } else {
      typeOfRecord += record ? "agregado" : "agregada";
      const response = await createEvent(petID, token, formData);
      const result = await response.json();
      if (!result.success) setError("Ocurrió un error.");
      else {
        setError(null);
        addToast(`${typeOfRecord} correctamente`);
        navigate(`/pets/${petID}`);
      }
    }
  };

  return (
    <Grid
      container
      item
      xs={12}
      sx={{
        justifyContent: "space-between",
      }}
    >
      <Grid
        item
        container
        sx={{
          backgroundColor: "grey.light",
          color: "#545454",
          borderRadius: "10px",
          width: "100%",
        }}
        xs={12}
        md={6}
      >
        {error && <Alert severity="error">{error} </Alert>}

        <Box
          sx={{
            marginTop: 5,
            ml: 2,
            mr: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              InputLabelProps={{ shrink: true }}
              margin="normal"
              fullWidth
              type="date"
              label="Fecha"
              {...register("date", {
                required: "Completa Este Campo",
              })}
              error={!!errors?.date}
              helperText={errors.date?.message}
            />
            {!record && (
              <TextField
                InputLabelProps={{ shrink: true }}
                margin="normal"
                fullWidth
                type="time"
                label="Hora"
                {...register("time", {
                  required: "Completa Este Campo",
                })}
                error={!!errors?.date}
                helperText={errors.date?.message}
              />
            )}
            <TextField
              margin="normal"
              fullWidth
              label="Titulo"
              autoComplete="titulo"
              {...register("title")}
              error={!!errors?.title}
              helperText={errors.title?.message}
            />

            {!record && (
              <TextField
                margin="normal"
                fullWidth
                select
                label="Tipo"
                autoComplete="Tipo"
                {...register("type", {
                  required: "Completa Este Campo",
                })}
                error={!!errors?.type}
                helperText={errors.type?.message}
                defaultValue={getValues("type")}
              >
                {const_event_types.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            )}
            {!record && (
              <TextField
                margin="normal"
                fullWidth
                label="Veterinario"
                autoComplete="veterinario"
                {...register("vet")}
                error={!!errors?.vet}
                helperText={errors.vet?.message}
              />
            )}

            <TextField
              margin="normal"
              fullWidth
              type="text"
              label="Descripcion"
              multiline
              rows={4}
              autoComplete="description"
              {...register("description")}
              error={!!errors?.description}
              helperText={errors.description?.message}
            />
            {!record && (
              <TextField
                margin="normal"
                fullWidth
                label="Otra informacion"
                autoComplete="otherInformation"
                {...register("other_info")}
                error={!!errors?.other_info}
                helperText={errors.other_info?.message}
              />
            )}
            <Grid
              container
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                type="submit"
                sx={{
                  width: 170,
                  height: 43,
                  backgroundColor: "grey.main",
                  mt: 3,
                  mb: 2,
                }}
              >
                Guardar
              </Button>
            </Grid>
          </form>
        </Box>
      </Grid>
      <Grid item container xs={12} md={5}>
        <DropFileInput
          files={files}
          setFiles={setFiles}
          attachments={attachments}
          deleted={deleted}
          setDeleted={setDeleted}
        />
      </Grid>
    </Grid>
  );
};

export default NewEvent;
