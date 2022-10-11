import { Grid } from '@mui/material'
import React from 'react'
import UserFormRegister from '../components/UserFormRegister/UserFormRegister'


const HomePage = () => {
  return (
    <Grid container xs={4} md={4} display="flex" justifyContent="center" alignItems="center" sx={{ backgroundColor: "#F0F0F0", color:"#545454"}}>
    <UserFormRegister></UserFormRegister>
    </Grid>
  )
}

export default HomePage