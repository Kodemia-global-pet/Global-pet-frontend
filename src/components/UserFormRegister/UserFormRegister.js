import React from 'react'
import { useForm } from 'react-hook-form'
import { Grid, TextField, Button } from '@mui/material'
import { postResponse } from '../../services/backend'
import { useLogedUser } from '../../context/UserContext'
import { useNavigate } from 'react-router'

const UserFormRegister = () => {
  const { login } = useLogedUser()
  const navigate = useNavigate()
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm()

  const onSubmit = async (data) => {
    console.log(data)
    if (data.password !== data.confirmPassword) {
      setError('confirmPassword', { message: 'Las contraseñas no coinciden' })
      return false
    }
    try {
      const responseData = await postResponse(data.name, data.email, data.password)
      const jsonData = await responseData.json()
      console.log(jsonData)
      if (jsonData.success) {
        const result = await login(data.email, data.password)
        if (result) {
          return navigate('/')
        }
      }
    } catch (error) {
      alert('you entered your data wrong')
      console.log("error", error)
    }
  }

  return (
    <section>
      <h3>¡Bienvenido a Global Pet!</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid item sx={{ pb: 2 }}>
          <TextField
            {...register('name', {
              required: 'Ingresa tu nombre',
              minLength: {
                value: 10,
                message: 'El nombre debe contener al menos 10 caracteres',
              },
            })}
            label="Nombre"
            size="small"
            required
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        </Grid>
        <Grid item sx={{ pb: 2 }}>
          <TextField
            {...register('email', {
              required: 'true',
            })}
            label="Correo"
            type="email"
            size="small"
            required
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </Grid>
        <Grid item sx={{ pb: 2 }}>
          <TextField
            {...register('password', {
              required: 'Ingresa tu contraseña',
              minLength: {
                value: 8,
                message: 'La contraseña debe contener al menos 8 caracteres',
              },
            })}
            label="Contraseña"
            size="small"
            required
            error={!!errors.password}
            helperText={errors.password?.message}
            type="password"
          />
        </Grid>
        <Grid item sx={{ pb: 2 }}>
          <TextField
            {...register('confirmPassword', {
              required: 'Confirma tu contraseña',
              minLength: {
                value: 8,
                message: 'La contraseña debe contener al menos 8 caracteres',
              },
            })}
            label="Confirma tu contraseña"
            size="small"
            required
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
            type="password"
          />
        </Grid>
        <Grid
          item
          sx={{ pb: 2 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Button variant="contained" type="submit">
            Continuar
          </Button>
        </Grid>
        <p>¿Ya tienes cuenta? | Inicia sesión</p>
      </form>
    </section>
  )
}
export default UserFormRegister
