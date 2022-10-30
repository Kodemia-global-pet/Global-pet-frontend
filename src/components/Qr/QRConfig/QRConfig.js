import { Alert, Grid } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updatePet } from "../../../services/backend";
import QROptionCard from "./QROptionCard/QROptionCard";

const QRConfig = ({ pet, token }) => {
  const [error, setError] = useState(null);
  let navigate = useNavigate();

  const changeOption = async (option) => {
    let formData = new FormData();
    formData.append("visibility_status", option);
    const response = await updatePet(pet._id, token, formData);
    const result = await response.json();
    if (!result.success) setError("Ocurrió un error.");
    else {
      setError(null);
      navigate(0);
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
          selected={pet.visibility_status === "disabled"}
        >
          <p>
            Se mostrarán los siguientes datos de la mascota:
            <ul>
              <li>Foto de perfil</li>
              <li>Nombre</li>
              <li>Especie</li>
              <li>Alergias</li>
              <li>Raza</li>
            </ul>
          </p>
        </QROptionCard>
      </Grid>
      <Grid item xs={12} md={4}>
        <QROptionCard
          title="Datos de contacto"
          changeOption={changeOption}
          option="contact"
          selected={pet.visibility_status === "contact"}
        >
          <p>
            Se mostrará configuración básica y los siguientes datos de usuario:
            <ul>
              <li>Nombre</li>
              <li>Teléfono</li>
              <li>Dirección</li>
            </ul>
          </p>
        </QROptionCard>
      </Grid>
      <Grid item xs={12} md={4}>
        <QROptionCard
          title="Historial Clínico"
          changeOption={changeOption}
          option="record"
          selected={pet.visibility_status === "record"}
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
