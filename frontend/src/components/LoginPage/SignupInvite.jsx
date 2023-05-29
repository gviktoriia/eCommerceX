import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { signup_route } from '../Routing/Routes'

function SignupInvite(props) {
  return (
    <Grid container direction='row' spacing={4} justifyContent='center' alignItems='center'>
        <Grid item>
            <Typography sx={{
                color: 'white',
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: 300,
                fontSize: '26px',
                lineHeight: '32px',
            }}>{props.invite}</Typography>
        </Grid>
        <Grid item>
            <Link to={props.to} style={{ textDecoration: 'underline', color: '#0040E5' }}>
                <Typography sx={{fontFamily: 'Montserrat',
                          fontSize: "26px",
                          fontWeight: "300px",
                          lineHeight: '32px',
                          "&:hover": {
                            fontSize: "25px",
                          }}}>{props.link}</Typography>
            </Link>
        </Grid>
    </Grid>
  )
}

export default SignupInvite