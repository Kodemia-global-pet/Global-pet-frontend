import React from "react";
import CustomButton from "../../CustomButton/CustomButton";
import { Grid} from "@mui/material";

const MyAccountList = () => {
  return (
    <box>
      <h1>Mi cuenta</h1>
      <h3>Foto de perfil</h3>
      <Grid display="flex" justifyContent="space-between" alignItems="center">
      <box>
          <img src="" alt="" ></img>
        </box>
        <box >
          <box sx={{p:6}}>
          <CustomButton label="Eliminar foto" color="danger" icon="delete"/>
          </box>
          <box>
          <CustomButton label="Cambiar imagen" color="secondary" />
          </box>
        </box>
      </Grid>
    </box>
  );
};

export default MyAccountList;
