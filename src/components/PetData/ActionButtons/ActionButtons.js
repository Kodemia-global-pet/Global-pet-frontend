import { Box } from "@mui/system";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import CustomButton from "../../CustomButton/CustomButton";

const ActionButtons = ({ petID }) => {
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
      <CustomButton label="Editar" color="primary" icon="edit" />
      <CustomButton label="Eliminar" color="danger" icon="delete" />
    </Box>
  );
};

export default ActionButtons;
