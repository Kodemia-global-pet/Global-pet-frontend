import React from 'react'
import { Grid } from '@mui/material'
import MainNavbar from '../components/Header/MainNavbar/MainNavbar'
const LoginPage = () => {
  return (
    <>
      <h1>Hola prueba</h1>
      
      <Grid>
        <MainNavbar />
        <LoginForm />
      </Grid>
    </>
  )
}

export default LoginPage
