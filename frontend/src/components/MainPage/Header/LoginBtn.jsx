import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { login_route } from '../../Routing/Routes'

function LoginBtn() {
  return (
    <Link to={login_route} >
      <Button variant='outlined'
      sx={{
          color: "white",
          borderColor: "White",
          fontFamily: "Montserrat",
          fontSize: '22px',
          fontWeight: "500px",
          textTransform: 'none',
          width: 'fit-content',
          height: '36px',
          borderRadius: '40px',
          "&:hover": {
              backgroundColor: "white",
              color: 'black',
          },
      }}>Вхід</Button>
    </Link>
  )
}

export default LoginBtn