import { Box, Button } from '@mui/material'
import React from 'react'

function SignupActionBtn(props) {
  return (
    <Box sx={{
        textAlign: 'center',
    }}>
        <Button onClick={props.handleClick} variant='outlined' sx={{
            color: "white",
            borderColor: "white",
            fontFamily: "Montserrat",
            fontSize: '22px',
            fontWeight: "500px",
            textTransform: 'none',
            width: '250px',
            height: '40px',
            borderRadius: '40px',
            marginTop: '20px',
            marginBottom: '70px',
            "&:hover": {
                backgroundColor: "white",
                color: 'black',
            },
        }}>
            Зареєструватись
        </Button>
    </Box>
  )
}

export default SignupActionBtn