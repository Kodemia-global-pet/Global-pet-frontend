import { Alert, Grid } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../../context/ToastContext";
import { updatePet } from "../../../services/backend";
import QROptionCard from "./QROptionCard/QROptionCard";

const QRConfig = ({ pet, token }) => {
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(pet.visibility_status);
  let navigate = useNavigate();
  const addToast = useToast();

  const changeOption = async (option) => {
    let formData = new FormData();
    formData.append("visibility_status", option);
    const response = await updatePet(pet._id, token, formData);
    const result = await response.json();
    if (!result.success) setError("Ocurrió un error.");
    else {
      setError(null);
      addToast(`Configuración actualizada correctamente`);
      setSelected(option);
    }
  };
  if (error) return <Alert severity="error">{error}</Alert>;
  return (
    <Grid item container xs={12} columnSpacing={3} rowSpacing={3}>
      <Grid item xs={12} md={4}>
        <QROptionCard
          title="Básico"
          changeOption={changeOption}
          option="disabled"
          selected={selected === "disabled"}
        >
          <p>Se mostrarán los siguientes datos de la mascota:</p>
          <ul>
            <li>Foto de perfil</li>
            <li>Nombre</li>
            <li>Especie</li>
            <li>Alergias</li>
            <li>Raza</li>
          </ul>
        </QROptionCard>
      </Grid>
      <Grid item xs={12} md={4}>
        <QROptionCard
          title="Datos de contacto"
          changeOption={changeOption}
          option="contact"
          selected={selected === "contact"}
        >
          <p>
            Se mostrará configuración básica y los siguientes datos de usuario:
          </p>
          <ul>
            <li>Nombre</li>
            <li>Teléfono</li>
            <li>Dirección</li>
          </ul>
        </QROptionCard>
      </Grid>
      <Grid item xs={12} md={4}>
        <QROptionCard
          title="Historial Clínico"
          changeOption={changeOption}
          option="record"
          selected={selected === "record"}
        >
          <p>
            Se mostrará configuración Datos de contacto y el historial de
            eventos y registros de la mascota
          </p>
        </QROptionCard>
      </Grid>
    </Grid>
  );
};

export default QRConfig;
