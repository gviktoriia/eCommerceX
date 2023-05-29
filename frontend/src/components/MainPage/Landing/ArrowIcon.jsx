import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid, Typography } from '@mui/material';

function ArrowIcon() {
  return (
    <Grid container direction="column" textAlign="center">
        <Grid item>
            <Typography sx={{
                color: "white",
                fontFamily: "Montserrat",
                fontStyle: 'normal',
                fontWeight: 100,
                fontSize: '24px',
                marginTop: "26vh",
            }}>До каталогу</Typography>
        </Grid>
        <Grid item>
            <ExpandMoreIcon style={{color: 'white', width: '50px', height: '50px', }} />
        </Grid>
    </Grid>
  )
}

export default ArrowIcon