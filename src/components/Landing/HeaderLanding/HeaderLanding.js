import { Box } from '@mui/material';
import React from 'react';

const HeaderLanding = () => {
  return (
    <header className='landing-header' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/header-landing.png'})`}}>
        <Box
        component="img"
        sx={{
          height: 120,
          width: 120,
          maxHeight: { xs: 80, md: 120 },
          maxWidth: { xs: 80, md: 120 },
        }}
        alt="Global Pet"
        src={process.env.PUBLIC_URL + '/images/logo.png'}
      />
    </header>
  )
}

export default HeaderLanding