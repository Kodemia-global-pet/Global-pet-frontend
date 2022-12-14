import { Grid } from "@mui/material";
import React, { useState } from "react";
import CustomButton from "../../CustomButton/CustomButton";
import CustomCaption from "../../CustomCaption/CustomCaption";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useLogedUser } from "../../../context/UserContext";
import { deleteRecord } from "../../../services/backend";
import { useToast } from "../../../context/ToastContext";

const EventItem = ({
  record,
  showPet = false,
  showDescription = false,
  showActions = false,
  petID = null,
  isPublic = false,
}) => {
  const { user } = useLogedUser();
  let navigate = useNavigate();
  const addToast = useToast();
  const url = isPublic ? "/public/events" : "/events";
  let record_type = record.type === "Registro" ? "records" : "events";
  let [error, setError] = useState(null);
  const actionDelete = async (recordID) => {
    const confirmBox = window.confirm("Estas seguro de eliminar este evento?");
    if (confirmBox === true) {
      try {
        if (!user) return;

        const response = await deleteRecord(recordID, user.token);
        const result = await response.json();

        if (!result.success) {
          setError("Ocurrió un error");
        } else {
          addToast("El evento fue eliminado correctamente");
          navigate(0);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <Grid container item xs={12} sx={{ py: 2, px: 2, borderBottom: 1 }}>
      <Grid item xs={12} md sx={{ px: 2 }}>
        <CustomCaption label="Fecha" display={{ xs: "block", md: "none" }} />
        {new Date(record.date).toLocaleDateString("en-us", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </Grid>
      {showPet && (
        <Grid item xs={6} md sx={{ px: 2 }}>
          <CustomCaption label="Nombre" display={{ xs: "block", md: "none" }} />
          {record.name}
        </Grid>
      )}
      <Grid item xs={6} md sx={{ px: 2 }}>
        <CustomCaption label="Evento" display={{ xs: "block", md: "none" }} />
        {record.title}
      </Grid>
      {showDescription && (
        <Grid item xs={6} md sx={{ px: 2 }}>
          <CustomCaption
            label="Descripción"
            display={{ xs: "block", md: "none" }}
          />
          {record.description}
        </Grid>
      )}
      {(showActions || isPublic) && (
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            mt: { xs: 3, md: 0 },
            gap: 1,
          }}
        >
          <CustomButton
            label="Ver Documentos"
            component={RouterLink}
            to={`${url}/${record._id}/attachments`}
            color="primary"
            disabled={!record.attachments.length > 0}
          />
          {showActions && (
            <CustomButton
              label="Editar"
              component={RouterLink}
              to={`/${record_type}/${record._id}/edit`}
              color="primary"
              icon="edit"
            />
          )}
          {showActions && (
            <CustomButton
              label="Eliminar"
              onClick={() => actionDelete(record._id)}
              color="danger"
              icon="delete"
            />
          )}
        </Grid>
      )}
    </Grid>
  );
};

export default EventItem;
