import { Grid, Typography } from '@mui/material'
import React from 'react'

function MainText() {
  return (
    <Grid container direction="column" marginTop="186px">
      <Grid item>
        <Typography
          sx={{
            color: 'white',
            fontFamily: 'Montserrat',
            fontWeight: 800,
            fontSize: '50px',
            textAlign: 'left',
            marginLeft: '200px',
          }}
        >
          SALE
        </Typography>
      </Grid>
      <Grid item >
        <Typography
          sx={{
            color: 'white',
            width: "300px",
            height: "98px",
            fontFamily: 'Montserrat',
            fontWeight: 400,
            fontSize: '40px',
            textAlign: 'left',
            marginLeft: '200px',
            lineHeight: '49px',
          }}
        >
          Літні знижки на годинники
        </Typography>
      </Grid>
    </Grid>
  )
}

export default MainText