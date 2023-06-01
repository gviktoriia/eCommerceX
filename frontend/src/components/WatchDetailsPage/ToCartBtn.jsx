import { Button } from '@mui/material'
import React from 'react'

function ToCartBtn() {
  return (
    <Button variant='outlined' sx={{
        color: "white",
        borderColor: "white",
        fontFamily: "Montserrat",
        fontSize: { xs: '18px', sm: '20px', md: '22px' },
        fontWeight: "500px",
        borderWidth: '2px',
        textTransform: 'none',
        width: { xs: '250px', sm: '280px', md: '300px' },
        height: { xs: '45px', sm: '50px', md: '55px' },
        borderRadius: '20px',
        marginTop: { xs: '10px', sm: '20px', md: '30px' },
        "&:hover": {
            backgroundColor: "white",
            color: 'black',
        },
    }}>
        Додати в кошик
    </Button>
  )
}

export default ToCartBtn