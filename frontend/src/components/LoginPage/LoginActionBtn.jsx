import { Box, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { profile_route } from '../Routing/Routes'

function LoginActionBtn() {
  return (
    <Link to={profile_route}>
        <Box sx={{
            textAlign: 'center',
        }}>
            <Button variant='outlined' sx={{
                color: "white",
                borderColor: "white",
                fontFamily: "Montserrat",
                fontSize: '22px',
                fontWeight: "500px",
                textTransform: 'none',
                width: '150px',
                height: '40px',
                borderRadius: '40px',
                marginTop: '20px',
                marginBottom: '70px',
                "&:hover": {
                    backgroundColor: "white",
                    color: 'black',
                },
            }}>
                Увійти
            </Button>
        </Box>
    </Link>
  )
}

export default LoginActionBtn