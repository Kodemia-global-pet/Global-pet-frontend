import React from "react";
import { AppBar, makeStyles, Toolbar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import PetsIcon from "@mui/icons-material/Pets";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";


const MainNavbar = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "header_primary.main" }}>
        <Toolbar>
          <Box
            sx={{
              p: 1,
              flexGrow: 1,
              height: 80,
              width: 80,
              maxHeight: { xs: 80, md: 80 },
              maxWidth: { xs: 80, md: 80 },
            }}
            component="img"
            alt="Haky"
            src={process.env.PUBLIC_URL + "/images/logoHaky.png"}
          />

          <Box sx={{ flexGrow: 1 }} />

          <Box>
            <BottomNavigationAction
              showLabel
              label="Inicio"
              icon={<HomeIcon />}
            />
            <BottomNavigationAction
              showLabel
              label="Mis mascotas"
              icon={<PetsIcon />}
            />
            <BottomNavigationAction
              showLabel
              label="Configuracion"
              icon={<SettingsIcon />}
            />
            <BottomNavigationAction
              showLabel
              label="Ayuda"
              icon={<HelpIcon />}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MainNavbar;
