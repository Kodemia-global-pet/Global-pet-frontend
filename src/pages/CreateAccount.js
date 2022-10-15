import { Grid } from '@mui/material'
import React from 'react'
import UserFormRegister from '../components/UserFormRegister/UserFormRegister'


const createAccount = () => {
  return (
    <Grid container >
    <Grid item xs={4} md={4} display="flex" justifyContent="center" alignItems="center" sx={{ backgroundColor: "#F0F0F0", color:"#545454"}}>
    <UserFormRegister></UserFormRegister>
    </Grid>
    </Grid>
  )
}

export default createAccount;