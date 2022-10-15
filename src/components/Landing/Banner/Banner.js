import { Box, Grid } from '@mui/material';
import React from 'react';

const Banner = () => {
    return (
        <Box>
            <Grid item container xs={12}>
                <Grid item xs={12} md={6}>
                    <h1>Bienvenido a Global Pet</h1>
                </Grid>
                <Grid item xs={12} md={6}>
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
                </Grid>
            </Grid>
        </Box>
    )
}

export default Banner