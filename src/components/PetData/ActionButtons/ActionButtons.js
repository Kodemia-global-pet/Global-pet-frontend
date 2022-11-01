import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";
import { useToast } from "../../../context/ToastContext";
import { useLogedUser } from "../../../context/UserContext";
import { deletePet } from "../../../services/backend";
import CustomButton from "../../CustomButton/CustomButton";

const ActionButtons = ({ petID }) => {
  let [error, setError] = useState(null);
  let navigate = useNavigate();
  const { user } = useLogedUser();
  const addToast = useToast();

  const actionDelete = async () => {
    const confirmBox = window.confirm("Estas seguro de eliminar esta mascota?");
    if (confirmBox === true) {
      try {
        if (!user) return;

        const response = await deletePet(petID, user.token);
        const result = await response.json();
        if (!result.success) {
          setError("Ocurrió un error");
        } else {
          addToast("La mascota fue eliminada correctamente");
          navigate(`/pets`);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        gap: 2,
        mt: 5,
      }}
    >
      <CustomButton
        component={RouterLink}
        to={"/pets/" + petID + "/edit"}
        label="Editar"
        color="primary"
        icon="edit"
      />
      <CustomButton
        onClick={actionDelete}
        label="Eliminar"
        color="danger"
        icon="delete"
      />
    </Box>
  );
};

export default ActionButtons;
