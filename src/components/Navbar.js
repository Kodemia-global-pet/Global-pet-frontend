import React from 'react'
import {AppBar, Toolbar, Typography} from '@mui/material'
import Button from '@mui/material/Button';




const Navbar = () => {
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
            LOGO
          </Typography>

              
                <Button variant="outlined" sx={{ color: "black.main", borderColor: "black.main", mb:1}}> Crear cuenta</Button>
             </Toolbar>
        </AppBar>
      </div>
    )
}

export default Navbar