import { Grid, Typography } from '@mui/material'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const DetailGift = () => {
  const [gift, setGift] = useState({})
  const { id } = useParams()

  const loadDetailGift = () => {
    // eslint-disable-next-line quotes
    // eslint-disable-next-line no-undef
    fetch('')
  }

  return (
    <>
      <Grid container>
        <Typography sx={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center' }} color='GrayText' gutterBottom>
          {id}
        </Typography>
      </Grid>
    </>
  )
}

export default DetailGift
