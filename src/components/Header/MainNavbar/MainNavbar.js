import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import PetsIcon from "@mui/icons-material/Pets";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";
import { Link as RouterLink} from "react-router-dom";
import { useLogedUser } from "../../../context/UserContext";
import MenuMobile from "../../MenuMobile/MenuMobile";

const MainNavbar = () => {
  //const [user, setUser] = useState(null);

  const { user } = useLogedUser();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "header_primary.main",
          borderBottom: "10px solid",
          borderColor: "header_secondary.main",
        }}
      >
        <Toolbar>
          <Box>
          <MenuMobile/>
          </Box>
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
              LinkComponent={RouterLink}
              to="/"
              icon={<HomeIcon />}
              sx={{display:{ xs: "none" , md: "inline-flex"} }}
            />
            {user && (
              <>
                <BottomNavigationAction
                  showLabel
                  label="Mis mascotas"
                  LinkComponent={RouterLink}
                  to="/pets"
                  icon={<PetsIcon />}
                />
                <BottomNavigationAction
                  showLabel
                  label="Configuracion"
                  LinkComponent={RouterLink}
                  to="/my-account"
                  icon={<SettingsIcon />}
                />
              </>
            )}
            <BottomNavigationAction
              showLabel
              label="Ayuda"
              LinkComponent={RouterLink}
              to="/faq"
              icon={<HelpIcon />}
              sx={{display:{ xs: "none" , md: "inline-flex"} }}
            />
          </Box>
          {!user && (
            <>
              <Box sx={{ marginX: 2 }}>
                <Button
                  LinkComponent={RouterLink}
                  to="/login"
                  variant="outlined"
                  sx={{ color: "black.main", borderColor: "black.main" }}
                >
                  {" "}
                  Iniciar sesion
                </Button>
              </Box>

              <Box>
                <Button
                  LinkComponent={RouterLink}
                  to="/create-account"
                  variant="outlined"
                  sx={{ color: "black.main", borderColor: "black.main" }}
                >
                  {" "}
                  Crear cuenta
                </Button>
              </Box>
            </>
          )}
          {user && (
            <React.Fragment>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar sx={{ width: 40, height: 40 }}>M</Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem as={RouterLink} to="/my-account">
                  <Avatar /> Mi cuenta
                </MenuItem>
                <Divider />
                <MenuItem as={RouterLink} to="/my-account">
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Configuracion de la cuenta
                </MenuItem>
                <MenuItem onClick={logout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Cerrar sesion
                </MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MainNavbar;
