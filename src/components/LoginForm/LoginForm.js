import { useForm } from 'react-hook-form'
import React, { useState } from 'react'
import { Grid, TextField, Alert } from '@mui/material'
import { useLogedUser } from '../../context/UserContext'

//let navigate = useNavigate();

const LoginForm = () => {
  const [error, setError] = useState(null)
  const { login } = useLogedUser()
  const {
    register,
    getValues,
    formState: { errors },
  } = useForm()
  const handleSubmit = async (e) => {
    e.preventDefault()

    const email = getValues('Email')
    const password = getValues('password')
    const result = await login(email, password)
    if (!result) setError('Tienes un error')
    else {
      setError(null)
      //navigate("/");
    }
  }

  return (
    <>
      <div className="fondogris">
        {error && <Alert severity="error">{error} </Alert>}
        <Grid display="flex" justifyContent="center" alignItems="center">
          <div>
            <form onSubmit={handleSubmit}>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                {...register('Email', { required: 'Completa Este Campo' })}
                error={errors.Email?.message}
              />
              <TextField
                id="outlined-basic"
                type="password"
                label="Contraseña"
                variant="outlined"
                {...register('password', {
                  required: 'Completa Este Campo',
                  minLength: { value: 4, message: 'Minimo 4 caracteres' },
                })}
              />
              <p>{errors.lastName?.message}</p>
              <input type="submit" />
            </form>
          </div>
        </Grid>
      </div>
    </>
  )
}

export default LoginForm
