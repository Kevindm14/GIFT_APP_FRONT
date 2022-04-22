import {
  Grid,
  TableContainer,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Paper
} from '@mui/material'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../../config/baseURL'
import { getToken } from '../../../helpers/authHelper'

export const Events = () => {
  const [listEvents, setEvents] = useState([])

  const getEvents = async () => {
    // eslint-disable-next-line no-undef
    const res = await fetch(`${BASE_URL}/events`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })

    const data = await res.json()
    setEvents(data.events)
  }

  useEffect(() => {
    getEvents()
  }, [])

  return (
    <>
      <Grid container>
        <Typography sx={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center' }} color='GrayText' gutterBottom>
          Eventos
        </Typography>

        {
          listEvents
            // eslint-disable-next-line operator-linebreak
            ?
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID </TableCell>
                      <TableCell align='right'>Titulo</TableCell>
                      <TableCell align='right'>Descripcion</TableCell>
                      <TableCell align='right'>Creado</TableCell>
                      <TableCell align='right'>Actualizado</TableCell>
                      <TableCell align='right'>Acciones</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      listEvents.map((row, i) => (
                        <TableRow
                          key={i}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component='th' scope='row'>
                            {row.id}
                          </TableCell>
                          <TableCell align='right'>
                            <Link to={`/users/${row.id}`}>
                              {row.title}
                            </Link>
                          </TableCell>
                          <TableCell align='right'>{row.description}</TableCell>
                          <TableCell align='right'>{row.createdAt}</TableCell>
                          <TableCell align='right'>{row.updatedAt}</TableCell>
                          <TableCell align='right'>
                            <Button variant='contained' sx={{ marginLeft: '1em' }} color='error' size='small'>Borrar</Button>
                          </TableCell>
                        </TableRow>
                      ))
                    }
                  </TableBody>
                </Table>
              </TableContainer>
            : <h1>Loading</h1>
        }
      </Grid>
    </>
  )
}
