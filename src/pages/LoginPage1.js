import React from 'react'
import { Grid, ThemeProvider } from '@mui/material'
import LoginForm1 from '../components/LoginForm/LoginForm1'
import theme from '../theme/theme'

const LoginPage1 = () => {
  return (
    <>
      <Grid>
        <ThemeProvider theme={theme}>
          <LoginForm1 />
        </ThemeProvider>
      </Grid>
    </>
  )
}

export default LoginPage1
