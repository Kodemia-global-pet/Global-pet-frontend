import React from 'react'
import {AppBar, Toolbar, Typography} from '@mui/material'
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const MainNavbar = () => {
  const [value, setValue] = React.useState(0);
    return (
      <div>
        <AppBar sx={{backgroundColor: "header_primary.main"}}>
             <Toolbar>
             <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO HAKY
          </Typography>

      <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
              
                <Button variant="outlined" sx={{ color: "black.main", borderColor: "black.main", mb:1}}> Crear cuenta</Button>
             </Toolbar>
        </AppBar>
      </div>
    )
}

export default MainNavbar;