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
import { getToken } from '../../../helpers/authHelper'

export const Gifts = () => {
  const [listGifts, setGifts] = useState([])

  const getGifts = async () => {
    // eslint-disable-next-line no-undef
    const res = await fetch('http://localhost:3000/gifts', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })

    const data = await res.json()
    setGifts(data.gifts)
  }

  useEffect(() => {
    getGifts()
  }, [])

  return (
    <>
      <Grid container>
        <Typography sx={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center' }} color='GrayText' gutterBottom>
          Regalos!
        </Typography>

        {
          listGifts
            // eslint-disable-next-line operator-linebreak
            ?
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID </TableCell>
                      <TableCell align='right'>Titulo</TableCell>
                      <TableCell align='right'>Creado</TableCell>
                      <TableCell align='right'>Actualizado</TableCell>
                      <TableCell align='right'>Acciones</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      listGifts.map((row, i) => (
                        <TableRow
                          key={i}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component='th' scope='row'>
                            {row.id}
                          </TableCell>
                          <TableCell align='right'>
                            <Link to={`/gifts/${row.id}`}>
                              {row.title}
                            </Link>
                          </TableCell>
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
