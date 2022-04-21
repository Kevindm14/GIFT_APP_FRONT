import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
import { Button, Card, Grid, TextField, Typography } from '@mui/material'
import FaceIcon from '@mui/icons-material/Face'
import { setToken } from '../../helpers/authHelper'

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required()
})

export const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onHandleSubmit = async (data) => {
    const options = {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: data.email, password: data.password })
    }

    // eslint-disable-next-line no-undef
    const res = await fetch('https://livegift-app.herokuapp.com/auth/signup', options)
    const dataRes = await res.json()
    setToken(dataRes.token)

    window.location = '/dashboard'
  }

  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
      style={{ minHeight: '100vh', backgroundColor: '#0B0F19' }}
    >
      <Card sx={cardStyle}>
        <form onSubmit={handleSubmit(onHandleSubmit)} style={formStyle}>
          <FaceIcon fontSize='large' />
          <Typography sx={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }} gutterBottom>
            Registrate
          </Typography>
          <div>
            <TextField
              {...register('email')}
              sx={{ width: '22rem' }}
              id='outlined-helperText'
              label='Correo'
              margin='normal'
              size='small'
              focused
            />
            <p>{errors.email?.message}</p>
          </div>

          <div className='mb-6'>
            <TextField
              {...register('password')}
              sx={{ width: '22rem' }}
              margin='normal'
              size='small'
              focused
              label='Contrasena'
              type='password'
            />
            <p>{errors.password?.message}</p>
          </div>

          <Grid sx={{ display: 'flex', flexDirection: 'column' }} spacing={3}>
            <Button type='submit' variant='contained' size='medium'>Ir alla!</Button>
            <Link to='/login' style={{ color: '#6A7687', textDecoration: 'none', fontSize: '.8em', marginTop: '1em' }}>Ya tienes una cuenta? Entra!</Link>
          </Grid>
        </form>
      </Card>
    </Grid>
  )
}

const cardStyle = {
  backgroundColor: '#111927',
  padding: 4,
  color: 'white',
  display: 'flex'
}

const formStyle = {
  color: 'white',
  textAlign: 'center'
}
