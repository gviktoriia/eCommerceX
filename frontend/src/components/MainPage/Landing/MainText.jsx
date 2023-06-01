import { Grid, Typography } from '@mui/material'
import React from 'react'

function MainText() {
  return (
    <Grid container direction="column" marginTop="186px">
      <Grid item>
        <Typography
          variant="h1"
          sx={{
            color: 'white',
            fontFamily: 'Montserrat',
            fontWeight: 800,
            fontSize: 'clamp(32px, 6vw, 50px)',
            textAlign: 'left',
            marginLeft: { xs: '20px', sm: '40px', md: '80px', lg: '200px' },
          }}
        >
          SALE
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant="h2"
          sx={{
            color: 'white',
            width: { xs: '80%', sm: '60%', md: '50%', lg: '300px' },
            height: '98px',
            fontFamily: 'Montserrat',
            fontWeight: 400,
            fontSize: 'clamp(24px, 4vw, 40px)',
            textAlign: 'left',
            marginLeft: { xs: '20px', sm: '40px', md: '80px', lg: '200px' },
            lineHeight: '1.3',
          }}
        >
          Літні знижки на годинники
        </Typography>
      </Grid>
    </Grid>
  )
}

export default MainText