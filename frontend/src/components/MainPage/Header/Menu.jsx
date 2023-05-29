import React from 'react'
import  { Grid, Typography} from '@mui/material'
import {Link} from 'react-router-dom'
import { home_route, men_route, smart_route, women_route } from '../../Routing/Routes'


function Menu() {
  return (
    <Grid container spacing={3}>
        <Grid item>
            <Typography sx={{fontFamily: 'Montserrat',
                          fontSize: "22px",
                          fontWeight: "400px",
                          "&:hover": {
                            fontSize: "25px",
                          }}}>
              <Link to={home_route} style={{ textDecoration: 'none', color: 'white' }}>WATCH</Link>
            </Typography>
        </Grid>
        <Grid item>
            <Typography sx={{fontFamily: 'Montserrat',
                          fontSize: "22px",
                          fontWeight: "500px",
                          "&:hover": {
                            fontSize: "25px",
                          }}}>
              <Link to={men_route} style={{ textDecoration: 'none', color: 'white' }}>Чоловічі</Link>
            </Typography>
        </Grid>
        <Grid item>
            <Typography sx={{fontFamily: 'Montserrat',
                          fontSize: "22px",
                          fontWeight: "500px",
                          "&:hover": {
                            fontSize: "25px",
                          }}}>
              <Link to={women_route} style={{ textDecoration: 'none', color: 'white' }}>Жіночі</Link>
            </Typography>
        </Grid>
        <Grid item>
            <Typography sx={{fontFamily: 'Montserrat',
                          fontSize: "22px",
                          fontWeight: "500px",
                          "&:hover": {
                            fontSize: "25px",
                          }}}>
              <Link to={smart_route} style={{ textDecoration: 'none', color: 'white' }}>Смарт-годинники</Link>
            </Typography>
        </Grid>
    </Grid>
  )
}

export default Menu