import React from 'react'
import  { Grid, Typography} from '@mui/material'
import {Link} from 'react-router-dom'
import { home_route, men_route, smart_route, women_route } from '../../Routing/Routes'


function Menu() {
  return (
    <Grid container spacing={2}>
        <Grid item>
            <Typography sx={{fontFamily: 'Montserrat',
                          fontSize: 'clamp(20px, 3vw, 16px)',
                          fontWeight: "400px",
                          "&:hover": {
                            textDecoration: "underline",
                            color: 'white',
                          }}}>
              <Link to={home_route} style={{ textDecoration: 'none', color: 'white' }}>WATCH</Link>
            </Typography>
        </Grid>
        <Grid item>
            <Typography sx={{fontFamily: 'Montserrat',
                          fontSize: 'clamp(20px, 3vw, 16px)',
                          fontWeight: "500px",
                          "&:hover": {
                            textDecoration: "underline",
                            color: 'white',
                          }}}>
              <Link to={men_route} style={{ textDecoration: 'none', color: 'white' }}>Чоловічі</Link>
            </Typography>
        </Grid>
        <Grid item>
            <Typography sx={{fontFamily: 'Montserrat',
                          fontSize: 'clamp(20px, 3vw, 16px)',
                          fontWeight: "500px",
                          "&:hover": {
                            textDecoration: "underline",
                            color: 'white',
                          }}}>
              <Link to={women_route} style={{ textDecoration: 'none', color: 'white' }}>Жіночі</Link>
            </Typography>
        </Grid>
        <Grid item>
            <Typography sx={{fontFamily: 'Montserrat',
                          fontSize: 'clamp(20px, 3vw, 16px)',
                          fontWeight: "500px",
                          "&:hover": {
                            textDecoration: "underline",
                            color: 'white',
                          }}}>
              <Link to={smart_route} style={{ textDecoration: 'none', color: 'white' }}>Смарт-годинники</Link>
            </Typography>
        </Grid>
    </Grid>
  )
}

export default Menu