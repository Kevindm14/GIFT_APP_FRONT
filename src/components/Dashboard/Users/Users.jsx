import {
  Grid,
  TableContainer,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper
} from '@mui/material'
import { useState, useEffect } from 'react'
import { getToken } from '../../../helpers/authHelper'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../../config/baseURL'

export const Users = () => {
  const [listUsers, setUsers] = useState([])

  const getUsers = async () => {
    // eslint-disable-next-line no-undef
    const res = await fetch(`${BASE_URL}/users`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })

    const data = await res.json()
    setUsers(data.users)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <Grid container>
      <Typography sx={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center' }} color='GrayText' gutterBottom>
        Usuarios
      </Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>ID </TableCell>
              <TableCell align='right'>Nombres</TableCell>
              <TableCell align='right'>Correo</TableCell>
              <TableCell align='right'>Creado</TableCell>
              <TableCell align='right'>Actualizado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listUsers.map((row, i) => (
              <TableRow
                key={i}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {row.id}
                </TableCell>
                <TableCell align='right'>
                  <Link to={`/users/${row.id}`}>
                    {row.first_name} {row.last_name}
                  </Link>
                </TableCell>
                <TableCell align='right'>{row.email}</TableCell>
                <TableCell align='right'>{row.created_at}</TableCell>
                <TableCell align='right'>{row.updated_at}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  )
}
