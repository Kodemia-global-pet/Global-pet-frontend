import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import PetsIcon from "@mui/icons-material/Pets";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import { Link } from "react-router-dom";

const drawerWidth = 300;
const logout = () => {
  localStorage.clear();
  window.location.href = "/";
};

const MenuMobile = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Bienvenido a Haky 🐶🦮
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding button component={Link} to="/">
          <BottomNavigationAction icon={<HomeIcon />} sx={{ padding: 2 }} />
          <Typography sx={{ flexGrow: 5 }}>Inicio</Typography>
        </ListItem>
        <ListItem disablePadding button component={Link} to="/pets">
          <BottomNavigationAction icon={<PetsIcon />} sx={{ padding: 2 }} />
          <Typography sx={{ flexGrow: 5 }}>Mis mascotas</Typography>
        </ListItem>
        <ListItem disablePadding button component={Link} to="/my-account">
          <BottomNavigationAction icon={<SettingsIcon />} sx={{ padding: 2 }} />
          <Typography sx={{ flexGrow: 5 }}>
            Configuración de la cuenta
          </Typography>
        </ListItem>
        <ListItem disablePadding button component={Link} to="/faq">
          <BottomNavigationAction icon={<HelpIcon />} sx={{ padding: 2 }} />
          <Typography sx={{ flexGrow: 5 }}>Ayuda</Typography>
        </ListItem>
        <Divider />
        <ListItem disablePadding button component={Link} onClick={logout}>
          <Typography sx={{ flexGrow: 10, padding: 3 }}>
            Cerrar sesión
          </Typography>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: "none" } }}
      >
        <MenuIcon style={{color:"black"}}/>
      </IconButton>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

MenuMobile.propTypes = {
  window: PropTypes.func,
};

export default MenuMobile;
