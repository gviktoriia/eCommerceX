import { Typography } from '@mui/material'
import React from 'react'

function LoginText(props) {
  return (
    <Typography sx={{
        color: 'white',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '28px',
        lineHeight: '34px',
        textAlign: 'center',
        paddingTop: '90px',
        paddingBottom: '70px',
    }}>{props.title}</Typography>
  )
}

export default LoginText