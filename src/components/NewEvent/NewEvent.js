import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Grid, TextField, Button, Alert, Box, MenuItem } from "@mui/material";
import { const_event_types } from "../../helpers/constants";
import DropFileInput from "./DropFileInput";
import { createEvent } from "../../services/backend";
import moment from "moment";

const NewEvent = ({ petID, token, record = false, event = {} }) => {
  let navigate = useNavigate();
  const eventID = event?._id;
  const [error, setError] = useState(null);
  const [files, setFiles] = useState([]);
  const [attachments, setAttachments] = useState(event?.attachments || []);
  const [deleted, setDeleted] = useState([]);
  const [previewFiles, setPreviewFiles] = useState([]);

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
    console.log(event);
    console.log(files);
    formData.append("date", getValues("date"));
    formData.append("title", getValues("title"));
    formData.append("description", getValues("description"));
    if (!record) {
      formData.append("time", getValues("time"));
      formData.append("vet", getValues("vet"));
      formData.append("type", getValues("type"));
      formData.append("other_info", getValues("other_info"));
    }
    if (record) formData.append("type", "Registro");
    files.forEach((file) => {
      formData.append("file", file);
    });
    return;
    const response = await createEvent(petID, token, formData);
    const result = await response.json();
    if (!result.success) setError("Ocurrió un error.");
    else {
      setError(null);
      navigate(`/pets/${petID}`);
    }
  };

  return (
    <>
      <Grid
        item
        container
        sx={{
          backgroundColor: "grey.contrast",
          color: "#545454",
          borderRadius: "10px",
          width: "100%",
          ml: 2,
        }}
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
      <DropFileInput
        files={files}
        setFiles={setFiles}
        previewFiles={previewFiles}
        setPreviewFiles={setPreviewFiles}
        attachments={attachments}
        setAttachments={setAttachments}
        deleted={deleted}
        setDeleted={setDeleted}
      />
    </>
  );
};

export default NewEvent;
